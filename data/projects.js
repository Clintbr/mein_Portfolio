/**
 * @typedef {Object} LocalizedString
 * @property {string} de - German translation
 * @property {string} en - English translation
 * @property {string} fr - French translation
 */

/**
 * @typedef {Object} Project
 * @property {number} id - Unique project identifier
 * @property {LocalizedString} title - Title of the project
 * @property {string} image - Path to preview image
 * @property {LocalizedString} description - Short bold description
 * @property {LocalizedString[]} bullets - Array of bullet point features
 * @property {string[]} tech - Array of technologies used
 * @property {string} category - Match for filter: 'web', 'java', 'embed', 'vm', 'flutter'
 * @property {Object} links - Links to code and preview
 * @property {string} [links.code] - Github or source link
 * @property {string} [links.preview] - Live demo or video link
 * @property {string} [links.previewType] - 'video', 'link', 'alert'
 * @property {string} [links.website] - Actual hosted website (optional)
 * @property {string} [links.codeType] - 'link', 'alert'
 */

/**
 * @type {Project[]}
 */
const projectsData = [
    {
        id: 0,
        title: { de: "Projekt 0: Geräte Integration", en: "Project 0: Device Integration", fr: "Projet 0 : Intégration de Périphériques" },
        image: "bilder/prjkt0.png",
        description: {
            de: "Teamarbeit an dem Lehr- und Forschungsprojekt 'MICRO' von der THM. Ein Remote Labor für eingebettete Systeme. Vollständiges System mit Online Schnittstelle zur Fernnutzung physische Module(Microcontroller)",
            en: "Teamwork on the teaching and research project 'MICRO' at THM. A remote lab for embedded systems. Complete system with online interface for remote use of physical modules (microcontrollers)",
            fr: "Travail d'équipe sur le projet d'enseignement et de recherche 'MICRO' à la THM. Un laboratoire à distance pour systèmes embarqués. Système complet avec interface en ligne pour l'utilisation à distance de modules physiques (microcontrôleurs)"
        },
        bullets: [
            { de: "ein optimiertes Dateiverwaltungssystem bauen", en: "Build an optimized file management system", fr: "Construire un système de gestion de fichiers optimisé" },
            { de: "Analytics Modul: Nutzerverhalten tracken", en: "Analytics Module: Track user behavior", fr: "Module d'analyse : Suivi du comportement des utilisateurs" },
            { de: "HTTP: Kommunikationsprotokoll", en: "HTTP: Communication protocol", fr: "HTTP : Protocole de communication" },
            { de: "Rest-Api: Architekturstil", en: "REST API: Architectural style", fr: "API REST : Style architectural" },
            { de: "Scrum: Weekly sprint, sprint tagebuch", en: "Scrum: Weekly sprints, sprint diary", fr: "Scrum : Sprints hebdomadaires, journal de sprint" }
        ],
        tech: ["GitLab", "Clickhouse", "vue.js", "vuetify", "kotlin", "Docker", "python"],
        category: "embed web",
        links: {
            code: "https://gitlab.com/ag-czekansky/external/swtp-wise-2025-2026", codeType: "link",
            preview: "demos/demo0.mp4", previewType: "video"
        }
    },
    {
        id: 1,
        title: { de: "Projekt 1: Web-App X-Chef", en: "Project 1: Web-App X-Chef", fr: "Projet 1 : App Web X-Chef" },
        image: "bilder/prjkt1.png",
        description: {
            de: "Webanwendung zur Verwaltung von Nutzern und Rezepten namens X-Chef; Erstellung, Kommentieren und Bewertung von Rezepten ermöglicht",
            en: "Web application for managing users and recipes called X-Chef; enables creating, commenting, and rating recipes",
            fr: "Application web pour gérer les utilisateurs et les recettes appelée X-Chef ; permet de créer, commenter et noter des recettes"
        },
        bullets: [
            { de: "Server mit Vertx anlegen", en: "Set up server with Vert.x", fr: "Configurer le serveur avec Vert.x" },
            { de: "Java JDBC mit Java HTTPClient", en: "Java JDBC with Java HTTPClient", fr: "Java JDBC avec Java HTTPClient" },
            { de: "Cybersecurity-Prevention mit 'Java session' und 'prepared queries'", en: "Cybersecurity prevention using 'Java session' and 'prepared queries'", fr: "Prévention en cybersécurité via 'session Java' et 'requêtes préparées'" },
            { de: "Maven template Engine für dynamische Seiten", en: "Maven template engine for dynamic pages", fr: "Moteur de templates Maven pour pages dynamiques" }
        ],
        tech: ["GitLab", "MariaDB", "apiDoc", "Vert.X", "HTML, CSS & JavaScript"],
        category: "web java",
        links: {
            code: "https://github.com/Clintbr/X-Chef-Webseite", codeType: "link",
            preview: "bilder/vorschau1.png", previewType: "link"
        }
    },
    {
        id: 2,
        title: { de: "Projekt 2: Lvp-Spiel", en: "Project 2: Lvp-Game", fr: "Projet 2 : Jeu Lvp" },
        image: "bilder/prjkt2.jpg",
        description: {
            de: "Vereinfachtes Minecraft mit LiveViewProgramming, 3D Welt mit Farben, Missionen zu erledigen, Implementierung der Funktionalität -Zeitreise",
            en: "Simplified Minecraft with LiveViewProgramming, 3D world with colors, missions to complete, implementation of time-travel functionality",
            fr: "Minecraft simplifié avec LiveViewProgramming, monde 3D en couleurs, missions à accomplir, implémentation de la fonctionnalité de voyage dans le temps"
        },
        bullets: [
            { de: "Clerk.java als Backend-Tool mit allen Servereinrichtungen", en: "Clerk.java as backend tool managing server setups", fr: "Clerk.java comme outil backend pour la configuration du serveur" },
            { de: "Konzeption eines Frontend-Moduls mit Canva Api und JavaScript", en: "Design of a frontend module with Canvas API and JavaScript", fr: "Conception d'un module frontend avec l'API Canvas et JavaScript" },
            { de: "Modernes Java mit Stream Programming und Schnittstellen", en: "Modern Java with Stream Programming and Interfaces", fr: "Java moderne avec Programmation par flux et Interfaces" }
        ],
        tech: ["Java", "HTML, CSS & JavaScript", "Canva API", "Clerk"],
        category: "web java",
        links: {
            code: "https://github.com/Clintbr/LVP-Vereinfachtes-Minecraft", codeType: "link",
            preview: "bilder/vorschau2.png", previewType: "link"
        }
    },
    {
        id: 3,
        title: { de: "Projekt 3: Eingebettetes System", en: "Project 3: Embedded System", fr: "Projet 3 : Système Embarqué" },
        image: "bilder/prjkt3.jpg",
        description: {
            de: "Umsetzung von Kreuzung Ampeln mithilfe von 'Arduino'. Die Ganze entwicklung simuliert im 'wokwi' eine Kreuzung Ampeln, die aktiviert werden kann",
            en: "Implementation of intersection traffic lights using 'Arduino'. The entire development simulates activated intersection traffic lights in 'Wokwi'",
            fr: "Implémentation de feux de carrefour utilisant 'Arduino'. Tout le développement simule dans 'Wokwi' des feux de signalisation activés"
        },
        bullets: [
            { de: "Hardwareorientiert", en: "Hardware-oriented", fr: "Orienté matériel" },
            { de: "Konzeption und Implementierung eines Leitungsmoduls", en: "Concept and implementation of a line module", fr: "Conception et implémentation d'un module de ligne" }
        ],
        tech: ["C", "Arduino (C++)", "NodeMCU ESP32", "PlatformIO", "Http", "Json"],
        category: "embed",
        links: {
            code: "https://github.com/Clintbr/-Kreuzung-Ampeln", codeType: "link",
            preview: "demos/demo3.mp4", previewType: "video"
        }
    },
    {
        id: 4,
        title: { de: "Projekt 4: Virtual Machine", en: "Project 4: Virtual Machine", fr: "Projet 4 : Machine Virtuelle" },
        image: "bilder/prjkt4.jpg",
        description: {
            de: "Entwicklung einer NINJA Virtual Machine (Stack Verarbeitung: LIFO) samt Implementierung eines 'Garbage Collectors'",
            en: "Development of a NINJA Virtual Machine (LIFO stack processing) including the implementation of a Garbage Collector",
            fr: "Développement d'une Machine Virtuelle NINJA (traitement de pile LIFO) incluant l'implémentation d'un Garbage Collector"
        },
        bullets: [
            { de: "Speicherverwaltung mit Garbage Collection", en: "Memory management with Garbage Collection", fr: "Gestion de la mémoire avec Garbage Collection" },
            { de: "Konzeption und Implementierung eines Debuggers", en: "Design and implementation of a Debugger", fr: "Conception et implémentation d'un Débogueur" },
            { de: "Rechenobjekte auf dem Heap", en: "Computational objects on the heap", fr: "Objets de calcul sur le tas" }
        ],
        tech: ["C", "Oracle Virtual Box"],
        category: "vm",
        links: {
            code: "https://github.com/Clintbr/Virtual-Machine", codeType: "link",
            preview: "🖲️Keine Vorschau, nur im Terminal ausführbar", previewType: "alert"
        }
    },
    {
        id: 5,
        title: { de: "Projekt 5: Online Homepage einer Klinik", en: "Project 5: Online Homepage of a Clinic", fr: "Projet 5 : Page d'accueil en ligne d'une clinique" },
        image: "bilder/prjkt5.png",
        description: {
            de: "Entwicklung einer ganzen Webseite, als Online-Schnittstelle einer Klinik, die alle Angebote und Bereiche klar und visuell attraktiv darstellt",
            en: "Development of an entire website as an online interface for a clinic, presenting all offers and areas clearly and visually attractively",
            fr: "Développement d'un site web complet comme interface en ligne pour une clinique, présentant clairement et de manière attrayante toutes les offres et tous les domaines"
        },
        bullets: [
            { de: "Emailing-System", en: "Emailing system", fr: "Système de messagerie" },
            { de: "Integration von Übersetzer-Modul", en: "Integration of a translator module", fr: "Intégration d'un module de traduction" },
            { de: "Hosting", en: "Hosting", fr: "Hébergement" }
        ],
        tech: ["HTML, CSS & JavaScript", "WordPress"],
        category: "web",
        links: {
            code: "🖲️Code aus vertraulichen Gründen verborgen🥲", codeType: "alert",
            preview: "https://www.sisterschola.org/", previewType: "link"
        }
    },
    {
        id: 6,
        title: { de: "Projekt 6: Mein Portfolio", en: "Project 6: My Portfolio", fr: "Projet 6 : Mon Portfolio" },
        image: "bilder/prjkt6.png",
        description: {
            de: "Entwicklung von einem professionellen minimalistischen Portfolio, als Online-Präsentation meines Werdegangs",
            en: "Development of a professional minimalist portfolio as an online presentation of my career path",
            fr: "Développement d'un portfolio professionnel minimaliste comme présentation en ligne de mon parcours professionnel"
        },
        bullets: [
            { de: "Emailing-System", en: "Emailing system", fr: "Système de messagerie" },
            { de: "GitHub als CLoud und Hosting Tool", en: "GitHub as cloud and hosting tool", fr: "GitHub comme outil cloud et d'hébergement" },
            { de: "Git für Version control", en: "Git for version control", fr: "Git pour le contrôle de version" }
        ],
        tech: ["HTML, CSS & JavaScript", "Fontawesome", "GitHub"],
        category: "web",
        links: {
            code: "https://github.com/Clintbr/mein_Portfolio", codeType: "link",
            preview: "https://clintbr.github.io/mein_Portfolio/", previewType: "link"
        }
    },
    {
        id: 7, // Adjusting ID to match original order
        title: { de: "Projekt 7: 3D-Snake Game", en: "Project 7: 3D Snake Game", fr: "Projet 7 : Jeu Snake 3D" },
        image: "bilder/prjkt7.png",
        description: {
            de: "Ein modernes 3D-Snake-Spiel, entwickelt mit Three.js, das ein immersives Spielerlebnis in einer dreidimensionalen Welt mit realistischen Bäumen und Hindernissen bietet.",
            en: "A modern 3D Snake game developed with Three.js, offering an immersive gaming experience in a three-dimensional world with realistic trees and obstacles.",
            fr: "Un jeu Snake 3D moderne développé avec Three.js, offrant une expérience immersive dans un monde tridimensionnel avec des arbres et obstacles réalistes."
        },
        bullets: [
            { de: "3D-Spielumgebung: Erlebe Snake in einer vollständig dreidimensionalen Welt", en: "3D Game Environment: Experience Snake in a fully three-dimensional world", fr: "Environnement 3D : Expérimentez Snake dans un monde totalement 3D" },
            { de: "Realistische Grafik: Detailreiche Bäume und natürliche Umgebung", en: "Realistic Graphics: Detailed trees and natural surroundings", fr: "Graphismes réalistes : Arbres détaillés et environnement naturel" },
            { de: "Hintergrundmusik: Anpassbar", en: "Background music: Customizable", fr: "Musique de fond : Personnalisable" }
        ],
        tech: ["HTML, CSS & JavaScript", "Three.js", "GitHub"],
        category: "web",
        links: {
            code: "https://github.com/Clintbr/Snake-Game", codeType: "link",
            preview: "https://clintbr.github.io/Snake-Game/", previewType: "link"
        }
    },
    {
        id: 8,
        title: { de: "Projekt 8: ClintChat", en: "Project 8: ClintChat", fr: "Projet 8 : ClintChat" },
        image: "bilder/prjkt8.png",
        description: {
            de: "Eine moderne, WhatsApp-inspirierte Chat-Anwendung, die mit HTML, CSS und JavaScript implementiert wurde.",
            en: "A modern, WhatsApp-inspired chat application implemented with HTML, CSS, and JavaScript.",
            fr: "Une application de chat moderne inspirée de WhatsApp, implémentée avec HTML, CSS et JavaScript."
        },
        bullets: [
            { de: "Moderne Benutzeroberfläche: An WhatsApp angelehntes Design mit dunklem Modus", en: "Modern UI: WhatsApp-inspired design with dark mode", fr: "Interface moderne : Design inspiré de WhatsApp avec mode sombre" },
            { de: "Responsive Design: Optimiert für Desktop und mobile Geräte", en: "Responsive Design: Optimized for desktop and mobile devices", fr: "Design réactif : Optimisé pour les ordinateurs et les appareils mobiles" },
            { de: "Echtzeit-Messaging: Nachrichten werden sofort angezeigt", en: "Real-time messaging: Messages appear instantly", fr: "Messagerie en temps réel : Les messages s'affichent instantanément" }
        ],
        tech: ["HTML, CSS & JavaScript", "Storage Funktion", "GitHub"],
        category: "web",
        links: {
            code: "https://github.com/Clintbr/ClintChat", codeType: "link",
            preview: "https://clintbr.github.io/ClintChat/", previewType: "link"
        }
    },
    {
        id: 9,
        title: { de: "Projekt 9: WG TaskManager", en: "Project 9: Flatshare TaskManager", fr: "Projet 9 : Gestionnaire de Tâches pour Colocation" },
        image: "bilder/prjkt9.png",
        description: {
            de: "Eine moderne, benutzerfreundliche Webanwendung zur Verwaltung von Aufgaben in Wohngemeinschaften.",
            en: "A modern, user-friendly web application for managing tasks in shared apartments/flatshares.",
            fr: "Une application web moderne et conviviale pour la gestion des tâches en colocation."
        },
        bullets: [
            { de: "Intelligente Filter: Filtern Sie Aufgaben nach Status, Mitbewohner oder Kategorie", en: "Smart filters: Filter tasks by status, flatmate, or category", fr: "Filtres intelligents : Filtrez les tâches par statut, colocataire ou catégorie" },
            { de: "Dashboard: Übersichtliche Statistiken und anstehende Aufgaben", en: "Dashboard: Clear statistics and upcoming tasks", fr: "Tableau de bord : Statistiques claires et tâches à venir" },
            { de: "Benachrichtigungen: Erinnerungen für überfällige und bald fällige Aufgaben", en: "Notifications: Reminders for overdue and upcoming tasks", fr: "Notifications : Rappels pour les tâches en retard et à venir" }
        ],
        tech: ["HTML, CSS & JavaScript", "Storage Funktion", "GitHub"],
        category: "web",
        links: {
            code: "https://github.com/Clintbr/WG-Taskmanager", codeType: "link",
            preview: "https://clintbr.github.io/WG-Taskmanager/", previewType: "link"
        }
    },
    {
        id: 10,
        title: { de: "Projekt 10: Secures Notes", en: "Project 10: Secure Notes", fr: "Projet 10 : Notes Sécurisées" },
        image: "bilder/prjkt10.png",
        description: {
            de: "Moderne, webbasierte Plattform zur sicheren Verwaltung persönlicher und geteilter Notizen. Fokus auf Cybersecurity, Containerisierung und Clean Code",
            en: "Modern web-based platform for secure management of personal and shared notes. Focus on cybersecurity, containerization, and clean code",
            fr: "Plateforme web moderne pour la gestion sécurisée de notes personnelles et partagées. Axé sur la cybersécurité, la conteneurisation et un code propre"
        },
        bullets: [
            { de: "Containerisierung und Deployment mit Docker", en: "Containerization and deployment with Docker", fr: "Conteneurisation et déploiement avec Docker" },
            { de: "Implementierung von Sicherheitsmechanismen: 2FA via E-Mail, JWT Tokens, RLS Policies, DOMPurify & Regex-Validierung", en: "Security implementation: 2FA via Email, JWT Tokens, RLS Policies, DOMPurify & Regex validation", fr: "Implémentation de sécurité : 2FA par E-mail, Jetons JWT, Politiques RLS, DOMPurify & Validation Regex" },
            { de: "Markdown Parsing durch Marked.js für flexible Inhaltsdarstellung", en: "Markdown Parsing with Marked.js for flexible content display", fr: "Analyse Markdown avec Marked.js pour un affichage de contenu flexible" }
        ],
        tech: ["Vue.js 3", "Spring Boot, Maven & Java", "Supabase (PostgreSQL)", "Docker", "Marked.js"],
        category: "java",
        links: {
            code: "https://github.com/SSE-Projekt/SSE_Repo/tree/main?tab=readme-ov-file", codeType: "link",
            preview: "bilder/prjkt10.png", previewType: "link"
        }
    },
    {
        id: 11,
        title: { de: "Projekt 11: MC-Trainer", en: "Project 11: MC-Trainer", fr: "Projet 11 : MC-Trainer" },
        image: "bilder/prjkt11.png",
        description: {
            de: "Plattformübergreifende mobile App mit Flutter: Fokus auf sauberes State-Management, Authentifizierung, Storage für 'Multi Choice Training'",
            en: "Cross-platform mobile app using Flutter: Focus on clean state management, authentication, and storage for 'Multiple Choice Training'",
            fr: "Application mobile multiplateforme avec Flutter : Accent sur la gestion d'état propre, l'authentification et le stockage pour 'Multi Choice Training'"
        },
        bullets: [
            { de: "abgeschlossene Module können geteilt werden(durch whatsapp oder Gmail zum Beispiel)", en: "Completed modules can be shared (e.g., via WhatsApp or Gmail)", fr: "Les modules terminés peuvent être partagés (ex: via WhatsApp ou Gmail)" },
            { de: "Lernmodus: Karte mit Text und 4–6 Antworten, mind. eine richtig", en: "Learning mode: Card with text and 4-6 answers, at least one correct", fr: "Mode d'apprentissage : Carte avec texte et 4 à 6 réponses, dont au moins une correcte" },
            { de: "Weitere Module von einem Server importierbar", en: "Additional modules can be imported from a server", fr: "Possibilité d'importer d'autres modules depuis un serveur" }
        ],
        tech: ["Dart & Flutter SDK", "supabase_flutter", "Provider & go_router", "image_picker"],
        category: "flutter",
        links: {
            code: "https://git.thm.de/xd-praktikum/ws-25/mc-trainer-kami", codeType: "link",
            preview: "bilder/prjkt11.png", previewType: "link"
        }
    },
    {
        id: 12,
        title: {
            de: "Projekt 12: Enterprise Ticket Management System",
            en: "Project 12: Enterprise Ticket Management System",
            fr: "Projet 12 : Système de Gestion de Tickets Enterprise"
        },
        image: "bilder/prjkt12.png",
        description: {
            de: "Ein leistungsfähiges Full-Stack-Ticket-Management-System zur Verwaltung von Supportanfragen und zur Optimierung von Support-Workflows.",
            en: "A high-performance full-stack ticket management system designed to manage support requests and optimize support workflows.",
            fr: "Un système complet de gestion de tickets conçu pour gérer les demandes de support et optimiser les flux de travail du support."
        },
        bullets: [
            {
                de: "Support-Dashboard: Verwaltung des gesamten Ticket-Lebenszyklus mit rollenbasierter Sicht für USER, SUPPORT und ADMIN",
                en: "Support dashboard: Manage the entire ticket lifecycle with role-based views for USER, SUPPORT and ADMIN",
                fr: "Tableau de bord de support : Gestion complète du cycle de vie des tickets avec vues basées sur les rôles USER, SUPPORT et ADMIN"
            },
            {
                de: "Automatische Priorisierung: Backend-Logik analysiert Ticketinhalt, Schlüsselwörter und Zeitfaktoren zur Prioritätsbewertung",
                en: "Automatic prioritization: Backend logic analyzes ticket content, keywords, and time factors to suggest priorities",
                fr: "Priorisation automatique : Logique backend analysant le contenu des tickets, mots-clés et facteurs temporels"
            },
            {
                de: "Admin-Management: Benutzer- und Rollenverwaltung mit Drag-and-Drop sowie JWT-basierter Zugriffskontrolle",
                en: "Admin management: User and role management with drag-and-drop and JWT-based access control",
                fr: "Gestion administrateur : Gestion des utilisateurs et des rôles avec glisser-déposer et contrôle d'accès JWT"
            },
            {
                de: "Business Analytics: Visualisierung von Ticket-Trends und Systemmetriken über ein interaktives Dashboard",
                en: "Business analytics: Visualization of ticket trends and system metrics through an interactive dashboard",
                fr: "Analyse métier : Visualisation des tendances des tickets et des métriques système via un tableau de bord interactif"
            }
        ],
        tech: [
            "Java 21",
            "Spring Boot 3",
            "Spring Security (JWT & OAuth2)",
            "React 18",
            "Tailwind CSS",
            "PostgreSQL",
            "Recharts"
        ],
        category: "fullstack java",
        links: {
            code: "https://github.com/Clintbr/I-Tickets-Management", codeType: "link",
            preview: "https://ticketsystem-frontend-p9y9.onrender.com/", previewType: "link"
        }
    },
    {
        id: 13,
        title: { 
            de: "Projekt 13: CV Builder", 
            en: "Project 13: CV Builder", 
            fr: "Projet 13 : Générateur de CV" 
        },
        image: "bilder/prjkt11.png",
        description: {
            de: "Eine moderne, performante Webanwendung zur Erstellung professioneller Lebensläufe mit Echtzeit-Vorschau und PDF-Export.",
            en: "A modern and high-performance web application for creating professional resumes with real-time preview and PDF export.",
            fr: "Une application web moderne et performante permettant de créer des CV professionnels avec aperçu en temps réel et export PDF."
        },
        bullets: [
            { 
                de: "Echtzeit-Editor: Bearbeitung von persönlichen Daten, Erfahrung, Ausbildung und Fähigkeiten mit sofortiger Vorschau", 
                en: "Real-time editor: Edit personal information, experience, education, and skills with instant preview", 
                fr: "Éditeur en temps réel : modification des informations personnelles, expériences, formations et compétences avec aperçu instantané" 
            },
            { 
                de: "Modernes Design: Futuristisches Dark-Theme mit Animationen, Glow-Effekten und professionellem Layout", 
                en: "Modern design: Futuristic dark theme with animations, glow effects, and a clean professional layout", 
                fr: "Design moderne : thème sombre futuriste avec animations et mise en page professionnelle" 
            },
            { 
                de: "PDF-Export: Präziser Export von Lebensläufen im A4-Format mit optimiertem Layout", 
                en: "PDF export: High-quality resume export in A4 format with optimized layout", 
                fr: "Export PDF : export précis des CV au format A4 avec mise en page optimisée" 
            },
            { 
                de: "Anpassbare Oberfläche: Dynamische Farbthemen und resizable Editor-Sidebar", 
                en: "Custom interface: Dynamic color themes and resizable editor sidebar", 
                fr: "Interface personnalisable : thèmes de couleurs dynamiques et panneau d'édition redimensionnable" 
            }
        ],
        tech: [
            "React",
            "Vite",
            "Tailwind CSS",
            "react-to-print",
            "JavaScript",
            "GitHub Pages"
        ],
        category: "web",
        links: {
            code: "https://github.com/Clintbr/CV_Maker", codeType: "link",
            preview: "https://clintbr.github.io/CV_Maker/", previewType: "link"
        }
    }
];

function renderProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return; // Only run on projects page

    const activeFilterBtn = document.querySelector('.filter-btn.active');
    const filter = activeFilterBtn ? activeFilterBtn.getAttribute('data-filter') : 'all';

    container.innerHTML = '';

    projectsData.forEach(project => {
        if (filter !== 'all' && !project.category.includes(filter)) {
            return; // skip filtered
        }

        const article = document.createElement('article');
        article.className = 'project-card glass-panel fade-in';
        article.setAttribute('data-category', project.category);

        const title = project.title[currentLang] || project.title.de;
        const description = project.description[currentLang] || project.description.de;

        let bulletsHTML = '';
        project.bullets.forEach(b => {
            const text = b[currentLang] || b.de;
            bulletsHTML += `<li><i class="fas fa-hand-point-right"></i> ${text}</li>`;
        });

        let techHTML = '';
        project.tech.forEach(t => {
            techHTML += `<li>${t}</li>`;
        });

        const strings = {
            code: t('projects.code'),
            preview: t('projects.preview'),
            website: t('projects.website')
        };

        let rightLink = '';
        if (project.links.codeType === 'link' && project.links.code) {
            rightLink = `<a class="btn-primary right" href="${project.links.code}" target="_blank"><i class="fab fa-github"></i> ${strings.code}</a>`;
        } else if (project.links.codeType === 'alert') {
            rightLink = `<a class="btn-primary right" href="#" onclick="alert('${project.links.code}')"><i class="fas fa-code"></i> ${strings.code}</a>`;
        }

        let leftLink = '';
        if (project.links.previewType === 'link' && project.links.preview) {
            leftLink = `<a class="btn-secondary left" href="${project.links.preview}" target="_blank"><i class="fas fa-external-link-alt"></i> ${project.category.includes('web') && !project.image.includes('1') && !project.image.includes('2') && !project.image.includes('10') ? strings.website : strings.preview}</a>`;
        } else if (project.links.previewType === 'video') {
            leftLink = `<a class="btn-secondary left" data-video="${project.links.preview}" href="#"><i class="fas fa-play"></i> ${strings.preview}</a>`;
        } else if (project.links.previewType === 'alert') {
            leftLink = `<a class="btn-secondary left" href="#" onclick="alert('${project.links.preview}')"><i class="fas fa-desktop"></i> ${strings.preview}</a>`;
        }

        article.innerHTML = `
            <div class="project-image-wrapper">
                <img src="${project.image}" alt="${title}">
                <div class="project-overlay"></div>
            </div>
            <div class="project-content">
                <h3>${title}</h3>
                <div class="detail-project">
                    <p><b>${description}</b></p>
                    <ul class="infos">${bulletsHTML}</ul>
                </div>
                <div class="tech">
                    <p class="tech-title"><i>Tech Stack:</i></p>
                    <ul class="technologie">${techHTML}</ul>
                </div>
                <div class="project-links">
                    ${leftLink}
                    ${rightLink}
                </div>
            </div>
        `;
        container.appendChild(article);
    });

    // Reattach video events if video.js is present
    if (typeof attachVideoEvents === 'function') {
        attachVideoEvents();
    }
}

document.addEventListener('languageChanged', renderProjects);
document.addEventListener('DOMContentLoaded', renderProjects);
