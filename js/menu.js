// Mobile Menu Toggle
(function() {
    const menuButton = document.querySelector('.menu-button');
    const nav = document.querySelector('.nav');
    if (!menuButton || !nav) return;

    // Toggle menu on button click
    menuButton.addEventListener('click', function() {
        const isOpen = nav.classList.toggle('open');
        menuButton.textContent = isOpen ? '\u2715' : '\u2630'; // X or hamburger
        menuButton.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when clicking a link
    nav.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function() {
            nav.classList.remove('open');
            menuButton.textContent = '\u2630';
            menuButton.setAttribute('aria-expanded', 'false');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!nav.contains(e.target) && !menuButton.contains(e.target)) {
            nav.classList.remove('open');
            menuButton.textContent = '\u2630';
            menuButton.setAttribute('aria-expanded', 'false');
        }
    });
})();

// Header scroll effect
(function() {
    const header = document.querySelector('.header');
    if (!header) return;

    window.addEventListener('scroll', function() {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
})();
