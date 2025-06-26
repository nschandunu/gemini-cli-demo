document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.pagination-dots .dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;
    let autoSlideInterval;

    // Function to show a specific slide
    const showSlide = (index) => {
        // Deactivate current slide and dot
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');

        // Update current slide index
        currentSlide = (index + slides.length) % slides.length;

        // Activate new slide and dot
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    };

    // Function to go to the next slide
    const nextSlide = () => {
        showSlide(currentSlide + 1);
    };

    // Function to go to the previous slide
    const prevSlide = () => {
        showSlide(currentSlide - 1);
    };

    // Start auto-sliding
    const startAutoSlide = () => {
        autoSlideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    };

    // Stop auto-sliding
    const stopAutoSlide = () => {
        clearInterval(autoSlideInterval);
    };

    // Event listeners for navigation buttons
    nextBtn.addEventListener('click', () => {
        stopAutoSlide();
        nextSlide();
        startAutoSlide(); // Restart auto-slide after manual navigation
    });

    prevBtn.addEventListener('click', () => {
        stopAutoSlide();
        prevSlide();
        startAutoSlide(); // Restart auto-slide after manual navigation
    });

    // Event listeners for pagination dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            stopAutoSlide();
            showSlide(index);
            startAutoSlide(); // Restart auto-slide after manual navigation
        });
    });

    // Initial slide display and auto-slide start
    showSlide(currentSlide);
    startAutoSlide();

    // Pause auto-slide on hover
    const carouselContainer = document.querySelector('.carousel-container');
    carouselContainer.addEventListener('mouseenter', stopAutoSlide);
    carouselContainer.addEventListener('mouseleave', startAutoSlide);
});