const mobileNavbar = document.querySelector('.mobile_navbar');
const hamburger = document.querySelector('.hamburger-icon');
const navLinks = document.querySelector('.nav_link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');    
    if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    }
    else {
        navLinks.classList.add('active');
    }
});