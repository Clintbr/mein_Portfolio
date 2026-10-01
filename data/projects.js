/**
 * @typedef {Object} LocalizedString
 * @property {string} de - German translation
 * @property {string} en - English translation
 * @property {string} fr - French translation
 */

/**
 * @typedef {Object} Project
 * @property {number} id - Unique project identifier
 * @property {string} date - Project duration interval
 * @property {LocalizedString} title - Title of the project
 * @property {string} image - Path to preview image
 * @property {LocalizedString} description - Short bold description
 * @property {LocalizedString[]} bullets - Array of bullet point features
 * @property {string[]} tech - Array of technologies used
 * @property {string} category - Match for filter: 'ai', 'fullstack', 'web', 'java', 'embed'
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
        id: 15,
        date: "08/2026 – 09/2026",
        title: {
            de: "AI Mail Manager – Intelligente E-Mail-Analyse",
            en: "AI Mail Manager – Intelligent Email Assistant",
            fr: "AI Mail Manager – Assistant E-mail Intelligent"
        },
        image: "bilder/prjkt_15.png",
        description: {
            de: "KI-gestützte Full-Stack-Software zur automatischen E-Mail-Klassifizierung, Priorisierung und Antwortgenerierung mit Google Gemini und Gmail API.",
            en: "AI-powered full-stack application for automated email classification, prioritization, and draft generation using Google Gemini and Gmail API.",
            fr: "Application full-stack alimentée par l'IA pour la classification automatique, la priorisation et la rédaction assistée d'e-mails via Google Gemini et l'API Gmail."
        },
        bullets: [
            {
                de: "Human-in-the-Loop-Workflow: Generierte Antworten werden vor dem Versand vom Nutzer transparent geprüft und editiert.",
                en: "Human-in-the-Loop Workflow: AI-generated replies are reviewed and edited before dispatching.",
                fr: "Workflow Human-in-the-Loop : Contrôle et édition par l'utilisateur des réponses générées par l'IA."
            },
            {
                de: "Sichere OAuth 2.0 Authentifizierung und direkte Gmail API Anbindung für Mail-Synchronisation.",
                en: "Secure OAuth 2.0 authentication and direct Gmail API integration for mailbox sync.",
                fr: "Authentification OAuth 2.0 sécurisée et intégration directe de l'API Gmail."
            },
            {
                de: "Automatische Sentiment-, Kernaussagen- und Dringlichkeitsbewertung durch Google Gemini.",
                en: "Automated sentiment, key takeaways, and urgency evaluation via Google Gemini.",
                fr: "Évaluation automatique du sentiment, des points clés et de l'urgence par Google Gemini."
            },
            {
                de: "Moderne REST-Architektur mit Java 21, Spring Boot 3 und reaktivem React / TypeScript Frontend.",
                en: "Modern REST architecture with Java 21, Spring Boot 3, and responsive React / TypeScript frontend.",
                fr: "Architecture REST moderne avec Java 21, Spring Boot 3 et interface réactive React / TypeScript."
            }
        ],
        tech: ["Java 21", "Spring Boot 3", "Spring Security", "Google Gemini", "Gmail API", "OAuth 2.0", "React", "TypeScript", "Tailwind CSS"],
        category: "ai fullstack java web",
        links: {
            code: "https://github.com/Clintbr/mymailai",
            codeType: "link",
            preview: "https://mymailai.onrender.com/",
            previewType: "link"
        }
    },
    {
        id: 14,
        date: "04/2026 – 06/2026",
        title: {
            de: "Crosslingual RAG Research – Lokale KI-Pipeline",
            en: "Crosslingual RAG Research – Local AI Pipeline",
            fr: "Crosslingual RAG Research – Pipeline IA Locale"
        },
        image: "bilder/prjkt_14.png",
        description: {
            de: "Forschungsprojekt zur Implementierung und empirischen Evaluation mehrsprachiger Retrieval-Augmented Generation (RAG) auf lokalen LLMs ohne Cloud-Abhängigkeit.",
            en: "Research project implementing and benchmarking multilingual Retrieval-Augmented Generation (RAG) using local LLMs without external cloud APIs.",
            fr: "Projet de recherche implémentant et évaluant des stratégies RAG multilingues sur des LLMs locaux sans dépendance aux API cloud."
        },
        bullets: [
            {
                de: "Crosslinguale Suche: Anfragen und Dokumente in Deutsch, Englisch und Französisch präzise abgleichen.",
                en: "Cross-lingual search: Seamlessly match queries and documents across German, English, and French.",
                fr: "Recherche multilingue : Alignement précis des requêtes et documents en allemand, anglais et français."
            },
            {
                de: "Strategievergleich: Systematische Analyse von MonoRAG, MultiRAG und CrossRAG Architekturen.",
                en: "Strategy comparison: Systematic evaluation of MonoRAG, MultiRAG, and CrossRAG architectures.",
                fr: "Comparaison des stratégies : Analyse systématique des architectures MonoRAG, MultiRAG et CrossRAG."
            },
            {
                de: "Vektordatenbank Qdrant und state-of-the-art Embedding-Modelle (BGE-M3) lokal betrieben.",
                en: "Qdrant vector database and state-of-the-art embeddings (BGE-M3) operated locally.",
                fr: "Base de données vectorielle Qdrant et modèles d'embedding (BGE-M3) exécutés localement."
            },
            {
                de: "Qualitäts-Benchmarking mit DeepEval, NumPy, Pandas und Visualisierung mit Matplotlib.",
                en: "Quality benchmarking using DeepEval, NumPy, Pandas, and visualization with Matplotlib.",
                fr: "Benchmarking de qualité avec DeepEval, NumPy, Pandas et visualisations Matplotlib."
            }
        ],
        tech: ["Python", "Ollama", "Qdrant", "BGE-M3", "RAG", "LLMs", "DeepEval", "NumPy", "Pandas", "Matplotlib"],
        category: "ai",
        links: {
            code: "https://github.com/Clintbr/Crosslingual-RAG",
            codeType: "link",
            preview: "https://github.com/Clintbr/Crosslingual-RAG",
            previewType: "link"
        }
    },
    {
        id: 12,
        date: "03/2026 – heute",
        title: {
            de: "Enterprise Ticket Management System",
            en: "Enterprise Ticket Management System",
            fr: "Système de Gestion de Tickets Enterprise"
        },
        image: "bilder/prjkt12.png",
        description: {
            de: "Hochperformantes Full-Stack Support- und Ticket-System mit rollenbasierter Authentifizierung (RBAC), Analytics und KI-Chatbot.",
            en: "High-performance full-stack ticket and support management system with role-based access control (RBAC), analytics, and an AI chatbot.",
            fr: "Système de gestion de tickets d'assistance complet avec contrôle d'accès basé sur les rôles (RBAC), tableau de bord analytique et chatbot IA."
        },
        bullets: [
            {
                de: "Rollenbasierte Rechteverwaltung: Separate Workflows und Dashboards für USER, SUPPORT und ADMIN.",
                en: "Role-based access control: Dedicated workflows and views for USER, SUPPORT, and ADMIN.",
                fr: "Gestion des droits par rôles : Vues et tableaux de bord dédiés pour USER, SUPPORT et ADMIN."
            },
            {
                de: "KI-gestützter Chatbot zur automatisierten Ersthilfe und Ticket-Kategorisierung.",
                en: "AI-powered chatbot for automated first-level support and issue categorization.",
                fr: "Chatbot alimenté par l'IA pour l'assistance de premier niveau et le tri des tickets."
            },
            {
                de: "Sichere JWT-Authentifizierung, PostgreSQL Persistenz und Spring Security Absicherung.",
                en: "Secure JWT authentication, PostgreSQL persistence, and Spring Security defense.",
                fr: "Authentification JWT sécurisée, persistance PostgreSQL et sécurité Spring Security."
            },
            {
                de: "Business Analytics Dashboard mit Recharts zur Visualisierung von Support-Metriken.",
                en: "Business analytics dashboard with Recharts to visualize support performance metrics.",
                fr: "Tableau de bord d'analyse avec Recharts pour visualiser les métriques de support."
            }
        ],
        tech: ["Java 21", "Spring Boot 3", "Spring Security", "React 18", "Tailwind CSS", "PostgreSQL", "LLM", "Recharts"],
        category: "fullstack java ai web",
        links: {
            code: "https://github.com/Clintbr/I-Tickets-Management",
            codeType: "link",
            preview: "https://ticketsyst.netlify.app/",
            previewType: "link"
        }
    },
    {
        id: 13,
        date: "02/2026 – 02/2026",
        title: {
            de: "CV Builder – Interaktiver Lebenslauf-Editor",
            en: "CV Builder – Interactive Resume Maker",
            fr: "CV Builder – Créateur de CV Interactif"
        },
        image: "bilder/prjkt13.png",
        description: {
            de: "Moderne, responsive Webanwendung zur dynamischen Erstellung professioneller Lebensläufe mit Sofort-Vorschau und pixelgenauem PDF-Export.",
            en: "Modern and responsive web application for creating professional resumes with real-time preview and pixel-perfect PDF export.",
            fr: "Application web moderne et réactive pour concevoir des CV professionnels avec prévisualisation instantanée et export PDF haute précision."
        },
        bullets: [
            {
                de: "Echtzeit-Editor für persönliche Angaben, Berufserfahrung, Ausbildung und Skills.",
                en: "Real-time editor for personal info, experience, education, and technical skills.",
                fr: "Éditeur en temps réel des informations personnelles, expériences, diplômes et compétences."
            },
            {
                de: "Futuristisches Dark-Theme mit Glow-Effekten, Farbpaletten-Auswahl und flexibler Seitenleiste.",
                en: "Futuristic dark theme with glow accents, dynamic color presets, and customizable sidebar.",
                fr: "Thème sombre moderne avec effets de lueur, palettes dynamiques et barre latérale ajustable."
            },
            {
                de: "Druckfertiger A4-Export mit sauberem CSS-Page-Break Handling via react-to-print.",
                en: "Print-ready A4 PDF export with optimized CSS page-break rules via react-to-print.",
                fr: "Export PDF A4 haute définition optimisé pour l'impression."
            }
        ],
        tech: ["React", "Vite", "Tailwind CSS", "react-to-print", "JavaScript"],
        category: "web",
        links: {
            code: "https://github.com/Clintbr/CV_Maker",
            codeType: "link",
            preview: "https://clintbr.github.io/CV_Maker/",
            previewType: "link"
        }
    },
    {
        id: 10,
        date: "11/2025 – 01/2026",
        title: {
            de: "Secure Notes – Sichere Cloud-Notizen",
            en: "Secure Notes – Cloud Note Management",
            fr: "Secure Notes – Plateforme de Notes Sécurisée"
        },
        image: "bilder/prjkt10.png",
        description: {
            de: "Webbasierte Plattform zur verschlüsselten Speicherung und Verwaltung von Notizen mit 2-Faktor-Authentifizierung (2FA) und Docker-Deployment.",
            en: "Web application for encrypted note storage and sharing featuring 2-factor authentication (2FA) and Dockerized deployment.",
            fr: "Plateforme web sécurisée pour la gestion de notes chiffrées avec authentification à deux facteurs (2FA) et conteneurisation Docker."
        },
        bullets: [
            {
                de: "Cybersecurity First: 2FA via E-Mail, JWT Tokens, RLS Policies und XSS-Schutz via DOMPurify.",
                en: "Cybersecurity first: 2FA via email, JWT tokens, Supabase RLS policies, and DOMPurify sanitization.",
                fr: "Sécurité renforcée : 2FA par e-mail, jetons JWT, politiques RLS et protection XSS."
            },
            {
                de: "Containerisierung mit Docker für reproduzierbares Deployment.",
                en: "Full containerization using Docker for reproducible deployment.",
                fr: "Conteneurisation complète avec Docker pour un déploiement fiable."
            },
            {
                de: "Rich-Text Markdown-Editor mit Marked.js für strukturierte Notizen.",
                en: "Rich-text Markdown editor with Marked.js for structured note taking.",
                fr: "Éditeur Markdown riche avec Marked.js pour un rendu flexible."
            }
        ],
        tech: ["Vue.js 3", "Spring Boot", "Java", "Supabase (PostgreSQL)", "Docker", "Marked.js"],
        category: "fullstack java web",
        links: {
            code: "https://github.com/SSE-Projekt/SSE_Repo/tree/main?tab=readme-ov-file",
            codeType: "link",
            preview: "bilder/prjkt10.png",
            previewType: "link"
        }
    },
    {
        id: 11,
        date: "11/2025 – 02/2026",
        title: {
            de: "MC-Trainer – Mobile Lernplattform",
            en: "MC-Trainer – Mobile Learning App",
            fr: "MC-Trainer – Application Mobile d'Apprentissage"
        },
        image: "bilder/prjkt11.png",
        description: {
            de: "Plattformübergreifende mobile App für interaktives Multiple-Choice-Lernen mit Modul-Sharing und Cloud-Synchronisation.",
            en: "Cross-platform mobile app for interactive multiple-choice training with module sharing and cloud sync.",
            fr: "Application mobile multiplateforme pour l'apprentissage par QCM avec partage de modules et synchronisation cloud."
        },
        bullets: [
            {
                de: "Lernmodus mit dynamischen Multiple-Choice-Fragen und Fortschritts-Tracking.",
                en: "Learning mode featuring dynamic question cards and performance tracking.",
                fr: "Mode d'apprentissage avec cartes de questions dynamiques et suivi des scores."
            },
            {
                de: "Modul-Export & Sharing über Messenger-Dienste (WhatsApp, E-Mail).",
                en: "Module export & direct sharing via messaging channels (WhatsApp, Email).",
                fr: "Export et partage direct des modules via applications de messagerie."
            },
            {
                de: "Saubere Flutter-Architektur mit Provider State-Management und Supabase Backend.",
                en: "Clean Flutter architecture with Provider state management and Supabase backend.",
                fr: "Architecture Flutter soignée avec Provider et backend Supabase."
            }
        ],
        tech: ["Dart & Flutter SDK", "Supabase", "Provider", "go_router"],
        category: "fullstack web",
        links: {
            code: "https://git.thm.de/xd-praktikum/ws-25/mc-trainer-kami",
            codeType: "link",
            preview: "bilder/prjkt11.png",
            previewType: "link"
        }
    },
    {
        id: 0,
        date: "10/2025 – 01/2026",
        title: {
            de: "Projekt MICRO – THM Remote Labor",
            en: "Project MICRO – THM Remote Lab",
            fr: "Projet MICRO – Laboratoire Distant THM"
        },
        image: "bilder/prjkt0.png",
        description: {
            de: "Mitarbeit am universitären Lehr- und Forschungsprojekt 'MICRO' der THM für den Fernzugriff auf eingebettete Mikrocontroller-Systeme.",
            en: "Collaboration on the THM university research project 'MICRO' enabling remote access to embedded microcontroller testbeds.",
            fr: "Participation au projet de recherche universitaire 'MICRO' de la THM pour le contrôle à distance de microcontrôleurs."
        },
        bullets: [
            {
                de: "Optimiertes Dateiverwaltungs- und Upload-System für Hex-Binaries.",
                en: "Optimized file management and upload pipeline for firmware binaries.",
                fr: "Système optimisé de gestion et téléversement de fichiers binaires."
            },
            {
                de: "Analytics Modul zur Erfassung und Auswertung von Nutzeraktivitäten.",
                en: "Analytics module for tracking and evaluating real-time user behavior.",
                fr: "Module analytique pour le suivi de l'activité des utilisateurs."
            },
            {
                de: "Agile Entwicklung im Scrum-Team mit wöchentlichen Sprints.",
                en: "Agile engineering within a Scrum team with weekly sprints.",
                fr: "Développement agile en équipe Scrum avec sprints hebdomadaires."
            }
        ],
        tech: ["Vue.js", "Vuetify", "Kotlin", "Docker", "Python", "ClickHouse", "GitLab"],
        category: "embed web fullstack",
        links: {
            code: "https://gitlab.com/ag-czekansky/external/swtp-wise-2025-2026",
            codeType: "link",
            preview: "demos/demo0.mp4",
            previewType: "video"
        }
    },
    {
        id: 5,
        date: "02/2025 – 03/2026",
        title: {
            de: "SisterSchola Klinik – Webportal",
            en: "SisterSchola Clinic – Web Portal",
            fr: "SisterSchola Clinique – Portail Web"
        },
        image: "bilder/prjkt5.png",
        description: {
            de: "Offizieller Webauftritt für die Klinik SisterSchola in Darmstadt mit mehrsprachiger Navigation und integriertem Patienten-Kontakt-System.",
            en: "Official web portal for SisterSchola Clinic in Darmstadt featuring multilingual navigation and integrated inquiry services.",
            fr: "Portail web officiel de la clinique SisterSchola à Darmstadt avec support multilingue et système de contact pour patients."
        },
        bullets: [
            {
                de: "Zuverlässiger SMTP-Mailservice für Terminanfragen und Patientenkontakt.",
                en: "Reliable SMTP email service for appointments and direct patient inquiries.",
                fr: "Service e-mail SMTP sécurisé pour la prise de rendez-vous et messages."
            },
            {
                de: "Mehrsprachiges Lokalisierungsmodul und optimierte mobile Responsivität.",
                en: "Multilingual localization engine and highly optimized mobile responsiveness.",
                fr: "Module de localisation multilingue et design entièrement responsive."
            }
        ],
        tech: ["JavaScript", "HTML5", "CSS3", "SQL", "Supabase", "Git"],
        category: "web",
        links: {
            code: "Code aus vertraulichen Gründen geschützt",
            codeType: "alert",
            preview: "https://sisterschola-test.netlify.app/",
            previewType: "link"
        }
    },
    {
        id: 7,
        date: "09/2025 – 09/2025",
        title: {
            de: "3D Snake Game – Three.js Spielwelt",
            en: "3D Snake Game – Three.js Virtual World",
            fr: "3D Snake Game – Monde Virtuel Three.js"
        },
        image: "bilder/prjkt7.png",
        description: {
            de: "Immersives 3D-Browserspiel auf Basis von Three.js mit dreidimensionaler Spielumgebung, Hindernissen und Soundeffekten.",
            en: "Immersive 3D browser game powered by Three.js with realistic 3D obstacles, natural surroundings, and customizable audio.",
            fr: "Jeu 3D immersif développé avec Three.js proposant un univers tridimensionnel avec obstacles et effets sonores."
        },
        bullets: [
            {
                de: "3D-Kameraführung, Kollisionserkennung und dynamische Beleuchtung.",
                en: "3D camera mechanics, custom collision detection, and dynamic lighting.",
                fr: "Contrôle de caméra 3D, détection de collisions et éclairage dynamique."
            }
        ],
        tech: ["JavaScript", "Three.js", "HTML5", "CSS3"],
        category: "web",
        links: {
            code: "https://github.com/Clintbr/Snake-Game",
            codeType: "link",
            preview: "https://clintbr.github.io/Snake-Game/",
            previewType: "link"
        }
    },
    {
        id: 8,
        date: "07/2025 – 09/2025",
        title: {
            de: "ClintChat – Web Messenger",
            en: "ClintChat – Web Messenger",
            fr: "ClintChat – Messagerie Web"
        },
        image: "bilder/prjkt8.png",
        description: {
            de: "Echtzeit-inspirierte Web-Chat-Anwendung im modernen Dark Mode Design mit lokaler Nachrichtenspeicherung.",
            en: "Modern instant messenger web application with dark-mode aesthetic and local storage persistence.",
            fr: "Application de messagerie instantanée avec thème sombre élégant et persistance locale des messages."
        },
        bullets: [
            {
                de: "Moderne Chat-Oberfläche im Messenger-Stil.",
                en: "Modern messaging UI with instant feedback.",
                fr: "Interface moderne inspirée des messageries actuelles."
            }
        ],
        tech: ["JavaScript", "HTML5", "CSS3", "LocalStorage"],
        category: "web",
        links: {
            code: "https://github.com/Clintbr/ClintChat",
            codeType: "link",
            preview: "https://clintbr.github.io/ClintChat/",
            previewType: "link"
        }
    },
    {
        id: 1,
        date: "03/2025 – 03/2025",
        title: {
            de: "X-Chef – Community Rezeptplattform",
            en: "X-Chef – Recipe Community Platform",
            fr: "X-Chef – Plateforme de Recettes"
        },
        image: "bilder/prjkt1.png",
        description: {
            de: "Webanwendung mit Java Vert.x Backend zur Verwaltung, Bewertung und Kommentierung von Kochrezepten.",
            en: "Web application featuring a Java Vert.x backend for recipe creation, ratings, and user comments.",
            fr: "Application web avec backend Java Vert.x pour la gestion, la notation et le partage de recettes."
        },
        bullets: [
            {
                de: "Vert.x Server mit asynchroner Event-Architektur und MariaDB Anbindung.",
                en: "Vert.x server with asynchronous event architecture and MariaDB connection.",
                fr: "Serveur Vert.x avec architecture événementielle asynchrone et MariaDB."
            },
            {
                de: "Sicherheitskonzepte mit Prepared Queries und Session-Management.",
                en: "Security precautions with prepared SQL queries and session protection.",
                fr: "Sécurité assurée par requêtes préparées et gestion des sessions."
            }
        ],
        tech: ["Java", "Vert.x", "MariaDB", "HTML5", "CSS3", "JavaScript"],
        category: "java web",
        links: {
            code: "https://github.com/Clintbr/X-Chef-Webseite",
            codeType: "link",
            preview: "bilder/vorschau1.png",
            previewType: "link"
        }
    },
    {
        id: 3,
        date: "11/2024 – 12/2024",
        title: {
            de: "Ampelsteuerung – Eingebettetes System",
            en: "Traffic Light Controller – Embedded System",
            fr: "Contrôle de Feux – Système Embarqué"
        },
        image: "bilder/prjkt3.jpg",
        description: {
            de: "Hardwarenahe Ampelsteuerungssimulation auf Basis von ESP32 Microcontrollern, C++ und Wokwi-Simulation.",
            en: "Hardware-level intersection traffic light controller simulated on ESP32 microcontrollers via C++ and Wokwi.",
            fr: "Contrôleur de carrefour simulant des feux de circulation sur microcontrôleur ESP32 avec C++ et Wokwi."
        },
        bullets: [
            {
                de: "Echtzeit-Zustandsautomaten für sichere Verkehrsphasen.",
                en: "Real-time state machines managing intersection safety cycles.",
                fr: "Automates à états en temps réel pour la sécurité des intersections."
            }
        ],
        tech: ["C", "C++", "NodeMCU ESP32", "PlatformIO", "HTTP", "JSON"],
        category: "embed",
        links: {
            code: "https://github.com/Clintbr/-Kreuzung-Ampeln",
            codeType: "link",
            preview: "demos/demo3.mp4",
            previewType: "video"
        }
    },
    {
        id: 4,
        date: "05/2025 – 08/2025",
        title: {
            de: "NINJA Virtual Machine – Bytecode Interpreter",
            en: "NINJA Virtual Machine – Bytecode Interpreter",
            fr: "Machine Virtuelle NINJA – Interpréteur Bytecode"
        },
        image: "bilder/prjkt4.jpg",
        description: {
            de: "Entwicklung einer Stack-basierten virtuellen Maschine in C inklusive eigenem Garbage Collector und Debugger.",
            en: "Development of a stack-based virtual machine in pure C including custom Garbage Collection and an interactive debugger.",
            fr: "Développement d'une machine virtuelle basée sur la pile en langage C avec ramasse-miettes et débogueur intégré."
        },
        bullets: [
            {
                de: "Speicherverwaltung mit Stop-and-Copy Garbage Collector und Heap-Verwaltung.",
                en: "Low-level memory management with heap allocation and garbage collection.",
                fr: "Gestion bas niveau de la mémoire avec ramasse-miettes et gestion du tas."
            }
        ],
        tech: ["C", "Linux", "GDB", "Memory Management"],
        category: "embed",
        links: {
            code: "https://github.com/Clintbr/Virtual-Machine",
            codeType: "link",
            preview: "Ausführung direkt im Terminal / CLI",
            previewType: "alert"
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

        const title = (project.title && project.title[currentLang]) || project.title.de;
        const description = (project.description && project.description[currentLang]) || project.description.de;

        let bulletsHTML = '';
        project.bullets.forEach(b => {
            const text = b[currentLang] || b.de;
            bulletsHTML += `<li><span class="material-symbols-outlined text-highlight bullet-icon">check_circle</span> <span>${text}</span></li>`;
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
            rightLink = `<a class="btn-primary right" href="${project.links.code}" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i> ${strings.code}</a>`;
        } else if (project.links.codeType === 'alert') {
            rightLink = `<a class="btn-primary right" href="#" onclick="alert('${project.links.code}'); return false;"><span class="material-symbols-outlined">lock</span> ${strings.code}</a>`;
        }

        let leftLink = '';
        if (project.links.previewType === 'link' && project.links.preview) {
            const isWebsite = project.category.includes('web') && !project.image.includes('vorschau') && !project.image.includes('prjkt10') && !project.image.includes('prjkt11');
            const label = isWebsite ? strings.website : strings.preview;
            const icon = isWebsite ? 'open_in_new' : 'visibility';
            leftLink = `<a class="btn-secondary left" href="${project.links.preview}" target="_blank" rel="noopener noreferrer"><span class="material-symbols-outlined">${icon}</span> ${label}</a>`;
        } else if (project.links.previewType === 'video') {
            leftLink = `<a class="btn-secondary left" data-video="${project.links.preview}" href="#"><span class="material-symbols-outlined">play_arrow</span> ${strings.preview}</a>`;
        } else if (project.links.previewType === 'alert') {
            leftLink = `<a class="btn-secondary left" href="#" onclick="alert('${project.links.preview}'); return false;"><span class="material-symbols-outlined">terminal</span> ${strings.preview}</a>`;
        }

        article.innerHTML = `
            <div class="project-image-wrapper">
                <img src="${project.image}" alt="${title}" loading="lazy">
                <div class="project-overlay"></div>
            </div>
            <div class="project-content">
                <h3>${title}</h3>
                <p class="project-date"><span class="material-symbols-outlined">calendar_today</span> ${project.date}</p>
                <div class="detail-project">
                    <p class="project-summary">${description}</p>
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
