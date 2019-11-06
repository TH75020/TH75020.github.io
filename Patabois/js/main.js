function deblock() {
  var x = document.getElementById("tarif");
    x.style.display = "block";
}

function showTarif() {
  var x = document.getElementById("tarif");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none"
  }
  var lien = document.createElement("a");
  lien.href = "#tarif";
}

