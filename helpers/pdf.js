let pdfDoc = null;
let currentPage = 1;

async function openPdfModal(pdfName) {

    document
        .getElementById("pdfModal")
        .classList
        .add("show");

    pdfDoc = await pdfjsLib
        .getDocument(`pdfs/${pdfName}`)
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

    await page.render({
        canvasContext: ctx,
        viewport: viewport
    }).promise;

    document.getElementById("pageInfo").textContent =
        `Seite ${pageNumber} / ${pdfDoc.numPages}`;
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