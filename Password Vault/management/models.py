from django.db import models
from django.urls import reverse
from django.contrib.auth.models import User
import base64
from cryptography.fernet import Fernet
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC
from django.conf import settings
import os

def get_encryption_key(user_id):
    """Generate a unique encryption key based on user_id and SECRET_KEY"""
    salt = str(user_id).encode()
    kdf = PBKDF2HMAC(
        algorithm=hashes.SHA256(),
        length=32,
        salt=salt,
        iterations=100000,
    )
    key = base64.urlsafe_b64encode(kdf.derive(settings.SECRET_KEY.encode()))
    return key

class Account(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    image_site = models.ImageField(
        upload_to="images", default="images/default.png", blank=True)
    site_name = models.URLField(max_length=255)
    email = models.EmailField(max_length=255)
    username = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    
    def encrypt_password(self, raw_password):
        """Encrypt the password before saving"""
        key = get_encryption_key(self.user_id)
        fernet = Fernet(key)
        return fernet.encrypt(raw_password.encode()).decode()
    
    def decrypt_password(self):
        """Decrypt the stored password"""
        key = get_encryption_key(self.user_id)
        fernet = Fernet(key)
        return fernet.decrypt(self.password.encode()).decode()
    
    def save(self, *args, **kwargs):
        # Only encrypt if this is a new record or password changed and isn't already encrypted
        if not self.pk or kwargs.pop('password_changed', False):
            try:
                # Try to decrypt - if it works, it's already encrypted
                self.decrypt_password()
            except:
                # If decryption fails, it's not encrypted yet
                self.password = self.encrypt_password(self.password)
        super().save(*args, **kwargs)

    def get_absolute_url(self):
        return reverse('management:list')

    def __str__(self):
        return self.site_name
