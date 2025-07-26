document.addEventListener('DOMContentLoaded', () => {

    // --- Dark Mode Toggle ---
    const themeToggler = document.getElementById('theme-toggler');
    const body = document.body;

    // Apply the cached theme on load
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        body.classList.add(currentTheme);
        if (currentTheme === 'dark-mode') {
            themeToggler.textContent = '☀️'; // Sun icon
        }
    }

    themeToggler.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        let theme = 'light-mode';
        if (body.classList.contains('dark-mode')) {
            theme = 'dark-mode';
            themeToggler.textContent = '☀️';
        } else {
            themeToggler.textContent = '🌙'; // Moon icon
        }
        // Cache the user's preference
        localStorage.setItem('theme', theme);
    });


    // --- Scroll-to-Top Button ---
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    window.onscroll = () => {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    };

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

});
