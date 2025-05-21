// exercice 1

const firstName = 'Martin';

const anneeNaissance = '2000';

let age = 2025 - anneeNaissance;

// console.log( "Bonjour Mr " + firstName +  " Vous avez "+ age + " ans" ); bonne pratique en dessous
console.log(`Bonjour Mr ${firstName} Vous avez ${age} ans`)

// exercice 2

const noteMaths = 15;

const noteFrancais = 12;

const noteHG = 9;

let moyenne = (noteMaths + noteFrancais + noteHG) / 3;

console.log("La moyenne est de " + moyenne + " / 20");
// exercice 3

let sexe = "homme";


if (sexe === "homme") {
    console.log("Vous avez sélectionné le genre masculin.");
} else {
    console.log("Vous avez sélectionné le genre féminin.");
}

// exercice 4

const heure = 21

if (heure >= 6 && heure < 12) {
    console.log("c'est le matin");
} else if (heure >= 12 && heure < 21) {
    console.log("C'est l'après-midi");
} else {
    console.log("C'est la nuit");
}

// exercice 5

const variable = 2

if (variable === 1) {
    console.log("Insérer");
} else if (variable === 2) {
    console.log("Supprimer");
} else if (variable === 3) {
    console.log("Afficher");
} else {
    console.log("Ce choix n'existe pas");
}

// exercice 6

let nombre = 15;

if (nombre % 3 === 0 && nombre % 5 === 0) {
    console.log("Ce nombre est un mutiple de 3 et de 5");
} else {
    console.log("Ce nombre n'est pas un multiple de 3 et de  5");
}

// exercice 7

// for (let i = 44000; i < 44999; i++) {
//     console.log("Code postal "+i);
// }

// exercice 8

let box = 0;

while (box <= 20) {
    if (box === 10) {
        console.log("**" + box + "**");
    } else {
        console.log(box);
    }
    box += 2;
}
// exercice 9
function getSequence() {
    let sequence = [];
    let nombres;

    while (true) {
        nombres = Math.floor(Math.random() * 100);
        sequence.push(nombres)
        // console.log(`Tirage :`, nombres);

        if (sequence.length >= 3 &&
            sequence[sequence.length - 3] % 2 === 0 &&
            sequence[sequence.length - 2] % 2 !== 0 &&
            sequence[sequence.length - 1] % 2 !== 0) {
            console.log(`Séquence trouvée :`, sequence.slice(-3));
            return sequence.slice(-3)
        }
    }
}

getSequence()

// exercice 10

let number = 166;
let tirage, essais = 0;
// avec while
// while (tirage !== number) {
//     tirage = Math.floor(Math.random() * 100);
//     essais++;
// }
// console.log(`${number} a été trouvé en ${essais} essais`);

// avec for
tirage = null;
for (essais = 0; tirage !== number; essais++) {
    tirage = Math.floor(Math.random() * 1000);
    
}
console.log(`${number} a été trouvé en ${essais} essais`);

// exercice 11

let now = new Date();
const dateLocale = now.toLocaleDateString();
const heureLocale = now.toLocaleTimeString();

console.log(`Aujourd'hui nous sommes le ${dateLocale} et il est ${heureLocale} `);

