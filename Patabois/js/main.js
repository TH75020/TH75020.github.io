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

