import {showSnackbar} from "./help.js";

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
            showSnackbar("Nachricht erfolgreich gesendet", "success");
            //alert("Danke fürs Schreiben");
            this.reset();
        })
        .catch(error => {
            showSnackbar("Fehler beim Senden", "error");
            //alert("Error");
            console.error(error);
        });

    emailjs.send("service_a8bfrqi", "template_zxkcrq2", replyParams)
        .then(() => {
            showSnackbar("Danke fürs Schreiben", "success");
            //alert("Danke fürs Schreiben");
            this.reset();
        })
        .catch(error => {
            showSnackbar("Fehler beim Reply", "error");
            //alert("Error");
            console.error(error);
        });
});
