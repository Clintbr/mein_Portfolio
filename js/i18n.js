/**
 * Simple i18n engine using Vanilla JS.
 * Manages language switching between DE, EN, and FR.
 */
const thisYear = new Date().getFullYear();

const translations = {
    de: {
        "nav.home": "Start",
        "nav.about": "Über mich",
        "nav.projects": "Projekte",
        "nav.contact": "Kontakt",
        "hero.greeting": "Hallo, ich bin ",
        "hero.name": "Clint Bryan Nguena",
        "hero.role": "Informatikstudent (5. Semester) – spezialisiert auf Softwareentwicklung",
        "hero.school": "Eingeschrieben an der THM (Technische Hochschule Mittelhessen)",
        "hero.tagline": "Ich entwickle moderne Softwarelösungen, die Menschen helfen, ihre Ziele effizienter zu erreichen.",
        "hero.cta": "Zum Profil ⬇",

        "section.featured.title": "🌟 Featured Work",
        "section.featured.subtitle": "Ein leistungsfähiges Full-Stack-Ticket-Management-System.",
        "section.featured.desc": "Mein Ansatz als Informatikstudent ist es, komplexe Probleme in handhabbare Teilschritte zu zerlegen. Diese strukturierte und lösungsorientierte Denkweise ist für mich der Schlüssel zu erfolgreicher Softwareentwicklung. Hier sehen Sie, wie ich diese Philosophie bei der Entwicklung des Enterprise Ticket Management Systems angewendet habe – einem Projekt, das meine technischen Fähigkeiten im Fullstack-Bereich eindrucksvoll unter Beweis stellt.",
        "section.featured.cta": "Alle Projekte ansehen",

        "section.skills.title": "Fachliche Fähigkeiten",
        "section.core.title": "Kern-Kompetenzen",
        "section.core.1": "Kreatives Problemlösen",
        "section.core.2": "Organisationstalent",
        "section.core.3": "Didaktische Fähigkeit",
        "section.hobbies.title": "Interessen",
        "section.hobbies.1": "Fußball spielen",
        "section.hobbies.2": "Bücher lesen",
        "section.hobbies.3": "Webseiten entwickeln",
        "section.langs.title": "Sprachen",
        "section.langs.cta": "Meine beherrschten Sprachen",
        "lang.fr": "Französisch",
        "lang.de": "Deutsch",
        "lang.en": "Englisch",
        "lang.level.native": "Muttersprache",
        "lang.level.advanced": "Fortgeschrittene Kenntnisse",
        "lang.level.intermediate": "Mittlere Kenntnisse",

        "cta.title": "Wollen Sie mehr über meine Projekte erfahren?",
        "cta.btn": "Kontaktieren Sie mich",
        "footer.rights": "©" + thisYear + " Clint B. Nguena | Alle Rechte vorbehalten",

        "projects.title": "Meine Arbeiten",
        "projects.desc": "Eine Auswahl meiner wichtigsten Projekte aus Studium und Praxis – mit Fokus auf Softwareentwicklung, Web und Embedded Systems.",
        "projects.btn": "Zu Projekten ⬇",
        "projects.filter.all": "Alle",
        "projects.code": "Zum Code",
        "projects.preview": "Zur Vorschau",
        "projects.website": "Zur Webseite",

        "avatar.home": "Hallo! Willkommen auf meinem Portfolio! Lass uns das alles durchgehen 😊",
        "avatar.projects": "Diese Projekte zeigen meinen Werdegang in der Softwareentwicklung 🚀",
        "avatar.about": "„Softwareentwicklung ist nicht nur mein Studium – es ist meine Leidenschaft.“",
        "avatar.contact": "Kontaktieren Sie mich gerne für einen Gesprächstermin 😊",

        "about.title": "Meine Leidenschaft",
        "about.p1": "Ich habe eine große Begeisterung für <b>Softwareentwicklung</b> und liebe es, kreative Lösungen zu entwickeln.",
        "about.p2": "Mein Fokus liegt darauf, Anwendungen zu programmieren, die das Leben einfacher und effizienter machen – sei es in <i>Webprojekten</i>, <i>Backend-Systemen</i> oder <i>eingebetteten Anwendungen</i>.",
        "about.btn": "Mehr wissen ⬇",
        "exp.title": "Professionelle Erfahrung",
        "exp.1.date": "Juni 2025 - August 2025",
        "exp.1.role": "Kurzfristige Beschäftigung Softwareentwicklung",
        "exp.1.desc": "Konzeption und Erstellung der Webseite einer Klinik (Java, html, css und JS, MySQL). Ein Vertrag mit der Klinik SisterSchola in Darmstadt.",
        "exp.2.date": "November 2024 - Dezember 2024",
        "exp.2.role": "Projektarbeit an der THM",
        "exp.2.desc": "Entwicklung eines eingebetteten Systems (Ampelsteuerung mit ESP32).",
        "edu.title": "Bildung",
        "edu.1.date": "2023 – heute",
        "edu.1.title": "Technische Hochschule Mittelhessen (THM)",
        "edu.1.desc": "Informatik (B.Sc.), 4. Semester",
        "edu.2.date": "2022 – 2023",
        "edu.2.title": "Sprachzentrum",
        "edu.2.desc": "B1/B2 (Goethe-Institut), C1 (Diwan Marburg)",
        "edu.3.date": "2019 – 2022",
        "edu.3.title": "Gymnasium",
        "edu.3.desc": "Abitur mit Schwerpunkt Mathematik & Informatik",
        "cert.title": "Zertifikate",

        "contact.title.reach": "So erreichen Sie mich",
        "contact.github": "Mein GitHub",
        "contact.gitlab": "Mein GitLab",
        "contact.linkedin": "Mein LinkedIn",
        "contact.title.form": "Kontaktformular",
        "contact.form.name": "Name",
        "contact.form.email": "E-Mail",
        "contact.form.message": "Nachricht",
        "contact.form.submit": "Senden",
        "contact.title.map": "Standort",

        "stats.projects": "Abgeschlossene Projekte",
        "stats.langs": "Programmiersprachen im Einsatz",
        "stats.exp": "Jahr theoretische und praktische Erfahrung"
    },
    en: {
        "nav.home": "Home",
        "nav.about": "About Me",
        "nav.projects": "Projects",
        "nav.contact": "Contact",
        "hero.greeting": "Hello, I am ",
        "hero.name": "Clint Bryan Nguena",
        "hero.role": "Computer Science Student (5th Semester) – specializing in Software Development",
        "hero.school": "Enrolled at THM (University of Applied Sciences)",
        "hero.tagline": "I develop modern software solutions that help people achieve their goals more efficiently.",
        "hero.cta": "To Profile ⬇",

        "section.featured.title": "🌟 Featured Work",
        "section.featured.subtitle": "A high-performance full-stack ticket management system.",
        "section.featured.desc": "My approach as a computer science student is to break complex problems down into manageable components. This structured and solution-oriented mindset is key to successful software development. Here you can see how I applied this philosophy developing the Enterprise Ticket Management System – a project that impressively showcases my full-stack technical skills.",
        "section.featured.cta": "View All Projects",

        "section.skills.title": "Technical Skills",
        "section.core.title": "Core Competencies",
        "section.core.1": "Creative Problem Solving",
        "section.core.2": "Organizational Skills",
        "section.core.3": "Didactic Skills",
        "section.hobbies.title": "Interests",
        "section.hobbies.1": "Playing Football",
        "section.hobbies.2": "Reading Books",
        "section.hobbies.3": "Web Development",
        "section.langs.title": "Languages",
        "section.langs.cta": "Languages I master",
        "lang.fr": "French",
        "lang.de": "German",
        "lang.en": "English",
        "lang.level.native": "Native Language",
        "lang.level.advanced": "Advanced Proficiency",
        "lang.level.intermediate": "Intermediate Proficiency",

        "cta.title": "Do you want to know more about my projects?",
        "cta.btn": "Contact me",
        "footer.rights": "©" + thisYear + " Clint B. Nguena | All rights reserved",

        "projects.title": "My Work",
        "projects.desc": "A selection of my most important projects from my studies and practical experience – focusing on software development, web, and embedded systems.",
        "projects.btn": "To Projects ⬇",
        "projects.filter.all": "All",
        "projects.code": "Source Code",
        "projects.preview": "Live Preview",
        "projects.website": "To Website",

        "avatar.home": "Hello! Welcome to my portfolio! Let's walk through it together 😊",
        "avatar.projects": "These projects showcase my journey in software development 🚀",
        "avatar.about": "\"Software development is not just my major—it's my passion.\"",
        "avatar.contact": "Feel free to contact me to set up a meeting 😊",

        "about.title": "My Passion",
        "about.p1": "I have great enthusiasm for <b>software development</b> and love creating creative solutions.",
        "about.p2": "My focus is on programming applications that make life easier and more efficient - whether in <i>web projects</i>, <i>backend systems</i>, or <i>embedded applications</i>.",
        "about.btn": "Know more ⬇",
        "exp.title": "Professional Experience",
        "exp.1.date": "June 2025 - August 2025",
        "exp.1.role": "Short-term employment: Software Development",
        "exp.1.desc": "Conception and creation of a clinic's website (Java, HTML, CSS, JS, MySQL). A contract with SisterSchola Clinic in Darmstadt.",
        "exp.2.date": "November 2024 - December 2024",
        "exp.2.role": "Project work at THM",
        "exp.2.desc": "Development of an embedded system (Traffic light control with ESP32).",
        "edu.title": "Education",
        "edu.1.date": "2023 – present",
        "edu.1.title": "Technische Hochschule Mittelhessen (THM)",
        "edu.1.desc": "Computer Science (B.Sc.), 4th Semester",
        "edu.2.date": "2022 – 2023",
        "edu.2.title": "Language Center",
        "edu.2.desc": "B1/B2 (Goethe-Institut), C1 (Diwan Marburg)",
        "edu.3.date": "2019 – 2022",
        "edu.3.title": "High School",
        "edu.3.desc": "A-Levels specializing in Mathematics & Computer Science",
        "cert.title": "Certificates",

        "contact.title.reach": "How to reach me",
        "contact.github": "My GitHub",
        "contact.gitlab": "My GitLab",
        "contact.linkedin": "My LinkedIn",
        "contact.title.form": "Contact Form",
        "contact.form.name": "Name",
        "contact.form.email": "Email",
        "contact.form.message": "Message",
        "contact.form.submit": "Send",
        "contact.title.map": "Location",

        "stats.projects": "Completed Projects",
        "stats.langs": "Programming Languages Used",
        "stats.exp": "Year of Theoretical & Practical Exp."
    },
    fr: {
        "nav.home": "Accueil",
        "nav.about": "À propos",
        "nav.projects": "Projets",
        "nav.contact": "Contact",
        "hero.greeting": "Bonjour, je suis ",
        "hero.name": "Clint Bryan Nguena",
        "hero.role": "Étudiant en Informatique (5ème semestre) – spécialisé en développement logiciel",
        "hero.school": "Inscrit à la THM (Université des Sciences Appliquées)",
        "hero.tagline": "Je développe des solutions logicielles modernes qui aident les gens à atteindre leurs objectifs plus efficacement.",
        "hero.cta": "Voir Profil ⬇",

        "section.featured.title": "🌟 Projet en vedette",
        "section.featured.subtitle": "Un système complet de gestion de tickets à haute performance.",
        "section.featured.desc": "Mon approche en tant qu'étudiant en informatique consiste à décomposer les problèmes complexes en étapes gérables. Cet état d'esprit structuré et axé sur les solutions est la clé d'un développement logiciel réussi. Vous pouvez voir ici comment j'ai appliqué cette philosophie en développant le Système de Gestion de Tickets Enterprise – un projet qui démontre de manière impressionnante mes compétences techniques full-stack.",
        "section.featured.cta": "Voir tous les projets",

        "section.skills.title": "Compétences Techniques",
        "section.core.title": "Compétences Clés",
        "section.core.1": "Résolution créative de problèmes",
        "section.core.2": "Sens de l'organisation",
        "section.core.3": "Compétences didactiques",
        "section.hobbies.title": "Centres d'intérêt",
        "section.hobbies.1": "Jouer au football",
        "section.hobbies.2": "Lire des livres",
        "section.hobbies.3": "Développement Web",
        "section.langs.title": "Langues",
        "section.langs.cta": "Les langues que je maîtrise",
        "lang.fr": "Français",
        "lang.de": "Allemand",
        "lang.en": "Anglais",
        "lang.level.native": "Langue Maternelle",
        "lang.level.advanced": "Niveau Avancé",
        "lang.level.intermediate": "Niveau Intermédiaire",

        "cta.title": "Voulez-vous en savoir plus sur mes projets ?",
        "cta.btn": "Contactez-moi",
        "footer.rights": "©" + thisYear + " Clint B. Nguena | Tous droits réservés",

        "projects.title": "Mes Travaux",
        "projects.desc": "Une sélection de mes projets les plus importants issus de mes études et de ma pratique – axés sur le développement logiciel, le web et les systèmes embarqués.",
        "projects.btn": "Vers les projets ⬇",
        "projects.filter.all": "Tous",
        "projects.code": "Voir le Code",
        "projects.preview": "Aperçu en direct",
        "projects.website": "Visiter le site",

        "avatar.home": "Bonjour ! Bienvenue sur mon portfolio ! Parcourons-le ensemble 😊",
        "avatar.projects": "Ces projets illustrent mon parcours dans le développement de logiciels 🚀",
        "avatar.about": "\"Le développement de logiciels n'est pas seulement mes études, c'est ma passion.\"",
        "avatar.contact": "N'hésitez pas à me contacter pour un rendez-vous 😊",

        "about.title": "Ma Passion",
        "about.p1": "Je suis passionné par le <b>développement de logiciels</b> et j'adore créer des solutions créatives.",
        "about.p2": "Mon objectif est de programmer des applications qui rendent la vie plus facile et plus efficace - que ce soit dans des <i>projets web</i>, des <i>systèmes backend</i> ou des <i>applications embarquées</i>.",
        "about.btn": "En savoir plus ⬇",
        "exp.title": "Expérience Professionnelle",
        "exp.1.date": "Juin 2025 - Août 2025",
        "exp.1.role": "Emploi à court terme : Développement de logiciels",
        "exp.1.desc": "Conception et création du site web d'une clinique (Java, HTML, CSS, JS, MySQL). Un contrat avec la clinique SisterSchola à Darmstadt.",
        "exp.2.date": "Novembre 2024 - Décembre 2024",
        "exp.2.role": "Travail de projet à la THM",
        "exp.2.desc": "Développement d'un système embarqué (Contrôle des feux de signalisation avec ESP32).",
        "edu.title": "Éducation",
        "edu.1.date": "2023 – présent",
        "edu.1.title": "Technische Hochschule Mittelhessen (THM)",
        "edu.1.desc": "Informatique (B.Sc.), 4ème semestre",
        "edu.2.date": "2022 – 2023",
        "edu.2.title": "Centre de langues",
        "edu.2.desc": "B1/B2 (Institut-Goethe), C1 (Diwan Marburg)",
        "edu.3.date": "2019 – 2022",
        "edu.3.title": "Lycée",
        "edu.3.desc": "Baccalauréat avec spécialisation en Mathématiques et Informatique",
        "cert.title": "Certificats",

        "contact.title.reach": "Comment me joindre",
        "contact.github": "Mon GitHub",
        "contact.gitlab": "Mon GitLab",
        "contact.linkedin": "Mon LinkedIn",
        "contact.title.form": "Formulaire de contact",
        "contact.form.name": "Nom",
        "contact.form.email": "E-mail",
        "contact.form.message": "Message",
        "contact.form.submit": "Envoyer",
        "contact.title.map": "Emplacement",

        "stats.projects": "Projets Terminés",
        "stats.langs": "Langages de programmation",
        "stats.exp": "Année d'expérience théorique et pratique"
    }
};

let currentLang = localStorage.getItem('portfolio_lang') || 'de';

function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('portfolio_lang', lang);
    updateDOM();
    updateActiveLangButton();

    // Dispatch custom event for dynamic content (like projects) to re-render
    document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}

function updateDOM() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key]; // innerHTML to support span/b tags
        }
    });

    const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
    placeholders.forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[currentLang][key]) {
            el.setAttribute('placeholder', translations[currentLang][key]);
        }
    });
}

function updateActiveLangButton() {
    const btns = document.querySelectorAll('.lang-btn');
    btns.forEach(btn => {
        if (btn.dataset.lang === currentLang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function t(key) {
    return translations[currentLang][key] || key;
}

// Initialize on DOM read
document.addEventListener('DOMContentLoaded', () => {
    updateDOM();
    updateActiveLangButton();

    // Attach event listeners to language switcher buttons
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            setLanguage(e.target.dataset.lang);
        });
    });
});
