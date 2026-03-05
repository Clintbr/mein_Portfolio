const toggleBtn = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');

    // Icon wechseln (Burger ↔ X)
    const icon = toggleBtn.querySelector('i');
    if (navLinks.classList.contains('show')) {
        icon.classList.replace('fa-bars', 'fa-times');
    } else {
        icon.classList.replace('fa-times', 'fa-bars');
    }
});

const filterBtns = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.projects article');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // aktive Klasse aktualisieren
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        projects.forEach(project => {
            const category = project.getAttribute('data-category');

            if (filter === "all" || category.includes(filter)) {
                project.style.display = "block";
            } else {
                project.style.display = "none";
            }
        });
    });
});