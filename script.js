const toggleBtn = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', () => {
        navLinks.classList.toggle('show');

        // Icon wechseln (Burger ↔ X)
        const icon = toggleBtn.querySelector('i');
        if (icon) {
            if (navLinks.classList.contains('show')) {
                icon.classList.replace('fa-bars', 'fa-times');
            } else {
                icon.classList.replace('fa-times', 'fa-bars');
            }
        }
    });
}

// Ensure filter logic plays nicely with dynamic data rendering
const filterBtns = document.querySelectorAll('.filter-btn');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // aktive Klasse aktualisieren
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Trigger the re-render from data/projects.js if it exists
        if (typeof renderProjects === 'function') {
            renderProjects();
        } else {
            // Fallback for static items (if any are left)
            const filter = btn.getAttribute('data-filter');
            const projects = document.querySelectorAll('.projects article');
            projects.forEach(project => {
                const category = project.getAttribute('data-category');
                if (filter === "all" || category.includes(filter)) {
                    project.style.display = "block";
                } else {
                    project.style.display = "none";
                }
            });
        }
    });
});

// Theme Toggle Logic
const themeBtn = document.getElementById('theme-toggle');
if (themeBtn) {
    const themeIcon = themeBtn.querySelector('i');
    
    // Ensure icon matches current theme from HTML root
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    if (currentTheme === 'light') {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
    }

    themeBtn.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme') || 'dark';
        let newTheme = theme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('portfolio_theme', newTheme);
        
        if (newTheme === 'light') {
            themeIcon.classList.replace('fa-sun', 'fa-moon');
        } else {
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        }
    });

    // Listen for theme changes from other tabs
    window.addEventListener('storage', (e) => {
        if (e.key === 'portfolio_theme') {
            const newTheme = e.newValue || 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            
            if (newTheme === 'light') {
                themeIcon.classList.replace('fa-sun', 'fa-moon');
            } else {
                themeIcon.classList.replace('fa-moon', 'fa-sun');
            }
        }
    });
}

// Language Bars Animation
document.addEventListener('DOMContentLoaded', () => {
    const levelFills = document.querySelectorAll('.level-fill');
    levelFills.forEach(fill => {
        const targetWidth = fill.style.width;
        fill.style.width = '0';
        setTimeout(() => {
            fill.style.width = targetWidth;
        }, 500);
    });
});