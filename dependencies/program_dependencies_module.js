
// 1) on récupère les dépendances: librairies extérieures, etc.
const readlineSync = require("readline-sync");
// librairie native de NodeJS pour lire/écrire dans des fichiers
const fs = require("fs");
// librairie de cryptographie par défaut de NodeJS
const { randomInt } = require("crypto");
// on récupère le dictionnaire
const dictionary = fs.readFileSync("./dependencies/dict.txt", "utf-8");
/**
 * 
 * on sait qu'il va y avoir sept tentatives car
 * le pendu que l'on va afficher comprend sept étapes => https://gist.github.com/chrishorton/8510732aa9a80a03c829b09f12e20d9c;
 * notre utilisateur aura donc sept essais avant que le programme ne quitte
 * 
 */
const hangmanDrawings = [
  `
         +---+
         |   |
             |
             |
             |
             |
     =========
   `,
  `
         +---+
         |   |
         O   |
             |
             |
             |
     =========
   `,
  `
         +---+
         |   |
         O   |
         |   |
             |
             |
     =========
   `,
  `
         +---+
         |   |
         O   |
        /|   |
             |
             |
     =========
    `,
  `
         +---+
         |   |
         O   |
        /|\  |
             |
             |
     =========   
    `,
  `
         +---+
         |   |
         O   |
        /|\  |
        /    |
             |
     =========   
    `,
  `
         +---+
         |   |
         O   |
        /|\  |
        / \  |
             |
     =========   
    `
];

module.exports = {
  readlineSync,
  fs,
  randomInt,
  dictionary,
  hangmanDrawings
};