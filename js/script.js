const productsContainer = document.querySelector('.products');
const productsContainer2 = document.querySelector('.products2');
const productsContainer3 = document.querySelector('.products3');
const scrollButtons = document.querySelectorAll('.scroll-btn');
const scrollButtons2 = document.querySelectorAll('.scroll-btn2');
const scrollButtons3 = document.querySelectorAll('.scroll-btn3');
const termsButton = document.querySelector('#terms-btn');
const termsText = document.querySelector('#terms-text');

scrollButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const scrollAmount = productsContainer.offsetWidth; // Scroll by one full view width
        if (button.classList.contains('left')) {
            productsContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else {
            productsContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    });
});

scrollButtons2.forEach((button) => {
    button.addEventListener('click', () => {
        const scrollAmount = productsContainer2.offsetWidth; // Scroll by one full view width
        if (button.classList.contains('left')) {
            productsContainer2.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else {
            productsContainer2.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    });
});

scrollButtons3.forEach((button) => {
    button.addEventListener('click', () => {
        const scrollAmount = productsContainer3.offsetWidth; // Scroll by one full view width
        if (button.classList.contains('left')) {
            productsContainer3.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else {
            productsContainer3.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    });
});

let termShown = false;

termsButton.addEventListener('click', () => {
    termShown = !termShown;
    if (termShown) {
        termsButton.textContent = 'Hide';
        termsText.classList.add('show');
    } else {
        termsButton.textContent = 'Terms';
        termsText.classList.remove('show');
    }
});

const scrollToTopButton = document.querySelector('#scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) { // Show after scrolling 200px
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// Smooth scroll to the top when the button is clicked
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
