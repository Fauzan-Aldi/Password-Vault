// Password visibility toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  // Find all eye icons in password fields
  const eyeIcons = document.querySelectorAll('.password-toggle');
  
  // Add click event to each eye icon
  eyeIcons.forEach(icon => {
    icon.addEventListener('click', function() {
      // Get the password wrapper that contains this icon
      const passwordWrapper = this.closest('.wrapper');
      const passwordText = passwordWrapper.querySelector('.text');
      const passwordField = passwordWrapper.querySelector('.password-field');
      
      // Toggle password visibility
      if (passwordText.textContent === '•••••••••••') {
        // Show password
        passwordText.textContent = passwordField.textContent;
        // Change icon to show "hide" icon
        this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clip-rule="evenodd" />
          <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
        </svg>`;
        
        // Add the spin animation for visual feedback
        this.classList.add('spin-anim');
      } else {
        // Hide password
        passwordText.textContent = '•••••••••••';
        // Change icon back to "show" icon
        this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
          <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
        </svg>`;
      }
      
      // Remove animation class after animation completes
      setTimeout(() => {
        this.classList.remove('spin-anim');
      }, 800);
    });
  });

  // Handle copy functionality
  const copyButtons = document.querySelectorAll('.icon[data-content]');
  
  copyButtons.forEach(button => {
    button.addEventListener('click', function() {
      const textToCopy = this.getAttribute('data-content');
      navigator.clipboard.writeText(textToCopy)
        .then(() => {
          // Add animation class to show feedback
          this.classList.add('spin-anim');
          
          // Remove animation class after animation completes
          setTimeout(() => {
            this.classList.remove('spin-anim');
          }, 800);
        })
        .catch(err => {
          console.error('Failed to copy text: ', err);
        });
    });
  });

  // Get all password toggles
  const toggleIcons = document.querySelectorAll('.toggle-password');
    
  // Add click event to each icon
  toggleIcons.forEach(icon => {
    icon.addEventListener('click', function() {
      // Find the associated password element
      const passwordElement = this.closest('.wrapper').querySelector('.password');
      
      // Toggle visibility
      if (passwordElement.textContent === '••••••••') {
        // Get the decrypted password from data attribute
        const decryptedPassword = passwordElement.getAttribute('data-password');
        passwordElement.textContent = decryptedPassword;
        
        // Add spin animation
        this.classList.add('spin-anim');
        setTimeout(() => {
          this.classList.remove('spin-anim');
        }, 800); // Match animation duration from CSS
      } else {
        // Hide the password
        passwordElement.textContent = '••••••••';
      }
    });
  });

  // Handle password visibility toggle
  const passwordWrappers = document.querySelectorAll('.card .card-content .wrapper');
    
  passwordWrappers.forEach(wrapper => {
    const passwordText = wrapper.querySelector('.text');
    const eyeIcon = wrapper.querySelector('.icon');
    
    if (eyeIcon && passwordText) {
      eyeIcon.addEventListener('click', function() {
        // Toggle the spin animation class
        this.classList.add('spin-anim');
        setTimeout(() => {
          this.classList.remove('spin-anim');
        }, 800);
        
        // Toggle between hidden and visible password
        if (passwordText.dataset.hidden === 'true') {
          // Show password
          passwordText.textContent = passwordText.dataset.password;
          passwordText.dataset.hidden = 'false';
          eyeIcon.src = eyeIcon.src.replace('eye.svg', 'eye-slash.svg');
        } else {
          // Hide password
          passwordText.textContent = '••••••••';
          passwordText.dataset.hidden = 'true';
          eyeIcon.src = eyeIcon.src.replace('eye-slash.svg', 'eye.svg');
        }
      });
    }
  });
});
