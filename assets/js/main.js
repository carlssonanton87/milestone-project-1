// assets/js/main.js

// Wait until the entire DOM is loaded.
// main.js
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
  
    if (navToggle && navMenu) {
      navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
  
        // (Optional) For accessibility, toggle aria-expanded:
        const expanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
        navToggle.setAttribute('aria-expanded', !expanded);
      });
    }
  });
  
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('newsletter-form');
  const successMessage = document.getElementById('newsletter-success');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault(); // prevent reload
      successMessage.style.display = 'block'; // show message
      form.reset(); // clear form
    });
  }
});
