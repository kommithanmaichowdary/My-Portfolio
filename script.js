// Get the button
const backToTopBtn = document.getElementById('backToTopBtn');

// Show or hide the button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) { // Show after scrolling down 200px
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

// Scroll smoothly to the top when the button is clicked
backToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
