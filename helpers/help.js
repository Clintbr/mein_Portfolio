export function showSnackbar(message, type) {
    const snackbar = document.getElementById("snackbar");

    snackbar.textContent = message;
    snackbar.className = `show ${type}`;

    setTimeout(() => {
        snackbar.className = snackbar.className.replace("show", "");
    }, 3000);
}