// Scroll-triggered Animations using IntersectionObserver
(function() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    if (animatedElements.length === 0) return;

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                // Add delay if specified
                const delay = entry.target.dataset.delay || 0;
                setTimeout(function() {
                    entry.target.classList.add('visible');
                }, delay * 1000);

                // Stop observing once animated
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(function(el) {
        observer.observe(el);
    });
})();
