document.addEventListener('DOMContentLoaded', () => {

    // On-scroll animation for elements with the .fade-in-item class
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once it's visible
            }
        });
    }, {
        threshold: 0.2 // Trigger when 20% of the element is visible
    });

    document.querySelectorAll('.fade-in-item').forEach(element => {
        observer.observe(element);
    });

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Animate the hero section on page load
    const heroContent = document.querySelector('.hero-section');
    if(heroContent) {
        heroContent.style.animation = 'fadeIn 1s forwards cubic-bezier(0.6, 0.2, 0.1, 1)';
        heroContent.querySelector('h1').style.animationDelay = '0.2s';
        heroContent.querySelector('p').style.animationDelay = '0.4s';
        heroContent.querySelector('.cta-button').style.animationDelay = '0.6s';
    }
});