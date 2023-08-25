function showhideallinfoform() {
  $("#toggledetailsmainformmain22").toggle();
  var x = document.getElementById("detailsinfoformform");
  if (x.innerHTML === "Voir les détails") {
    x.innerHTML = "Moins de détails";
  } else {
    x.innerHTML = "Voir les détails";
  }
}
function sendMail() {
  var sendbtn = document.getElementById("sendbtn");
  sendbtn.innerText = 'Traitement en cours...';
  if ($("#name").val() == "" || $("#name1").val() == "" || $("#phone").val() == "" || $("#email").val() == "") {
    sendbtn.innerText = "Erreur, Un ou plusiers champs n'est pas valide.";
    return sendNotification("error", "Ooups, le formulaire n'est pas correctement remplis. Détails : <strong>Un ou plusiers champs n'est pas valide.</strong>.");
  }
  if ($("#date").val() == "") {
    sendbtn.innerText = "Erreur, Un ou plusiers champs n'est pas valide.";
    return sendNotification("error", "Ooups, le formulaire n'est pas correctement remplis. Détails : <strong>La date de réservation est éronée.</strong>.");
  }
  if ($("#user_total").val() == "Personne(s) total (Auto)" || parseInt($("#user_total").val()) < "1" ||parseInt($("#user_total").val()) == "" || Number.isNaN(parseInt($("#user_total").val()))) {
    sendbtn.innerText = "Erreur, Nombre de personnes est invalid.";
    return sendNotification("error", "Ooups, le formulaire n'est pas correctement remplis. Détails : <strong>Nombre de personnes invalid</strong>.");
  }
  var params = {
    name: document.getElementById("name").value,
    name1: document.getElementById("name1").value,
    phone: document.getElementById("phone").value,
    reply_to: document.getElementById("email").value,
    date: document.getElementById("date").value,
    total: document.getElementById("user_total").value,
    adults: document.getElementById("user_adult").value,
    enfants: document.getElementById("user_enfant").value,
    midielse: document.getElementById("user_midiorelse").value,
  };
  const serviceID = "service_b1ki4gi";
  const templateID = "template_z21yatj";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("mail").value = "";
        document.getElementById("user_messege").value = "";
        console.log(res);
        sendNotification("success", "Votre demande de reservation pour le : " + user_datereserved.value + " à été envoyé avec succès.");
        sendNotification("success", "Si le formulaire est correcte, vous allez bientôt recevoir un email de confirmation.");
        sendbtn.innerText = "Votre reservation pour le : " + user_datereserved + " à été envoyé avec succès.";

    }), (err) => {
      sendbtn.innerText = 'Erreur, veuillez reéssayer.';
      sendNotification("error", JSON.stringify(err));
    };

}