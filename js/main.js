document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Navigation Toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const mainNav = document.querySelector('.main-nav');
  
  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener('click', () => {
      mainNav.classList.toggle('open');
      const expanded = mainNav.classList.contains('open');
      mobileToggle.setAttribute('aria-expanded', expanded);
    });
  }

  // 2. Active Nav Link Highlighting
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.main-nav a');
  
  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    if (linkPath === currentPath) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // 3. Header Scroll Effect
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // 4. Scroll Reveal Animations (Intersection Observer)
  const revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length > 0) {
    const revealOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      });
    }, revealOptions);

    revealElements.forEach(el => {
      revealOnScroll.observe(el);
    });
  }

  // 5. Floor Plan Filters
  const filterBtns = document.querySelectorAll('.filter-btn');
  const planCards = document.querySelectorAll('.plan-card');

  if (filterBtns.length > 0 && planCards.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Update active button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        // Filter cards
        planCards.forEach(card => {
          if (filterValue === 'all' || card.getAttribute('data-beds') === filterValue) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // 6. FAQ Accordion
  const faqQuestions = document.querySelectorAll('.faq-question');
  if (faqQuestions.length > 0) {
    faqQuestions.forEach(question => {
      question.addEventListener('click', () => {
        const item = question.parentElement;
        const isActive = item.classList.contains('active');
        const answer = item.querySelector('.faq-answer');
        
        // Close all other active items
        document.querySelectorAll('.faq-item.active').forEach(activeItem => {
          if (activeItem !== item) {
            activeItem.classList.remove('active');
            activeItem.querySelector('.faq-answer').style.maxHeight = null;
          }
        });

        // Toggle current item
        if (isActive) {
          item.classList.remove('active');
          answer.style.maxHeight = null;
        } else {
          item.classList.add('active');
          answer.style.maxHeight = answer.scrollHeight + "px";
        }
      });
    });
  }

  // 7. Inject Current Year
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // 8. Contact Form Validation (Demo Only)
  const contactForm = document.getElementById('tour-form');
  const successBanner = document.getElementById('form-success');
  
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const emailInput = document.getElementById('email');
      const phoneInput = document.getElementById('phone');
      
      let isValid = true;

      // Basic Email Regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value)) {
        isValid = false;
        alert('Please enter a valid email address.');
      }

      // Basic Phone check (at least 10 digits)
      const phoneDigits = phoneInput.value.replace(/\D/g, '');
      if (phoneDigits.length < 10) {
        isValid = false;
        alert('Please enter a valid phone number (at least 10 digits).');
      }

      if (isValid) {
        successBanner.style.display = 'block';
        contactForm.reset();
        
        // Hide success banner after 5 seconds
        setTimeout(() => {
          successBanner.style.display = 'none';
        }, 5000);
      }
    });
  }

  // 8. Hero Slider Logic
  const heroSliderImages = document.querySelectorAll('.slide-img');
  if (heroSliderImages.length > 0) {
    let currentSlide = 0;
    setInterval(() => {
      heroSliderImages[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % heroSliderImages.length;
      heroSliderImages[currentSlide].classList.add('active');
    }, 3000); // Change image every 3 seconds
  }
});
