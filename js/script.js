document.addEventListener('DOMContentLoaded', function() {
  // Navigation toggle (for mobile)
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  })
  });

  
  // Slider functionality
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.slide-btn.prev');
  const nextBtn = document.querySelector('.slide-btn.next');
  let current = 0;
  const total = slides.length;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === index) {
        slide.classList.add('active');
      }
    });
  }

  function nextSlide() {
    current = (current + 1) % total;
    showSlide(current);
  }

  function prevSlide() {
    current = (current - 1 + total) % total;
    showSlide(current);
  }

  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);

  // Auto slide with fade effect
  let slideInterval = setInterval(()=>{
    current = (current + 1) % total;
    showSlide(current);
  }, 5000);

  // Pause on hover
  const hero = document.querySelector('.hero-slider');
  hero.addEventListener('mouseover', () => {
    clearInterval(slideInterval);
  });
  hero.addEventListener('mouseout', () => {
    slideInterval = setInterval(nextSlide, 5000);
  });

  document.addEventListener('DOMContentLoaded', function() {
  // Navigation toggle, etc.

  // Slider behavior
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.slide-btn.prev');
  const nextBtn = document.querySelector('.slide-btn.next');
  let current = 0;
  const total = slides.length;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });
  }

  nextBtn.addEventListener('click', () => {
    current = (current + 1) % total;
    showSlide(current);
  });
  prevBtn.addEventListener('click', () => {
    current = (current - 1 + total) % total;
    showSlide(current);
  });

  // Form validation on contact page
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const errors = [];
      const name = contactForm.name.value.trim();
      const email = contactForm.email.value.trim();
      const message = contactForm.message.value.trim();

      if (!name) {
        errors.push("Name is required.");
      }

      if (!email) {
        errors.push("Email is required.");
      } else {
        const re = /^\S+@\S+\.\S+$/;
        if (!re.test(email)) {
          errors.push("Email is invalid.");
        }
      }

      if (!message) {
        errors.push("Message is required.");
      }

      const errorDiv = document.getElementById('formErrors');
      errorDiv.innerHTML = '';
      if (errors.length > 0) {
        errors.forEach(err => {
          const p = document.createElement('p');
          p.textContent = err;
          errorDiv.appendChild(p);
        });
      } else {
        alert("Thank you for your message! I’ll get back to you soon.");
        contactForm.reset();
      }
    });
  }
});
