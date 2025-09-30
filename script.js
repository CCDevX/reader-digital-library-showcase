// Navigation
const menuIcon = document.querySelector('.menu-icon');
const container = document.querySelector('.container');
const contactLink = document.querySelector('.navigation a:last-child');

menuIcon.addEventListener('click', () => {
    container.classList.toggle('navigate');
});

contactLink.addEventListener('click', () => {
    container.classList.remove('navigate');
});
// End of Navigation

// Loader
const loader = document.querySelector('.loader-wrapper');

window.addEventListener('load', () => {
    const body = document.querySelector('body');
    setTimeout(() => {
        loader.classList.add('hide');
    }, 6000);

    setTimeout(() => {
        container.classList.add('show');
        if (body) body.style.overflow = 'auto';
    }, 5500);
});
// End of Loader

// Testimonials Slider - Version simplifiée sans dots
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const leftArrow = document.querySelector('.controls i:nth-child(1)');
const rightArrow = document.querySelector('.controls i:nth-child(2)');

let slideIndex = 0;

const setSlide = () => {
    slider.style.transform = `translateX(${slideIndex * -20}%)`;
};

// Navigation par flèches
if (leftArrow) {
    leftArrow.addEventListener('click', () => {
        slideIndex = slideIndex > 0 ? slideIndex - 1 : 0;
        setSlide();
    });
}

if (rightArrow) {
    rightArrow.addEventListener('click', () => {
        slideIndex = slideIndex < slides.length - 1 ? slideIndex + 1 : slides.length - 1;
        setSlide();
    });
}

// Navigation par clavier (gauche/droite)
document.addEventListener('keydown', (e) => {
    if (slider) {
        if (e.key === 'ArrowLeft' && slideIndex > 0) {
            slideIndex--;
            setSlide();
        } else if (e.key === 'ArrowRight' && slideIndex < slides.length - 1) {
            slideIndex++;
            setSlide();
        }
    }
});

// Navigation tactile (swipe) pour mobile
let touchStartX = 0;
let touchEndX = 0;

if (slider) {
    slider.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    slider.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
}

function handleSwipe() {
    const swipeThreshold = 50;
    if (touchStartX - touchEndX > swipeThreshold && slideIndex < slides.length - 1) {
        // Swipe gauche - slide suivante
        slideIndex++;
        setSlide();
    } else if (touchEndX - touchStartX > swipeThreshold && slideIndex > 0) {
        // Swipe droite - slide précédente
        slideIndex--;
        setSlide();
    }
}
// End of Testimonials
