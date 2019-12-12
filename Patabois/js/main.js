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

class CompostBois extends HTMLElement {
  constructor(){
    super()
    this.innerHTML="<h1>CompostBois</h1>"
  }
}
customElements.define('Compost-bois', CompostBois);
document.body.appendChild(new CompostBois());
