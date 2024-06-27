const mobileNavbar = document.querySelector('.mobile_navbar');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.mobile_navbar .nav_links');

hamburger.addEventListener('click', () => {
    if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    }
    else {
        navLinks.classList.add('active');
    }
});