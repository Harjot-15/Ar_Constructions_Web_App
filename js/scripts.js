document.addEventListener('DOMContentLoaded', () => {

  // Detect system theme and apply it
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.add('light-mode');
  }

  // Mobile Menu Functionality
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const getStartedBtn = document.querySelector('.primary-btn');
  const learnMoreBtn = document.querySelector('.hero-content .primary-btn');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
  });

  // Close menu when clicking outside
  document.addEventListener('click', (event) => {
    if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
      navLinks.classList.remove('active');
      menuToggle.classList.remove('active');
    }
  });

  // Smooth scroll to top when clicking "Home" in nav
  const homeLink = document.querySelector('a[href="#"]');
  if (homeLink) {
    homeLink.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default jump behavior
      window.scrollTo({
          top: 0,
          behavior: 'smooth' // Smooth scrolling effect
      });
    });
  }

  // Scroll to Services when clicking "Get Started" button
  if (getStartedBtn) {
    getStartedBtn.addEventListener('click', function(event) {
      event.preventDefault();
      const servicesSection = document.querySelector('#services');
      if (servicesSection) {
        servicesSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  }

  // Scroll to Portfolio when clicking "Learn More" button
  if (learnMoreBtn) {
    learnMoreBtn.addEventListener('click', function(event) {
      event.preventDefault();
      const portfolioSection = document.querySelector('#portfolio');
      if (portfolioSection) {
        portfolioSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  }

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
  function elementReveal(selector, options = {}) {
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
  elementReveal('.step', { threshold: 0.4 });
  // expertise item animation
  elementReveal('.expertise-item', { threshold: 0.2 });
  // portfolio animation
  elementReveal('.project', { threshold: 0.2 });

  // Smooth scrolling for navigation links
  const navLinksSmoothScroll = document.querySelectorAll('.nav-links a[href^="#"]');
  navLinksSmoothScroll.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId !== "#") {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      } else {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
      // Close Mobile Menu after clicking on nav link
      navLinks.classList.remove('active');
      menuToggle.classList.remove('active');
    });
  });
});


document.addEventListener('DOMContentLoaded', () => {
  function toggleExpertiseCard(card) {
      // Check if this card is already expanded
      const isExpanded = card.classList.contains('expanded');

      // Close any other expanded card
      document.querySelectorAll('.expertise-item.expanded').forEach((otherCard) => {
          if (otherCard !== card) otherCard.classList.remove('expanded');
      });

      // Toggle the clicked card
      if (isExpanded) {
          card.classList.remove('expanded');
      } else {
          card.classList.add('expanded');
      }
  }

  // Add event listener to each expertise card
  document.querySelectorAll('.expertise-item').forEach((card) => {
      card.addEventListener('click', () => toggleExpertiseCard(card));
  });
});
