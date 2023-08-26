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
    extra: document.getElementById("user_messege").value,
  };
  const serviceID = "service_b1ki4gi";
  const templateID = "template_z21yatj";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
      sendNotification("success", "Si le formulaire est correcte, vous allez bientôt recevoir un email de confirmation par nous.");
      sendbtn.innerText = "Votre reservation à été envoyé avec succès. Vous allez bientôt recevoir un email de confirmation par nous.";
      sendNotification("success", "Votre demande de réservation pour le : " + date.value + " à été envoyé avec succès à nous. Vous allez bientôt recevoir un email de confirmation par nous.");
      confirmsent();
      console.log(res);

    }), (err) => {
      sendbtn.innerText = 'Erreur, veuillez reéssayer.';
      sendNotification("error", JSON.stringify(err));
    };

}
function confirmsent() {
  document.getElementById("name").value = "";
  document.getElementById("name1").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("email").value = "";
  document.getElementById("date").value = "";
  document.getElementById("user_total").value = "";
  document.getElementById("user_enfant").value = "";
  document.getElementById("user_midiorelse").value = "";
  document.getElementById("plusmessagedisable").innerHTML = "Votre réservation à bien été envoyé à nous, Nous vous enverrons bientôt notre confirmation pour votre réservation de table.";
}