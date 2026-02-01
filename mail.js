document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    const replyParams = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
    };

    emailjs.send("service_a8bfrqi", "template_cl2nlwa", params)
        .then(() => {
            alert("Nachricht erfolgreich gesendet");
            this.reset();
        })
        .catch(error => {
            alert("Fehler beim Senden ❌");
            console.error(error);
        });

    emailjs.send("service_a8bfrqi", "template_zxkcrq2", replyParams)
        .then(() => {
            alert("Danke fürs Schreiben");
            this.reset();
        })
        .catch(error => {
            alert("Fehler beim Reply ❌");
            console.error(error);
        });
});
