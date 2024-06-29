const mobileNavbar = document.querySelector('.mobile_navbar');
const hamburger = document.querySelector('.hamburger-icon');
const navLinks = document.querySelector('.nav_link');
const btn_color1 = document.querySelector('.btn_color1');
const btn_color2 = document.querySelector('.btn_color2'); 

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');    
    if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    }
    else {
        navLinks.classList.add('active');
    }
});

btn_color1.addEventListener('click', () => {
    window.open('./assets/Yash_Choraria_Resume.pdf', '_blank');
});

btn_color2.addEventListener('click', () => {
    window.location.href = '.#contact'; 
});