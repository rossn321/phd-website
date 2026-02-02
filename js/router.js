// Smooth Page Transitions
(function() {
    // Only run on internal navigation
    const isInternalLink = function(link) {
        return link.hostname === window.location.hostname &&
               link.pathname.endsWith('.html') &&
               !link.hasAttribute('target');
    };

    // Handle link clicks
    document.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        if (!link || !isInternalLink(link)) return;

        e.preventDefault();
        navigateTo(link.href);
    });

    // Handle browser back/forward
    window.addEventListener('popstate', function() {
        loadPage(window.location.href, false);
    });

    function navigateTo(url) {
        // Update URL
        history.pushState(null, '', url);
        loadPage(url, true);
    }

    function loadPage(url, scroll) {
        const main = document.querySelector('.main-content');
        if (!main) {
            window.location.href = url;
            return;
        }

        // Fade out
        main.classList.add('fade-out');

        setTimeout(function() {
            fetch(url)
                .then(function(response) {
                    if (!response.ok) throw new Error('Page not found');
                    return response.text();
                })
                .then(function(html) {
                    // Parse the new page
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(html, 'text/html');

                    // Update main content
                    const newMain = doc.querySelector('.main-content');
                    if (newMain) {
                        main.innerHTML = newMain.innerHTML;
                    }

                    // Update page title
                    document.title = doc.title;

                    // Update active nav link
                    updateActiveNav(url);

                    // Scroll to top
                    if (scroll) {
                        window.scrollTo(0, 0);
                    }

                    // Fade in
                    main.classList.remove('fade-out');

                    // Re-initialize scripts for new content
                    reinitialize();
                })
                .catch(function() {
                    // Fallback to normal navigation
                    window.location.href = url;
                });
        }, 200); // Match CSS transition duration
    }

    function updateActiveNav(url) {
        const currentPage = url.split('/').pop() || 'index.html';
        document.querySelectorAll('.nav a').forEach(function(link) {
            const linkPage = link.getAttribute('href');
            if (linkPage === currentPage ||
                (currentPage === 'index.html' && linkPage === 'index.html')) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    function reinitialize() {
        // Re-run animations for new content
        const animatedElements = document.querySelectorAll('.animate-on-scroll:not(.visible)');
        if (animatedElements.length > 0) {
            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        const delay = entry.target.dataset.delay || 0;
                        setTimeout(function() {
                            entry.target.classList.add('visible');
                        }, delay * 1000);
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            animatedElements.forEach(function(el) {
                observer.observe(el);
            });
        }

        // Re-initialize search if on publications page
        const searchInput = document.querySelector('.search-input');
        if (searchInput) {
            // Trigger the search.js initialization
            searchInput.dispatchEvent(new Event('input'));
        }

        // Re-initialize publication card toggles
        document.querySelectorAll('.publication-card').forEach(function(card) {
            const toggleBtn = card.querySelector('.toggle-abstract');
            const abstractContainer = card.querySelector('.abstract-container');

            if (toggleBtn && abstractContainer && !toggleBtn.hasAttribute('data-initialized')) {
                toggleBtn.setAttribute('data-initialized', 'true');
                toggleBtn.addEventListener('click', function() {
                    const isExpanded = abstractContainer.classList.toggle('expanded');
                    toggleBtn.textContent = isExpanded ? 'Show Less' : 'Show Abstract';
                });
            }
        });

        // Re-initialize copy citation buttons
        document.querySelectorAll('.copy-citation:not([data-initialized])').forEach(function(btn) {
            btn.setAttribute('data-initialized', 'true');
            btn.addEventListener('click', function() {
                const citation = this.dataset.citation;
                if (!citation) return;

                navigator.clipboard.writeText(citation).then(function() {
                    const originalText = btn.textContent;
                    btn.textContent = 'Copied!';
                    setTimeout(function() {
                        btn.textContent = originalText;
                    }, 2000);
                });
            });
        });
    }
})();
