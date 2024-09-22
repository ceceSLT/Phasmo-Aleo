// Définir une liste précise d'éléments
const items = ["Trépied", "Thermomètre", "Pillule", "Détecteur de mouvement", "Sel", "Lampe UV", "Micro Parabolique", "Bougie", "Caméra", "capteur sonore", "Livre", "Crucifix", "Spirit Box", "D.O.T.S", "EMF"];

function drawRandom() {
    // Vérifier que la liste n'est pas vide
    if (items.length === 0) {
        alert("La liste est vide.");
        return;
    }

    // Tirage aléatoire
    const randomIndex = Math.floor(Math.random() * items.length);
    const randomItem = items[randomIndex];

    // Afficher le résultat
    document.getElementById('random-item').textContent = randomItem;
}