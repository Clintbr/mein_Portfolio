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

        "hero.badge": "<span class=\"material-symbols-outlined\">rocket_launch</span> Verfügbarkeit: Ab sofort",
        "hero.greeting": "Hallo, ich bin ",
        "hero.name": "Clint Bryan Nguena",
        "hero.role": "Web-, Software- und KI-Entwickler (LLMs & Agentic AI)",
        "hero.school": "Informatikstudent an der THM (Erste 5 Semesterleistungen in 4 Semestern absolviert)",
        "hero.tagline": "Ich entwickle intelligente KI-Anwendungen, agentische Systeme und skalierbare Full-Stack-Softwarelösungen für messbaren Mehrwert.",
        "hero.cta": "<span class=\"material-symbols-outlined\">smart_toy</span> Featured AI Projekt",
        "hero.cta.cv": "<span class=\"material-symbols-outlined\">description</span> Lebenslauf ansehen",

        "research.badge": "<span class=\"material-symbols-outlined\">science</span> Aktuelle Forschung",
        "research.title": "Crosslinguale Retrieval-Augmented Generation (RAG)",
        "research.desc": "Implementierung, Analyse und empirischer Vergleich crosslingualer RAG-Strategien im Kontext lokal ausgeführter Large Language Models (LLMs) & Vektordatenbanken.",

        "section.featured.ai.title": "<span class=\"material-symbols-outlined text-highlight\">auto_awesome</span> Featured AI Project",
        "section.featured.ai.badge": "KI & Full-Stack Flaggschiff",
        "section.featured.ai.name": "AI Mail Manager",
        "section.featured.ai.subtitle": "Intelligente E-Mail-Analyse & Human-in-the-Loop Workflow mit Google Gemini",
        "section.featured.ai.desc": "Eine hochmoderne Full-Stack KI-Anwendung zur automatischen Analyse, Sentiment-Erkennung, Priorisierung und Entwurfserstellung von E-Mails. Ausgestattet mit der Gmail API, OAuth 2.0 Authentifizierung, Google Gemini Integration und einem durchdachten Human-in-the-Loop Mechanismus zur Prüfung generierter Antworten vor dem Versand.",
        "section.featured.ai.feature1": "KI-gestützte Sentiment- & Prioritätsanalyse in Echtzeit",
        "section.featured.ai.feature2": "Human-in-the-Loop: Transparente Kontrolle generierter Antworten",
        "section.featured.ai.feature3": "Java 21, Spring Boot 3 REST API & React / TypeScript UI",
        "section.featured.ai.live": "<span class=\"material-symbols-outlined\">play_circle</span> Live Demo testen",
        "section.featured.ai.code": "<i class=\"fab fa-github\"></i> GitHub Repository",

        "section.featured.rag.title": "<span class=\"material-symbols-outlined text-highlight\">auto_awesome</span> Featured AI Research",
        "section.featured.rag.name": "Crosslingual RAG Research",
        "section.featured.rag.subtitle": "Lokale RAG-Pipeline für mehrsprachige Wissenssuche",
        "section.featured.rag.desc": "Entwicklung und Evaluation einer sprachübergreifenden Retrieval-Augmented-Generation-Pipeline ohne Cloud-APIs mit lokal ausgeführten LLMs via Ollama, Qdrant Vektordatenbank, BGE-M3 Embeddings und DeepEval Qualitätsmetriken.",

        "section.featured.title": "<span class=\"material-symbols-outlined text-highlight\">auto_awesome</span> Featured Full-Stack System",
        "section.featured.subtitle": "Enterprise Ticket Management System mit RBAC & PostgreSQL",
        "section.featured.desc": "Vollständiges webbasiertes Ticket-Management-System mit rollenbasierter Benutzerverwaltung (USER, SUPPORT, ADMIN), REST-API, JWT-Sicherheit und integriertem KI-Chatbot für Supportautomatisierung.",
        "section.featured.cta": "Alle Projekte ansehen",
        "section.featured.pdf": "Benutzerhandbuch",

        "section.featured.cv": "<span class=\"material-symbols-outlined text-highlight\">auto_awesome</span> Featured CV",
        "section.featured.cv.title": "Mein Lebenslauf:",
        "section.featured.cv.subtitle": "Der vollständige Überblick über Ausbildung, Skills & Erfahrung",
        "section.featured.cv.pdf": "<span class=\"material-symbols-outlined\">description</span> Lebenslauf ansehen (PDF)",

        "pdf.page": "Seite",

        "section.skills.title": "Technische Expertise",
        "skills.cat.ai": "KI & LLMs",
        "skills.cat.backend": "Software & Backend",
        "skills.cat.frontend": "Web & Frontend",
        "skills.cat.tools": "Datenbanken & DevOps",

        "section.core.title": "Kern-Kompetenzen",
        "section.core.1": "Analytisches Denken & Systemarchitektur",
        "section.core.2": "Hohe Auffassungsgabe & Eigeninitiative",
        "section.core.3": "Strukturierte & lösungsorientierte Arbeitsweise",
        "section.core.4": "Agile Teamarbeit (Scrum, Git-Workflows)",

        "section.hobbies.title": "Interessen & Fokus",
        "section.hobbies.1": "Agentic AI & LLM-Forschung",
        "section.hobbies.2": "Web- & Software-Architektur",
        "section.hobbies.3": "Fußball & Fitness",

        "section.langs.title": "Sprachen",
        "section.langs.cta": "Sprachkompetenzen",
        "lang.fr": "Französisch",
        "lang.de": "Deutsch",
        "lang.en": "Englisch",
        "lang.level.native": "Muttersprache (C2)",
        "lang.level.c1": "Fließend (telc C1 Hochschule)",
        "lang.level.b2": "Verhandlungssicher (B2)",

        "cta.title": "Haben Sie ein spannendes Projekt oder eine Stelle zu besetzen?",
        "cta.desc": "Lassen Sie uns unverbindlich über mögliche Kooperationen, Werkstudententätigkeiten oder Einstiegsmöglichkeiten sprechen.",
        "cta.btn": "Kontakt aufnehmen",
        "footer.rights": "© " + thisYear + " Clint Bryan Nguena | Alle Rechte vorbehalten",

        "projects.title": "Ausgewählte Projekte",
        "projects.desc": "Eine kuratierte Übersicht meiner wichtigsten Projekte in den Bereichen Künstliche Intelligenz, Full-Stack-Softwareentwicklung, Webanwendungen und Embedded Systems.",
        "projects.btn": "Zu Projekten",
        "projects.filter.all": "Alle",
        "projects.filter.ai": "KI & LLMs",
        "projects.filter.fullstack": "Full-Stack",
        "projects.filter.web": "Web",
        "projects.filter.java": "Java / Spring",
        "projects.filter.embed": "Embedded / VM",
        "projects.code": "Zum Code",
        "projects.preview": "Live Demo",
        "projects.website": "Zur Website",

        "avatar.home": "Hallo! Willkommen auf meinem Portfolio! Entdecken Sie meine KI- und Softwareprojekte.",
        "avatar.projects": "Jedes Projekt zeigt meine Leidenschaft für sauberen Code und innovative KI.",
        "avatar.about": "„Software- und KI-Entwicklung verbinden logische Struktur mit grenzenloser Kreativität.“",
        "avatar.contact": "Ich freue mich über Ihre Kontaktaufnahme für neue Herausforderungen.",

        "about.title": "Über mich & Meine Mission",
        "about.p1": "Als <b>Web-, Software- und KI-Entwickler</b> verbinde ich fundierte Informatik-Grundlagen mit modernen Technologien rund um <b>Large Language Models (LLMs)</b>, <b>Retrieval-Augmented Generation (RAG)</b> und <b>skalierbare Full-Stack-Architekturen</b>.",
        "about.p2": "Mein Studium an der THM habe ich durch hohe Zielstrebigkeit beschleunigt (<i>erste 5 Semesterleistungen in 4 Semestern abgeschlossen</i>). Mein Antrieb ist es, komplexe Problemstellungen in produktionsreife, performante und benutzerfreundliche Softwaresysteme zu transformieren.",
        "about.btn": "Mehr erfahren",

        "exp.title": "Berufserfahrung & Praxis",
        "exp.1.date": "03/2026 – 06/2026",
        "exp.1.role": "KI-Analyse | Praktikum II-THM, Gießen",
        "exp.1.desc": "Analyse lokal gehosteter LLMs und SLMs sowie Konzeption und Integration von RAG-Ansätzen. Aufbau strukturierter Datenpipelines mit Qdrant Vektordatenbank, MongoDB, Ollama und Node-RED.",
        "exp.2.date": "02/2025 – 03/2026",
        "exp.2.role": "Webentwickler | SisterSchola Klinik, Darmstadt",
        "exp.2.desc": "Entwicklung und Betreuung webbasierter Anwendungen, Einrichtung von SMTP-Mailservices, Datenbankanbindung mit Supabase/SQL sowie umfassendes Software-Testing und Debugging.",

        "edu.title": "Ausbildung",
        "edu.1.date": "04/2024 – heute",
        "edu.1.title": "Bachelor of Science Informatik",
        "edu.1.sub": "Technische Hochschule Mittelhessen (THM), Gießen",
        "edu.1.desc": "Schwerpunkte: Softwareentwicklung, IT-Systeme, Webtechnologien & KI. Aktuell im 5. Fachsemester (erste fünf Semesterleistungen in vier Semestern erfolgreich abgeschlossen).",
        "edu.2.date": "10/2022 – 11/2023",
        "edu.2.title": "Deutschkurse & Sprachzertifikate",
        "edu.2.sub": "Goethe-Institut & Diwan Marburg",
        "edu.2.desc": "Erfolgreich abgeschlossen mit B2-Zertifikat und C1 telc Hochschule.",
        "edu.3.date": "09/2019 – 06/2022",
        "edu.3.title": "Wissenschaftliches Abitur",
        "edu.3.sub": "Gymnasium",
        "edu.3.desc": "Abitur mit vertieftem Schwerpunkt in Mathematik und Informatik.",

        "cert.title": "Zertifikate & Weiterbildung",

        "contact.title.reach": "Direkter Kontakt",
        "contact.github": "GitHub Profil",
        "contact.gitlab": "GitLab Profil",
        "contact.linkedin": "LinkedIn Profil",
        "contact.title.form": "Nachricht senden",
        "contact.form.name": "Ihr Name",
        "contact.form.email": "Ihre E-Mail-Adresse",
        "contact.form.message": "Ihre Nachricht",
        "contact.form.submit": "Nachricht absenden",
        "contact.title.map": "Standort (Gießen, Hessen)",

        "stats.projects": "Entwickelte Projekte",
        "stats.langs": "Programmiersprachen (Java, Python, TS, JS, C)",
        "stats.fast": "5 Semester in 4 absolviert",
        "stats.focus": "KI, RAG & Full-Stack Fokus"
    },
    en: {
        "nav.home": "Home",
        "nav.about": "About Me",
        "nav.projects": "Projects",
        "nav.contact": "Contact",

        "hero.badge": "<span class=\"material-symbols-outlined\">rocket_launch</span> Availability: Immediate",
        "hero.greeting": "Hello, I am ",
        "hero.name": "Clint Bryan Nguena",
        "hero.role": "Web, Software & AI Engineer (LLMs & Agentic AI)",
        "hero.school": "Computer Science Student at THM (Completed first 5 semesters in 4 semesters)",
        "hero.tagline": "I engineer intelligent AI applications, agentic systems, and scalable full-stack software that deliver measurable impact.",
        "hero.cta": "<span class=\"material-symbols-outlined\">smart_toy</span> Featured AI Project",
        "hero.cta.cv": "<span class=\"material-symbols-outlined\">description</span> View Resume",

        "research.badge": "<span class=\"material-symbols-outlined\">science</span> Current Research",
        "research.title": "Crosslingual Retrieval-Augmented Generation (RAG)",
        "research.desc": "Implementation, analysis, and empirical benchmarking of cross-lingual RAG strategies in the context of locally hosted Large Language Models (LLMs) & vector databases.",

        "section.featured.ai.title": "<span class=\"material-symbols-outlined text-highlight\">auto_awesome</span> Featured AI Project",
        "section.featured.ai.badge": "AI & Full-Stack Flagship",
        "section.featured.ai.name": "AI Mail Manager",
        "section.featured.ai.subtitle": "Intelligent Email Intelligence & Human-in-the-Loop Workflow with Google Gemini",
        "section.featured.ai.desc": "A cutting-edge full-stack AI application for automated email categorization, sentiment analysis, prioritization, and reply draft generation. Powered by Gmail API, OAuth 2.0, Google Gemini LLM, and a human-in-the-loop review safeguard.",
        "section.featured.ai.feature1": "Real-time AI-powered sentiment & priority classification",
        "section.featured.ai.feature2": "Human-in-the-Loop: Review and edit AI drafts before sending",
        "section.featured.ai.feature3": "Java 21, Spring Boot 3 REST API & React / TypeScript UI",
        "section.featured.ai.live": "<span class=\"material-symbols-outlined\">play_circle</span> Try Live Demo",
        "section.featured.ai.code": "<i class=\"fab fa-github\"></i> GitHub Repository",

        "section.featured.rag.title": "<span class=\"material-symbols-outlined text-highlight\">auto_awesome</span> Featured AI Research",
        "section.featured.rag.name": "Crosslingual RAG Research",
        "section.featured.rag.subtitle": "Local RAG Pipeline for Multilingual Knowledge Retrieval",
        "section.featured.rag.desc": "Designed and evaluated a cross-lingual RAG pipeline without external cloud APIs using locally hosted LLMs via Ollama, Qdrant vector database, BGE-M3 embeddings, and DeepEval metric benchmarks.",

        "section.featured.title": "<span class=\"material-symbols-outlined text-highlight\">auto_awesome</span> Featured Full-Stack System",
        "section.featured.subtitle": "Enterprise Ticket Management System with RBAC & PostgreSQL",
        "section.featured.desc": "Comprehensive web-based ticket management system featuring role-based access control (USER, SUPPORT, ADMIN), RESTful API architecture, JWT security, and integrated AI chatbot capabilities.",
        "section.featured.cta": "View All Projects",
        "section.featured.pdf": "User Guide",

        "section.featured.cv": "<span class=\"material-symbols-outlined text-highlight\">auto_awesome</span> Featured CV",
        "section.featured.cv.title": "My Curriculum Vitae:",
        "section.featured.cv.subtitle": "Full overview of education, technical stack, and experience",
        "section.featured.cv.pdf": "<span class=\"material-symbols-outlined\">description</span> View CV (PDF)",

        "pdf.page": "Page",

        "section.skills.title": "Technical Expertise",
        "skills.cat.ai": "AI & LLMs",
        "skills.cat.backend": "Software & Backend",
        "skills.cat.frontend": "Web & Frontend",
        "skills.cat.tools": "Databases & DevOps",

        "section.core.title": "Core Competencies",
        "section.core.1": "Analytical Thinking & System Architecture",
        "section.core.2": "Fast Learner & Strong Initiative",
        "section.core.3": "Structured & Solution-Oriented Execution",
        "section.core.4": "Agile Teamwork (Scrum, Git Workflows)",

        "section.hobbies.title": "Interests & Focus",
        "section.hobbies.1": "Agentic AI & LLM Research",
        "section.hobbies.2": "Web & Software Architecture",
        "section.hobbies.3": "Football & Fitness",

        "section.langs.title": "Languages",
        "section.langs.cta": "Language Proficiencies",
        "lang.fr": "French",
        "lang.de": "German",
        "lang.en": "English",
        "lang.level.native": "Native Language (C2)",
        "lang.level.c1": "Fluent (telc C1 Hochschule)",
        "lang.level.b2": "Professional Working (B2)",

        "cta.title": "Looking for a driven Web, Software & AI Engineer?",
        "cta.desc": "Feel free to reach out for project collaborations, working student roles, or full-time opportunities.",
        "cta.btn": "Get in Touch",
        "footer.rights": "© " + thisYear + " Clint Bryan Nguena | All rights reserved",

        "projects.title": "Featured Projects",
        "projects.desc": "A curated showcase of key projects spanning Artificial Intelligence, Full-Stack software engineering, Web applications, and Embedded systems.",
        "projects.btn": "To Projects",
        "projects.filter.all": "All",
        "projects.filter.ai": "AI & LLMs",
        "projects.filter.fullstack": "Full-Stack",
        "projects.filter.web": "Web",
        "projects.filter.java": "Java / Spring",
        "projects.filter.embed": "Embedded / VM",
        "projects.code": "View Code",
        "projects.preview": "Live Demo",
        "projects.website": "Visit Site",

        "avatar.home": "Hello! Welcome to my portfolio! Explore my AI and software projects.",
        "avatar.projects": "Each project demonstrates my passion for clean code and innovative AI.",
        "avatar.about": "\"Software & AI development blends rigorous logic with unlimited creativity.\"",
        "avatar.contact": "I look forward to discussing new engineering opportunities.",

        "about.title": "About Me & My Vision",
        "about.p1": "As a <b>Web, Software & AI Engineer</b>, I unite rigorous Computer Science fundamentals with cutting-edge advancements in <b>Large Language Models (LLMs)</b>, <b>Retrieval-Augmented Generation (RAG)</b>, and <b>scalable Full-Stack architectures</b>.",
        "about.p2": "I accelerated my Bachelor studies at THM (<i>completed first 5 semesters of coursework in just 4 semesters</i>). My mission is to translate complex technical problems into production-grade, performant, and intuitive digital solutions.",
        "about.btn": "Learn More",

        "exp.title": "Work Experience & Practice",
        "exp.1.date": "03/2026 – 06/2026",
        "exp.1.role": "AI Analysis | Internship II-THM, Gießen",
        "exp.1.desc": "Analyzed locally hosted LLMs and SLMs, integrated RAG architectures, and built data pipelines with Qdrant vector database, MongoDB, Ollama, and Node-RED.",
        "exp.2.date": "02/2025 – 03/2026",
        "exp.2.role": "Web Developer | SisterSchola Clinic, Darmstadt",
        "exp.2.desc": "Developed and maintained web applications, implemented SMTP email services, integrated Supabase/SQL databases, and performed comprehensive software testing and debugging.",

        "edu.title": "Education",
        "edu.1.date": "04/2024 – Present",
        "edu.1.title": "Bachelor of Science in Computer Science",
        "edu.1.sub": "Technische Hochschule Mittelhessen (THM), Gießen",
        "edu.1.desc": "Focus: Software Engineering, IT Systems, Web Technologies & AI. Currently in 5th semester (completed first 5 semesters' requirements in 4 semesters).",
        "edu.2.date": "10/2022 – 11/2023",
        "edu.2.title": "German Language Courses & Certifications",
        "edu.2.sub": "Goethe-Institut & Diwan Marburg",
        "edu.2.desc": "Successfully certified with B2 Certificate and C1 telc Hochschule.",
        "edu.3.date": "09/2019 – 06/2022",
        "edu.3.title": "Scientific High School Diploma (Abitur)",
        "edu.3.sub": "High School",
        "edu.3.desc": "Graduated with advanced specialization in Mathematics & Computer Science.",

        "cert.title": "Certificates & Continuous Learning",

        "contact.title.reach": "Direct Contact",
        "contact.github": "GitHub Profile",
        "contact.gitlab": "GitLab Profile",
        "contact.linkedin": "LinkedIn Profile",
        "contact.title.form": "Send a Message",
        "contact.form.name": "Your Name",
        "contact.form.email": "Your Email Address",
        "contact.form.message": "Your Message",
        "contact.form.submit": "Submit Message",
        "contact.title.map": "Location (Gießen, Hesse, Germany)",

        "stats.projects": "Engineered Projects",
        "stats.langs": "Core Languages (Java, Python, TS, JS, C)",
        "stats.fast": "5 Semesters Done in 4",
        "stats.focus": "AI, RAG & Full-Stack Focus"
    },
    fr: {
        "nav.home": "Accueil",
        "nav.about": "À propos",
        "nav.projects": "Projets",
        "nav.contact": "Contact",

        "hero.badge": "<span class=\"material-symbols-outlined\">rocket_launch</span> Disponibilité : Immédiate",
        "hero.greeting": "Bonjour, je suis ",
        "hero.name": "Clint Bryan Nguena",
        "hero.role": "Développeur Web, Logiciel & IA (LLMs & IA Agentique)",
        "hero.school": "Étudiant en Informatique à la THM (5 premiers semestres validés en 4 semestres)",
        "hero.tagline": "Je conçois des applications IA intelligentes, des systèmes agentiques et des solutions logicielles full-stack hautement performantes.",
        "hero.cta": "<span class=\"material-symbols-outlined\">smart_toy</span> Projet IA Vedette",
        "hero.cta.cv": "<span class=\"material-symbols-outlined\">description</span> Voir le CV",

        "research.badge": "<span class=\"material-symbols-outlined\">science</span> Recherche Actuelle",
        "research.title": "Génération Augmentée par Récupération (RAG) Multilingue",
        "research.desc": "Implémentation, analyse et comparaison empirique de stratégies RAG multilingues dans le contexte de modèles de langage (LLMs) exécutés localement et de bases de données vectorielles.",

        "section.featured.ai.title": "<span class=\"material-symbols-outlined text-highlight\">auto_awesome</span> Projet IA Vedette",
        "section.featured.ai.badge": "IA & Full-Stack Phare",
        "section.featured.ai.name": "AI Mail Manager",
        "section.featured.ai.subtitle": "Analyse intelligente des e-mails & Workflow Human-in-the-Loop avec Google Gemini",
        "section.featured.ai.desc": "Une application full-stack moderne utilisant l'IA pour la classification automatique, l'analyse de sentiment, la priorisation et la rédaction assistée d'e-mails via l'API Gmail, OAuth 2.0 et Google Gemini, avec validation humaine préalable.",
        "section.featured.ai.feature1": "Classification et analyse de sentiment en temps réel par IA",
        "section.featured.ai.feature2": "Human-in-the-Loop : Contrôle et modification avant tout envoi",
        "section.featured.ai.feature3": "API REST Java 21 / Spring Boot 3 & UI React / TypeScript",
        "section.featured.ai.live": "<span class=\"material-symbols-outlined\">play_circle</span> Essayer la Démo Live",
        "section.featured.ai.code": "<i class=\"fab fa-github\"></i> Dépôt GitHub",

        "section.featured.rag.title": "<span class=\"material-symbols-outlined text-highlight\">auto_awesome</span> Recherche IA Vedette",
        "section.featured.rag.name": "Crosslingual RAG Research",
        "section.featured.rag.subtitle": "Pipeline RAG local pour recherche documentaire multilingue",
        "section.featured.rag.desc": "Conception et évaluation d'un pipeline RAG crosslingue sans API cloud externe à l'aide de LLMs locaux via Ollama, base de données vectorielle Qdrant, embeddings BGE-M3 et métriques DeepEval.",

        "section.featured.title": "<span class=\"material-symbols-outlined text-highlight\">auto_awesome</span> Système Full-Stack Vedette",
        "section.featured.subtitle": "Système de Gestion de Tickets d'Entreprise avec RBAC & PostgreSQL",
        "section.featured.desc": "Plateforme web complète de gestion de tickets avec contrôle d'accès basé sur les rôles (USER, SUPPORT, ADMIN), architecture RESTful, sécurité JWT et chatbot IA intégré pour l'assistance.",
        "section.featured.cta": "Voir tous les projets",
        "section.featured.pdf": "Guide Utilisateur",

        "section.featured.cv": "<span class=\"material-symbols-outlined text-highlight\">auto_awesome</span> CV Vitrine",
        "section.featured.cv.title": "Mon Curriculum Vitae :",
        "section.featured.cv.subtitle": "Synthèse exhaustive de mon parcours, compétences et réalisations",
        "section.featured.cv.pdf": "<span class=\"material-symbols-outlined\">description</span> Consulter le CV (PDF)",

        "pdf.page": "Page",

        "section.skills.title": "Expertise Technique",
        "skills.cat.ai": "IA & LLMs",
        "skills.cat.backend": "Logiciel & Backend",
        "skills.cat.frontend": "Web & Frontend",
        "skills.cat.tools": "Bases de données & DevOps",

        "section.core.title": "Compétences Clés",
        "section.core.1": "Pensée analytique & Architecture logicielle",
        "section.core.2": "Apprentissage rapide & Esprit d'initiative",
        "section.core.3": "Rigueur méthodologique & Orientation solutions",
        "section.core.4": "Travail d'équipe agile (Scrum, Git)",

        "section.hobbies.title": "Centres d'intérêt",
        "section.hobbies.1": "IA Agentique & Recherche LLM",
        "section.hobbies.2": "Architecture Web & Logicielle",
        "section.hobbies.3": "Football & Fitness",

        "section.langs.title": "Langues",
        "section.langs.cta": "Compétences linguistiques",
        "lang.fr": "Français",
        "lang.de": "Allemand",
        "lang.en": "Anglais",
        "lang.level.native": "Langue Maternelle (C2)",
        "lang.level.c1": "Courant (telc C1 Hochschule)",
        "lang.level.b2": "Professionnel (B2)",

        "cta.title": "Vous recherchez un développeur Web, Logiciel & IA passionné ?",
        "cta.desc": "Échangeons sur vos opportunités de collaboration, projets d'ingénierie ou postes d'étudiant salarié.",
        "cta.btn": "Me Contacter",
        "footer.rights": "© " + thisYear + " Clint Bryan Nguena | Tous droits réservés",

        "projects.title": "Projets Réalisés",
        "projects.desc": "Une sélection de mes réalisations majeures en Intelligence Artificielle, ingénierie logicielle Full-Stack, développement Web et systèmes embarqués.",
        "projects.btn": "Vers les projets",
        "projects.filter.all": "Tous",
        "projects.filter.ai": "IA & LLMs",
        "projects.filter.fullstack": "Full-Stack",
        "projects.filter.web": "Web",
        "projects.filter.java": "Java / Spring",
        "projects.filter.embed": "Embarqué / VM",
        "projects.code": "Voir le Code",
        "projects.preview": "Démo Live",
        "projects.website": "Visiter le site",

        "avatar.home": "Bonjour ! Bienvenue sur mon portfolio ! Découvrez mes réalisations en IA et génie logiciel.",
        "avatar.projects": "Chaque projet illustre ma passion pour le code propre et l'IA innovante.",
        "avatar.about": "« Le développement logiciel et l'IA allient logique mathématique et créativité sans limite. »",
        "avatar.contact": "Au plaisir d'échanger avec vous sur vos prochains défis techniques.",

        "about.title": "À Propos & Ma Vision",
        "about.p1": "En tant que <b>développeur Web, Logiciel & IA</b>, j'associe des bases solides en informatique fondamentale aux avancées concrètes des <b>modèles de langage (LLMs)</b>, de la <b>génération augmentée par récupération (RAG)</b> et des <b>architectures Full-Stack scalables</b>.",
        "about.p2": "J'ai validé mon cursus à la THM avec une grande efficacité (<i>les 5 premiers semestres validés en seulement 4 semestres</i>). Mon ambition est de transformer des défis complexes en systèmes logiciels fiables, performants et intuitifs.",
        "about.btn": "En savoir plus",

        "exp.title": "Expérience Professionnelle",
        "exp.1.date": "03/2026 – 06/2026",
        "exp.1.role": "Analyse IA | Stage II-THM, Gießen",
        "exp.1.desc": "Analyse de LLMs et SLMs hébergés localement, conception et intégration d'approches RAG. Mise en place de flux de données structurés avec Qdrant, MongoDB, Ollama et Node-RED.",
        "exp.2.date": "02/2025 – 03/2026",
        "exp.2.role": "Développeur Web | Clinique SisterSchola, Darmstadt",
        "exp.2.desc": "Développement et maintenance d'applications web, intégration de services SMTP, liaison base de données Supabase/SQL et tests logiciels complets.",

        "edu.title": "Formation & Diplômes",
        "edu.1.date": "04/2024 – Présent",
        "edu.1.title": "Bachelor of Science en Informatique",
        "edu.1.sub": "Technische Hochschule Mittelhessen (THM), Gießen",
        "edu.1.desc": "Spécialités : Génie logiciel, Systèmes informatiques, Technologies Web & IA. Actuellement au 5ème semestre (5 semestres validés en 4).",
        "edu.2.date": "10/2022 – 11/2023",
        "edu.2.title": "Cours de langue & Certifications",
        "edu.2.sub": "Goethe-Institut & Diwan Marburg",
        "edu.2.desc": "Validé avec certificat B2 et niveau C1 telc Hochschule.",
        "edu.3.date": "09/2019 – 06/2022",
        "edu.3.title": "Baccalauréat Scientifique",
        "edu.3.sub": "Lycée",
        "edu.3.desc": "Baccalauréat avec spécialité Mathématiques et Informatique.",

        "cert.title": "Certifications & Perfectionnement",

        "contact.title.reach": "Coordonnées Directes",
        "contact.github": "Profil GitHub",
        "contact.gitlab": "Profil GitLab",
        "contact.linkedin": "Profil LinkedIn",
        "contact.title.form": "Envoyer un message",
        "contact.form.name": "Votre nom",
        "contact.form.email": "Votre adresse e-mail",
        "contact.form.message": "Votre message",
        "contact.form.submit": "Envoyer le message",
        "contact.title.map": "Localisation (Gießen, Hesse, Allemagne)",

        "stats.projects": "Projets Conçus",
        "stats.langs": "Langages Maîtrisés (Java, Python, TS, JS, C)",
        "stats.fast": "5 Semestres en 4",
        "stats.focus": "Spécialisation IA & Full-Stack"
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
        if (translations[currentLang] && translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key]; // innerHTML to support span/b tags
        }
    });

    const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
    placeholders.forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[currentLang] && translations[currentLang][key]) {
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
    return (translations[currentLang] && translations[currentLang][key]) || key;
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
