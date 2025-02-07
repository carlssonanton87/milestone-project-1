// assets/js/main.js

// Wait until the entire DOM is loaded.
document.addEventListener('DOMContentLoaded', () => {
    // Select the mobile nav toggle button and the nav menu container.
    const toggle = document.querySelector('.nav-toggle');
    const menu = document.querySelector('.nav-menu');
    
    // If toggle and menu exist, add an event listener for clicks.
    toggle?.addEventListener('click', () => {
        // Toggle the 'active' class to show or hide the mobile menu.
        menu.classList.toggle('active');
    });
});
