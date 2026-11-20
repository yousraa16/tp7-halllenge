function actualiserCompteur() {
    let n = document.querySelectorAll("#liste li").length;
    document.getElementById("compteur").innerHTML ="Tâches en cours : " + n;
}
actualiserCompteur();
function toutSupprimer() {
    document.getElementById("liste").innerHTML = "";
    actualiserCompteur();
    sauvegarder();
}
function sauvegarder() {
    let taches = [];
    let liste = document.querySelectorAll("#liste li");
    liste.forEach(function(li) {
        taches.push(li.textContent);
    });
    localStorage.setItem("taches", JSON.stringify(taches));
}
function charger() {
    let taches = JSON.parse(localStorage.getItem("taches")) || [];
    taches.forEach(function(t) {
        ajouterTache(t);
    });
}
let images = ["image1.jpg", "image2.jpg", "image3.jpg"];
let i = 0;
let timer = null;
function demarrer() {
    if (timer == null) {
        timer = setInterval(function() {
            i = (i + 1) % images.length;
            document.getElementById("image").src = images[i];
        }, 2000);
    }
}
function arreter() {
    clearInterval(timer);
    timer = null;
}
let coups = 0;
coups++;
document.getElementById("score").innerHTML = coups;
verifierVictoire();
function verifierVictoire() {
    let final = [1, 2, 3, 4, 5, 6, 7, 8, ""];
    if (grille.toString() == final.toString()) {
        alert("Bravo ! Tu as gagné en " + coups + " coups !");
    }
}
let temps = 30;
let timerQuiz = setInterval(function() {
    temps--;
    document.getElementById("temps").innerHTML = temps;
    if (temps == 0) {
        clearInterval(timerQuiz);
        validerQuiz();
    }
}, 1000);