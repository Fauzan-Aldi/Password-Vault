// This script handles toggling password visibility when clicking the eye icon
document.addEventListener('DOMContentLoaded', function() {
  // Handle password visibility in the card view (list.html)
  document.querySelectorAll('.toggle-password').forEach(function(button) {
    button.addEventListener('click', function() {
      // Get the parent wrapper that contains both password displays
      const passwordWrapper = this.closest('.wrapper');
      // Find the hidden and visible elements
      const hiddenEl = passwordWrapper.querySelector('.password-hidden');
      const visibleEl = passwordWrapper.querySelector('.password-visible');

      // Toggle visibility
      if (hiddenEl.style.display !== 'none') {
        hiddenEl.style.display = 'none';
        visibleEl.style.display = 'block';
        this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>';
      } else {
        hiddenEl.style.display = 'block';
        visibleEl.style.display = 'none';
        this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>';
      }
      
      // Add spin animation
      this.classList.add('spin-anim');
      setTimeout(() => {
        this.classList.remove('spin-anim');
      }, 800);
    });
  });
  
  // Handle password visibility in the table view (manage.html)
  document.querySelectorAll('.toggle-password-btn').forEach(function(button) {
    button.addEventListener('click', function() {
      // Get the parent cell that contains password elements
      const passwordCell = this.closest('.password-cell');
      // Find the hidden and visible elements
      const hiddenEl = passwordCell.querySelector('.password-hidden');
      const visibleEl = passwordCell.querySelector('.password-visible');
      
      // Toggle visibility
      if (hiddenEl.style.display !== 'none') {
        hiddenEl.style.display = 'none';
        visibleEl.style.display = 'inline';
        this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="18" height="18"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>';
      } else {
        hiddenEl.style.display = 'inline';
        visibleEl.style.display = 'none';
        this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="18" height="18"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>';
      }
    });
  });
});