// Fonction pour créer et afficher le popup
function afficherPopupContact() {
  // Création de l'élément du popup
  const popup = document.createElement("div");
  popup.className = "popup-contact";

  /* Style CSS pour le popup */
  popup.style.position = "fixed";
  popup.style.left = "50%";
  popup.style.top = "50%";
  popup.style.transform = "translate(-50%, -50%)";
  popup.style.backgroundColor = "white";
  popup.style.padding = "20px";
  popup.style.borderRadius = "8px";
  popup.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
  popup.style.zIndex = "1000";
  popup.style.maxWidth = "400px";
  popup.style.width = "90%";

  // Contenu du popup (à personnaliser)
  popup.innerHTML = `
      <h3 style="margin-top: 0; color: #333;">Contactez-moi</h3>
      <p><strong>Email:</strong> sgrini.dev@gmail.com</p>
      <p><strong>Téléphone:</strong> +33 7 80 21 07</p>
      <div><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/samirgr/" target="_blank">https://www.linkedin.com/in/samirgr/</a></div>
      <button id="fermerPopup" style="padding: 8px 16px; background-color: #333; color: white; border: none; border-radius: 4px; cursor: pointer; float: right;">Fermer</button>
    `;

  // Ajout du popup au body
  document.body.appendChild(popup);

  // Création du fond sombre
  const overlay = document.createElement("div");
  overlay.className = "popup-overlay";
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  overlay.style.zIndex = "999";
  document.body.appendChild(overlay);

  // Fonction pour fermer le popup
  function fermerPopup() {
    document.body.removeChild(popup);
    document.body.removeChild(overlay);
  }

  // Événement pour le bouton "Fermer"
  document.getElementById("fermerPopup").addEventListener("click", fermerPopup);

  // Fermer le popup en cliquant sur l'overlay
  overlay.addEventListener("click", fermerPopup);
}

// Ajouter l'événement au bouton de contact
document.addEventListener("DOMContentLoaded", function () {
  const boutonContact = document.querySelector(".btn-contact");
  boutonContact.addEventListener("click", function (e) {
    e.preventDefault(); // Empêcher le comportement par défaut du lien
    afficherPopupContact();
    console.log("bouton contact")
  });
});
