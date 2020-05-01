//bouton pour faire apparaître et disparaître les tarifs
function showTarif() {
  var x = document.getElementById("tarif");
  if (x.style.display != "block") {
    x.style.display = "block";
  } else {
    x.style.display = "none"
  }
  var lien = document.createElement("a");
  lien.href = "#tarif";
}
// création de la Balise Compost-bois
class CompostBois extends HTMLElement {
  constructor(){
    super()
    this.innerHTML="<h1>CompostBois</h1>"
  }
}
customElements.define('Compost-bois', CompostBois);
document.body.appendChild(new CompostBois());
