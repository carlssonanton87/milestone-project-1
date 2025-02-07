// assets/js/main.js

// Wait for the DOM to fully load before executing the script
document.addEventListener('DOMContentLoaded', () => {
    // Select the toggle button and navigation menu elements
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
  
    // Check if the elements exist
    if (navToggle && navMenu) {
      // Add a click event listener to the toggle button
      navToggle.addEventListener('click', () => {
        // Toggle the 'active' class on the nav menu
        navMenu.classList.toggle('active');
      });
    }
  });
  