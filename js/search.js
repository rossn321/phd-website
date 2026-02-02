// Publications Search Filter
(function() {
    const searchInput = document.querySelector('.search-input');
    const publicationCards = document.querySelectorAll('.publication-card');
    const noResults = document.querySelector('.no-results');

    if (!searchInput || publicationCards.length === 0) return;

    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();
        let visibleCount = 0;

        publicationCards.forEach(function(card) {
            const title = card.dataset.title || '';
            const authors = card.dataset.authors || '';
            const abstract = card.dataset.abstract || '';

            const matches = title.includes(searchTerm) ||
                          authors.includes(searchTerm) ||
                          abstract.includes(searchTerm);

            card.style.display = matches ? '' : 'none';
            if (matches) visibleCount++;
        });

        // Show/hide no results message
        if (noResults) {
            noResults.style.display = visibleCount === 0 ? '' : 'none';
        }
    });
})();

// Publication Card - Expand Abstract
(function() {
    document.querySelectorAll('.publication-card').forEach(function(card) {
        const toggleBtn = card.querySelector('.toggle-abstract');
        const abstractContainer = card.querySelector('.abstract-container');

        if (!toggleBtn || !abstractContainer) return;

        toggleBtn.addEventListener('click', function() {
            const isExpanded = abstractContainer.classList.toggle('expanded');
            toggleBtn.textContent = isExpanded ? 'Show Less' : 'Show Abstract';
        });
    });
})();

// Copy Citation
(function() {
    document.querySelectorAll('.copy-citation').forEach(function(btn) {
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
})();
