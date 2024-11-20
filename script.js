function changeStyleBasedOnTime() {
    // Obtenir l'heure actuelle
    let currentHour = new Date().getHours();

    // Récupérer l'élément qui affiche le message "Bonjour !" ou "Bonsoir !"
    let sayHi = document.getElementById('say-hi');

    // Condition pour afficher "Bonjour !" ou "Bonsoir !"
    if (currentHour >= 5 && currentHour < 18) {
        sayHi.textContent = 'Bonjour !';  // Entre 5h et 18h
    } else {
        sayHi.textContent = 'Bonsoir !';  // Entre 18h et 5h
    }

    // Récupérer l'élément pour appliquer les classes CSS
    let element = document.getElementById('time-based-style');

    // Réinitialiser les classes
    element.classList.remove('aurore', 'matin', 'apres-midi', 'soiree', 'nuit');

    // Appliquer la classe appropriée en fonction de l'heure
    if (currentHour >= 5 && currentHour < 8) {
        element.classList.add('aurore');  // Aurore : 5h-8h
    } else if (currentHour >= 8 && currentHour < 12) {
        element.classList.add('matin');   // Matin : 8h-12h
    } else if (currentHour >= 12 && currentHour < 18) {
        element.classList.add('apres-midi'); // Après-midi : 12h-18h
    } else if (currentHour >= 18 && currentHour < 22) {
        element.classList.add('soiree'); // Soirée : 18h-22h
    } else {
        element.classList.add('nuit');  // Nuit : 22h-5h
    }
}

// Fonction pour afficher l'heure en direct
function updateClock() {
    // Obtenir l'heure actuelle
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // Affichage de l'heure
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('time-display').textContent = `${timeString}`;

    // Appeler la fonction pour mettre à jour le style en fonction de l'heure
    changeStyleBasedOnTime();
}

// Mise à jour de l'horloge toutes les secondes
setInterval(updateClock, 1000);

// Appeler la fonction updateClock une première fois pour afficher l'heure immédiatement
updateClock();
