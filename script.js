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

document.addEventListener('DOMContentLoaded', (event) => {
    const darkModeToggle = document.getElementById('darkModeToggle1');
    const body = document.body;
  
    // Check for saved user preference, if any, on page load
    if (localStorage.getItem('darkMode') === 'enabled') {
      body.classList.add('dark-mode');
    }
  
    darkModeToggle.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
  
      // Save or remove the preference
      if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
      } else {
        localStorage.removeItem('darkMode');
      }
    });
  });
  document.addEventListener('DOMContentLoaded', (event) => {
    const darkModeToggle = document.getElementById('darkModeToggle2');
    const body = document.body;
  
    // Check for saved user preference, if any, on page load
    if (localStorage.getItem('darkMode') === 'enabled') {
      body.classList.add('dark-mode');
    }
  
    darkModeToggle.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
  
      // Save or remove the preference
      if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
      } else {
        localStorage.removeItem('darkMode');
      }
      if (footer.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
      } else {
        localStorage.removeItem('darkMode');
      }
    });
  });