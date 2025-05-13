// Password visibility toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  // Card view toggle (list.html)
  const toggleButtons = document.querySelectorAll('.toggle-password');
  
  toggleButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Find the closest password container
      const passwordWrapper = this.closest('.password');
      const hiddenEl = passwordWrapper.querySelector('.password-hidden');
      const visibleEl = passwordWrapper.querySelector('.password-visible');
      const eyeIcon = this.querySelector('.eye-icon');
      const eyeOffIcon = this.querySelector('.eye-off-icon');
      
      // Toggle visibility
      if (hiddenEl.style.display !== 'none') {
        // Show password
        hiddenEl.style.display = 'none';
        visibleEl.style.display = 'inline';
        eyeIcon.style.display = 'none';
        eyeOffIcon.style.display = 'inline';
      } else {
        // Hide password
        hiddenEl.style.display = 'inline';
        visibleEl.style.display = 'none';
        eyeIcon.style.display = 'inline';
        eyeOffIcon.style.display = 'none';
      }
    });
  });

  // Table view toggle (manage.html)
  const tableToggleButtons = document.querySelectorAll('.toggle-password-btn');
  
  tableToggleButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent button from submitting forms
      
      // Find the closest password container
      const cell = this.closest('.password-cell');
      const hiddenEl = cell.querySelector('.password-hidden');
      const visibleEl = cell.querySelector('.password-visible');
      const eyeIcon = this.querySelector('.eye-icon');
      const eyeOffIcon = this.querySelector('.eye-off-icon');
      
      // Toggle visibility
      if (hiddenEl.style.display !== 'none') {
        // Show password
        hiddenEl.style.display = 'none';
        visibleEl.style.display = 'inline';
        eyeIcon.style.display = 'none';
        eyeOffIcon.style.display = 'inline';
      } else {
        // Hide password
        hiddenEl.style.display = 'inline';
        visibleEl.style.display = 'none';
        eyeIcon.style.display = 'inline';
        eyeOffIcon.style.display = 'none';
      }
    });
  });
  
  // Copy functionality
  const copyIcons = document.querySelectorAll('.icon[data-content]:not(.toggle-password)');
  
  copyIcons.forEach(icon => {
    icon.addEventListener('click', function() {
      const content = this.getAttribute('data-content');
      navigator.clipboard.writeText(content);
      
      // Show animation feedback
      this.classList.add('spin-anim');
      setTimeout(() => {
        this.classList.remove('spin-anim');
      }, 800);
    });
  });
});