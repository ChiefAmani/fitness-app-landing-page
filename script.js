document.addEventListener('DOMContentLoaded', () => {
    const animateOnScrollElements = document.querySelectorAll('.scroll-animate');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add 'visible' class to trigger animations for the section
                entry.target.querySelectorAll('[class*="animate-"]').forEach(el => {
                    el.classList.add('visible');
                });
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animateOnScrollElements.forEach(el => {
        observer.observe(el);
    });

    // Initial animations for elements in the hero section (not scroll-animated)
    document.querySelectorAll('.hero [class*="animate-"]').forEach(el => {
        el.classList.add('visible');
    });
});