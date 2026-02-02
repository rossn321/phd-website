// Theme Toggle - Dark/Light Mode
(function() {
    const themeToggle = document.querySelector('.theme-toggle');
    if (!themeToggle) return;

    // Check for saved theme or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.documentElement.classList.add('dark-mode');
        themeToggle.textContent = '\u2600\uFE0F'; // Sun emoji
    } else {
        themeToggle.textContent = '\uD83C\uDF19'; // Moon emoji
    }

    // Toggle theme on click
    themeToggle.addEventListener('click', function() {
        const isDark = document.documentElement.classList.toggle('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        themeToggle.textContent = isDark ? '\u2600\uFE0F' : '\uD83C\uDF19';
    });
})();
