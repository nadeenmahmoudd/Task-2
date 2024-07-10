let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const fullscreen = document.getElementById('fullscreen');
const fullscreenImage = document.getElementById('fullscreenImage');

function showSlide(index) {
    if (index >= slides.length) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = slides.length - 1;
    } else {
        currentSlideIndex = index;
    }

    slides.forEach((slide) => {
        slide.style.display = 'none';
    });

    slides[currentSlideIndex].style.display = 'block';

    dots.forEach((dot, i) => {
        dot.classList.remove('active');
        if (i === currentSlideIndex) {
            dot.classList.add('active');
        }
    });
}

function nextSlide() {
    showSlide(currentSlideIndex + 1);
}

function prevSlide() {
    showSlide(currentSlideIndex - 1);
}

function currentSlide(index) {
    showSlide(index);
}

function openFullscreen(img) {
    fullscreenImage.src = img.src;
    fullscreen.style.display = 'flex';
}

function closeFullscreen() {
    fullscreen.style.display = 'none';
}

fullscreen.addEventListener('click', function(event) {
    if (event.target === fullscreen || event.target.classList.contains('close')) {
        closeFullscreen();
    }
});

showSlide(currentSlideIndex);
