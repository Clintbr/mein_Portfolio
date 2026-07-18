let pdfDoc = null;
let currentPage = 1;

async function openPdfModal(pdfName) {
    let currentLang = localStorage.getItem('portfolio_lang') || 'de';
    document
        .getElementById("pdfModal")
        .classList
        .add("show");

    pdfDoc = await pdfjsLib
        .getDocument(`pdfs/${currentLang}/${pdfName}`)
        .promise;

    currentPage = 1;

    renderPage(currentPage);
}

function closePdfModal() {

    document
        .getElementById("pdfModal")
        .classList
        .remove("show");

    pdfDoc = null;
}

async function renderPage(pageNumber) {

    const page = await pdfDoc.getPage(pageNumber);

    const canvas = document.getElementById("pdfCanvas");
    const ctx = canvas.getContext("2d");

    const viewport = page.getViewport({
        scale: 1.5
    });

    canvas.width = viewport.width;
    canvas.height = viewport.height;

    const annotationLayer = document.getElementById("annotationLayer");

    annotationLayer.innerHTML = "";

    await page.render({
        canvasContext: ctx,
        viewport: viewport
    }).promise;

    annotationLayer.style.width = `${viewport.width}px`;
    annotationLayer.style.height = `${viewport.height}px`;

    const annotations = await page.getAnnotations();

    for (const annotation of annotations) {

        if (!annotation.url) continue;

        const rect = viewport.convertToViewportRectangle(
            annotation.rect
        );

        const left = Math.min(rect[0], rect[2]);
        const top = Math.min(rect[1], rect[3]);
        const width = Math.abs(rect[0] - rect[2]);
        const height = Math.abs(rect[1] - rect[3]);

        const link = document.createElement("a");

        link.href = annotation.url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";

        link.style.position = "absolute";
        link.style.left = `${left}px`;
        link.style.top = `${top}px`;
        link.style.width = `${width}px`;
        link.style.height = `${height}px`;

        annotationLayer.appendChild(link);
    }

    document.getElementById("pageInfoNumber").textContent =
        `${pageNumber} / ${pdfDoc.numPages}`;
}

function nextPage() {

    if (!pdfDoc) return;

    if (currentPage < pdfDoc.numPages) {
        currentPage++;
        renderPage(currentPage);
    }
}

function prevPage() {

    if (!pdfDoc) return;

    if (currentPage > 1) {
        currentPage--;
        renderPage(currentPage);
    }
}

document
    .getElementById("pdfModal")
    .addEventListener("click", (e) => {

        if (e.target.id === "pdfModal") {
            closePdfModal();
        }
    });