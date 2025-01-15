document.addEventListener('DOMContentLoaded', () => {

  //Mobile Menu Functionality
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
 });

// Animate hero image on page load
document.body.classList.add('loaded');

  // Dark Mode Toggle
  const darkModeToggle = document.querySelector('.dark-mode-toggle');
  darkModeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      document.body.classList.toggle('light-mode');

      const icon = darkModeToggle.querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
  });

  // Element Reveal Animation
  function elementReveal(selector, options = {}){
    const elements = document.querySelectorAll(selector);
      const defaultOptions = {
          root: null,
          rootMargin: '0px',
          threshold: 0.1,
        activeClass: 'active'
      };
      const combinedOptions = { ...defaultOptions, ...options };
      const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add(combinedOptions.activeClass);
              }
          });
      }, combinedOptions);

     elements.forEach(element => observer.observe(element));
  }

  // step animation
  elementReveal('.step',{threshold: 0.4});
  //expertise item animation
  elementReveal('.expertise-item', { threshold: 0.2 });
//portfolio animation
  elementReveal('.project', { threshold: 0.2 });

  // Smooth scrolling for navigation links
const navLinksSmoothScroll = document.querySelectorAll('.nav-links a[href^="#"]');
  navLinksSmoothScroll.forEach(link => {
      link.addEventListener('click', function(event) {
          event.preventDefault();
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
              targetElement.scrollIntoView({
                  behavior: 'smooth'
              });
               // Close Mobile Menu after clicking on nav link
              navLinks.classList.remove('active');
               menuToggle.classList.remove('active');
          }
      });
  });
});