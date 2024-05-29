document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    let currentIndex = 0;
    const totalSlides = slides.length;
    const slideWidth = slides[0].clientWidth;

    function goToSlide(index) {
        if (index < 0) {
            index = totalSlides - 1;
        } else if (index >= totalSlides) {
            index = 0;
        }
        currentIndex = index;
        const offset = -currentIndex * slideWidth;
        slider.style.transform = `translateX(${offset}px)`;
    }

    function nextSlide() {
        goToSlide(currentIndex + 1);
        updatePagination()
    }

    function prevSlide() {
        goToSlide(currentIndex - 1);
        updatePagination()
    }

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    let autoSlideInterval;

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 5000); 
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    slider.addEventListener('mouseenter', stopAutoSlide);
    slider.addEventListener('mouseleave', startAutoSlide);

    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') {
            prevSlide();
        } else if (event.key === 'ArrowRight') {
            nextSlide();
        }
    });

    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.addEventListener('click', () => {
            slideIndex = index;
goToSlide(slideIndex);
updatePagination();
        });
    });
    function updatePagination() {
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            if (index === slideIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    startAutoSlide();
});

