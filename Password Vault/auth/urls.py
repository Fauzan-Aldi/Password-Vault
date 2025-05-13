from django.urls import path
from .views import AuthLoginView, logoutView, RegisterView

urlpatterns = [
    path('login/', AuthLoginView.as_view(), name='login'),
    path('register/', RegisterView.as_view(), name='register'),
    path('logout', logoutView, name="logout")
]
