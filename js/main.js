document.addEventListener('DOMContentLoaded', function () {
    // Update copyright year
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    const body = document.body;
    const toggle = document.getElementById('menuToggle');
    const backdrop = document.getElementById('menuBackdrop');
    const sideNav = document.querySelector('.side-nav');

    // Toggle Side Menu
    if (toggle && backdrop) {
        toggle.addEventListener('click', () => {
            body.classList.toggle('menu-open');
        });

        backdrop.addEventListener('click', () => {
            body.classList.remove('menu-open');
        });
    }

    // Sticky navbar on scroll
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
        });
    }

    // ===== Hero Slider =====
    const heroSlides = document.querySelectorAll('.hero-slide');
    let currentHeroSlide = 0;

    function nextHeroSlide() {
        if (heroSlides.length > 0) {
            heroSlides[currentHeroSlide].classList.remove('active');
            currentHeroSlide = (currentHeroSlide + 1) % heroSlides.length;
            heroSlides[currentHeroSlide].classList.add('active');
        }
    }

    setInterval(nextHeroSlide, 5000);

    // ===== Testimonial Slider =====
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const testimonialDotsContainer = document.querySelector('.testimonial-dots');
    let currentTestimonial = 0;

    if (testimonialCards.length > 0 && testimonialDotsContainer) {
        testimonialCards.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('testimonial-dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => showTestimonial(index));
            testimonialDotsContainer.appendChild(dot);
        });
    }

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

    if (testimonialPrev && testimonialNext) {
        testimonialPrev.addEventListener('click', () => {
            showTestimonial(currentTestimonial - 1);
        });

        testimonialNext.addEventListener('click', () => {
            showTestimonial(currentTestimonial + 1);
        });
    }

    let testimonialInterval = setInterval(() => {
        showTestimonial(currentTestimonial + 1);
    }, 5000);

    const testimonialSlider = document.querySelector('.testimonials-slider');
    if (testimonialSlider) {
        testimonialSlider.addEventListener('mouseenter', () => {
            clearInterval(testimonialInterval);
        });

        testimonialSlider.addEventListener('mouseleave', () => {
            testimonialInterval = setInterval(() => {
                showTestimonial(currentTestimonial + 1);
            }, 5000);
        });
    }

    // ===== Smooth Scroll for Anchor Links =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll Down Button
    const scrollDownBtn = document.querySelector('.scroll-down');
    const serviceSection = document.querySelector('.services');
    if (scrollDownBtn && serviceSection) {
        scrollDownBtn.addEventListener('click', () => {
            window.scrollTo({
                top: serviceSection.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    }
});
