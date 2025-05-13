document.addEventListener('DOMContentLoaded', function() {
  // Password visibility toggle for table rows
  const toggleButtons = document.querySelectorAll('.toggle-password-btn');
  
  toggleButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const cell = this.closest('.password-cell');
      const hidden = cell.querySelector('.password-hidden');
      const visible = cell.querySelector('.password-visible');
      const eyeIcon = this.querySelector('.eye-icon');
      const eyeOffIcon = this.querySelector('.eye-off-icon');
      
      // Force initial state if style is empty
      if (!hidden.style.display) {
        hidden.style.display = 'inline';
      }
      
      if (hidden.style.display === 'none') {
        // Hide password
        hidden.style.display = 'inline';
        visible.style.display = 'none';
        eyeIcon.style.display = 'inline';
        eyeOffIcon.style.display = 'none';
      } else {
        // Show password
        hidden.style.display = 'none';
        visible.style.display = 'inline';
        eyeIcon.style.display = 'none';
        eyeOffIcon.style.display = 'inline';
      }
    });
  });
});