// main.js
document.addEventListener('DOMContentLoaded', function() {
    // Auto-update copyright year
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    const body = document.body;
    const toggle = document.getElementById('menuToggle');
    const backdrop = document.getElementById('menuBackdrop');

    toggle.addEventListener('click', () => {
      body.classList.toggle('menu-open');
    });

    backdrop.addEventListener('click', () => {
      body.classList.remove('menu-open');
    });

    window.addEventListener('scroll', () => {
      const navbar = document.querySelector('.navbar');
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
    
    // Hero slider
    const heroSlides = document.querySelectorAll('.hero-slide');
    let currentHeroSlide = 0;
    
    function nextHeroSlide() {
        heroSlides[currentHeroSlide].classList.remove('active');
        currentHeroSlide = (currentHeroSlide + 1) % heroSlides.length;
        heroSlides[currentHeroSlide].classList.add('active');
    }
    
    // Change hero slide every 5 seconds
    const heroSliderInterval = setInterval(nextHeroSlide, 5000);
    
    // Testimonial slider
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const testimonialDotsContainer = document.querySelector('.testimonial-dots');
    let currentTestimonial = 0;
    
    // Create dots for testimonials
    testimonialCards.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('testimonial-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            showTestimonial(index);
        });
        testimonialDotsContainer.appendChild(dot);
    });
    
    const testimonialDots = document.querySelectorAll('.testimonial-dot');
    const testimonialPrev = document.querySelector('.testimonial-prev');
    const testimonialNext = document.querySelector('.testimonial-next');
    
    function showTestimonial(index) {
        testimonialCards[currentTestimonial].classList.remove('active');
        testimonialDots[currentTestimonial].classList.remove('active');
        
        currentTestimonial = (index + testimonialCards.length) % testimonialCards.length;
        
        testimonialCards[currentTestimonial].classList.add('active');
        testimonialDots[currentTestimonial].classList.add('active');
    }
    
    testimonialPrev.addEventListener('click', () => {
        showTestimonial(currentTestimonial - 1);
    });
    
    testimonialNext.addEventListener('click', () => {
        showTestimonial(currentTestimonial + 1);
    });
    
    // Auto-rotate testimonials every 5 seconds
    const testimonialInterval = setInterval(() => {
        showTestimonial(currentTestimonial + 1);
    }, 5000);
    
    // Pause testimonials on hover
    const testimonialSlider = document.querySelector('.testimonials-slider');
    testimonialSlider.addEventListener('mouseenter', () => {
        clearInterval(testimonialInterval);
    });
    
    testimonialSlider.addEventListener('mouseleave', () => {
        testimonialInterval = setInterval(() => {
            showTestimonial(currentTestimonial + 1);
        }, 5000);
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Scroll down button
    const scrollDownBtn = document.querySelector('.scroll-down');
    if (scrollDownBtn) {
        scrollDownBtn.addEventListener('click', () => {
            window.scrollTo({
                top: document.querySelector('.services').offsetTop - 80,
                behavior: 'smooth'
            });
        });
    }
});