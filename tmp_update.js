const fs = require('fs');
const file = 'c:\\Clint\\personal-Projekt\\mein_Portfolio\\data\\projects.js';
let content = fs.readFileSync(file, 'utf8');

// Update JSDoc
content = content.replace(/(@property \{number\} id[^\n]*\n)/, '$1 * @property {string} date - Project duration interval\n');

// Add date to each project object
let idToDate = {
    0: "10/2025 - 01/2026",
    1: "03/2024 - 03/2024",
    2: "10/2023 - 03/2024",
    3: "05/2023 - 06/2023",
    4: "11/2023 - 01/2024",
    5: "01/2024 - 03/2024",
    6: "08/2024 - 09/2024",
    7: "11/2024 - 12/2024",
    8: "12/2024 - 01/2025",
    9: "02/2025 - 03/2025",
    10: "10/2024 - 02/2025",
    11: "03/2025 - 06/2025",
    12: "01/2025 - 04/2025",
    13: "02/2025 - 03/2025"
};

content = content.replace(/(id:\s*(\d+),)(\s+title:)/g, (match, p1, p2, p3) => {
    let dateStr = idToDate[p2] || "03/2025 - 04/2025";
    return `${p1}\n        date: "${dateStr}",${p3}`;
});

// Update renderProjects HTML
content = content.replace(/(\s*<h3>\$\{title\}<\/h3>\s*)(<div class="detail-project">)/,
    '$1<p class="project-date"><i class="far fa-calendar-alt"></i> ${project.date}</p>\n                $2');

fs.writeFileSync(file, content);
console.log('File updated successfully.');
