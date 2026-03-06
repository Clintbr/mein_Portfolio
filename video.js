// video.js
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("videoModal");
    const modalVideo = document.getElementById("modalVideo");
    const closeBtn = modal.querySelector(".close");

    // Alle Vorschau Buttons
    const previewButtons = document.querySelectorAll("a.left[data-video]");

    previewButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const videoSrc = btn.getAttribute("data-video");
            modalVideo.querySelector("source").src = videoSrc;
            modalVideo.load();
            modalVideo.play();
            modal.style.display = "flex";
        });
    });

    // Modal schließen
    closeBtn.addEventListener("click", () => {
        modalVideo.pause();
        modal.style.display = "none";
    });

    // Klick außerhalb schließt Modal
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modalVideo.pause();
            modal.style.display = "none";
        }
    });
});
