/* ==========================================================
   PDF Viewer Helper  –  pdf.js 3.11.174
   Strategy:
     1. Try XHR (works on http:// and Firefox file://)
     2. If XHR fails, fall back to <iframe> (works on Chrome file://)
   ========================================================== */

if (typeof pdfjsLib !== 'undefined') {
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'helpers/pdf.worker.min.js';
}

// ---- State ----
let pdfDoc      = null;
let currentPage = 1;
let isRendering = false;

// ---- Open modal ----
async function openPdfModal(pdfName) {
    const currentLang = localStorage.getItem('portfolio_lang') || 'de';
    const modal       = document.getElementById('pdfModal');
    if (!modal) return;

    // Reset any previous iframe
    _hideIframe();
    document.getElementById('pdfCanvas').style.display = 'block';

    modal.classList.add('show');
    _showPdfStatus('Lädt…');

    const pdfUrl = 'pdfs/' + currentLang + '/' + pdfName;
    console.log('[pdf.js] Loading:', pdfUrl);

    try {
        // Strategy 1: XHR → ArrayBuffer (http:// and Firefox file://)
        const data  = await _fetchBytes(pdfUrl);
        pdfDoc      = await pdfjsLib.getDocument({ data }).promise;
        currentPage = 1;
        _clearPdfStatus();
        await renderPage(currentPage);
    } catch (err) {
        console.warn('[pdf.js] XHR/render failed, trying iframe fallback:', err.message);
        // Strategy 2: iframe fallback (Chrome file://)
        _showIframe(pdfUrl);
    }
}

// ---- Close modal ----
function closePdfModal() {
    const modal = document.getElementById('pdfModal');
    if (modal) modal.classList.remove('show');
    _hideIframe();
    pdfDoc = null;
}

// ---- Render page ----
async function renderPage(pageNumber) {
    if (!pdfDoc || isRendering) return;
    isRendering = true;
    try {
        const page   = await pdfDoc.getPage(pageNumber);
        const canvas = document.getElementById('pdfCanvas');
        const ctx    = canvas.getContext('2d');

        const viewer      = canvas.closest('.pdf-viewer') || canvas.parentElement;
        const maxW        = viewer ? viewer.clientWidth - 48 : 800;
        const raw         = page.getViewport({ scale: 1 });
        const scale       = Math.min(1.6, maxW / raw.width);
        const viewport    = page.getViewport({ scale });

        canvas.width  = viewport.width;
        canvas.height = viewport.height;
        await page.render({ canvasContext: ctx, viewport }).promise;

        const annLayer = document.getElementById('annotationLayer');
        annLayer.innerHTML = '';
        annLayer.style.width  = viewport.width  + 'px';
        annLayer.style.height = viewport.height + 'px';

        const annotations = await page.getAnnotations();
        for (const ann of annotations) {
            if (!ann.url) continue;
            const r    = viewport.convertToViewportRectangle(ann.rect);
            const a    = document.createElement('a');
            a.href     = ann.url;
            a.target   = '_blank';
            a.rel      = 'noopener noreferrer';
            a.style.cssText =
                'position:absolute;left:' + Math.min(r[0],r[2]) + 'px;' +
                'top:' + Math.min(r[1],r[3]) + 'px;' +
                'width:' + Math.abs(r[0]-r[2]) + 'px;' +
                'height:' + Math.abs(r[1]-r[3]) + 'px;';
            annLayer.appendChild(a);
        }

        document.getElementById('pageInfoNumber').textContent =
            pageNumber + ' / ' + pdfDoc.numPages;

    } catch (err) {
        console.error('[pdf.js] renderPage failed:', err);
    } finally {
        isRendering = false;
    }
}

function nextPage() {
    if (!pdfDoc || currentPage >= pdfDoc.numPages) return;
    renderPage(++currentPage);
}

function prevPage() {
    if (!pdfDoc || currentPage <= 1) return;
    renderPage(--currentPage);
}

// ---- XHR loader (file:// Firefox + all http://) ----
function _fetchBytes(url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'arraybuffer';
        xhr.onload = function () {
            if ((xhr.status === 200 || xhr.status === 0) && xhr.response && xhr.response.byteLength > 0) {
                resolve(xhr.response);
            } else {
                reject(new Error('XHR status ' + xhr.status));
            }
        };
        xhr.onerror = function () { reject(new Error('XHR network error')); };
        xhr.send();
    });
}

// ---- iframe fallback (Chrome file://) ----
function _showIframe(url) {
    _clearPdfStatus();
    var canvas = document.getElementById('pdfCanvas');
    if (canvas) canvas.style.display = 'none';

    var container = document.querySelector('.pdf-page-container');
    if (!container) return;

    var iframe = document.getElementById('pdfIframe');
    if (!iframe) {
        iframe = document.createElement('iframe');
        iframe.id    = 'pdfIframe';
        iframe.style.cssText =
            'width:780px;max-width:100%;height:90vh;border:none;' +
            'border-radius:4px;display:block;';
        container.appendChild(iframe);
    }
    iframe.src           = url;
    iframe.style.display = 'block';

    // Hide navigation (not useful in iframe mode)
    var toolbar = document.querySelector('.pdf-toolbar');
    if (toolbar) toolbar.style.visibility = 'hidden';
}

function _hideIframe() {
    var iframe = document.getElementById('pdfIframe');
    if (iframe) iframe.style.display = 'none';
    var canvas = document.getElementById('pdfCanvas');
    if (canvas) canvas.style.display = 'block';
    var toolbar = document.querySelector('.pdf-toolbar');
    if (toolbar) toolbar.style.visibility = 'visible';
}

// ---- Status overlay ----
function _showPdfStatus(msg) {
    var canvas = document.getElementById('pdfCanvas');
    if (canvas) { canvas.width = 0; canvas.height = 0; }
    var el = document.getElementById('pdfStatus');
    if (!el) {
        el = document.createElement('p');
        el.id = 'pdfStatus';
        el.style.cssText = 'color:#fff;padding:2rem;font-size:1rem;text-align:center;width:100%;box-sizing:border-box;';
        var c = document.querySelector('.pdf-page-container');
        if (c) c.appendChild(el);
    }
    el.textContent   = msg;
    el.style.display = 'block';
}

function _clearPdfStatus() {
    var el = document.getElementById('pdfStatus');
    if (el) el.style.display = 'none';
}

// ---- Close on backdrop click ----
document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('pdfModal');
    if (modal) {
        modal.addEventListener('click', function (e) {
            if (e.target.id === 'pdfModal') closePdfModal();
        });
    }
});