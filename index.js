document.addEventListener("DOMContentLoaded", function() {
    var toqSonlarDiv = document.getElementById("toq-sonlar");
    var sonlarHTML = "<h2>Toq Sonlar</h2><p>";
    for (var i = 1; i <= 100000; i++) {
      if (i % 2 !== 0) {
        sonlarHTML += i + ", ";
      }
    }
    sonlarHTML = sonlarHTML.slice(0, -2); // Ostatdagi vergulni olib tashlash
    sonlarHTML += "</p>";
    toqSonlarDiv.innerHTML = sonlarHTML;
  });
  