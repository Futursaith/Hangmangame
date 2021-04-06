
const { readlineSync, fs, randomInt, hangmanDrawings } =
  require("./dependencies/program_dependencies_module");

// initialisation du programme: conditions de départ
const appState = require("./init");

// pour débugguer => affichage de chacune des lignes du dictionnaire
// appState.words.forEach(word => {
//   console.log(word);
// });

// on définit le mot qu'on va utiliser dans le jeu
const randomNumber = randomInt(0, appState.words.length);
// la variable ci-dessous correspond au mot que devra deviner l'utilisateur
const wordToGuess = appState.words[randomNumber];

// déboguage => on affiche le mot sélectionné pour la suite du jeu
// console.log(`the word ${appState.words[randomNumber]} has been selected for playing`);

let userHasWon = false;

// déboguage => on transforme le mot à deviner en tableau
// const wordToGuessArr = wordToGuess.split('');
// console.log(wordToGuessArr);
// process.exit();

// déclarer la variable contenant le mot affiché à l'utilisateur
let displayedWord = wordToGuess.replace(/./g, '_');

const compareWords = (userAnswer, wordToGuess, displayedWord) => {

  // lettres qui ont été devinées
  let guessedLetters = [];

  const wordToGuessArr = wordToGuess.split('');
  let displayedWordArr = displayedWord.split('');
  const userAnswerArr = userAnswer.split('');

  // on boucle sur chacune des lettres du mot à deviner 
  for (let i = 0; i < wordToGuessArr.length; i++) {
    // si la réponse de l'utilisateur comprend une des lettres du mot à deviner 
    if (userAnswerArr.includes(wordToGuessArr[i])) {
      // on va mettre à jour la lettre correspondante dans le mot à afficher
      displayedWordArr[i] = wordToGuessArr[i];
    }
  }

  // on re transforme le mot à afficher en string
  displayedWord = displayedWordArr.join('');

  return displayedWord;

};

// loop du jeu
while (appState.trialsCount < 7) {

  const userAnswser = readlineSync.question(`
    Guess the word or be hanged !\n
    The word is ${displayedWord} \n
    You can try ${7 - appState.trialsCount} times !\n
  ` );

  if (userAnswser.toLowerCase() !== wordToGuess.toLowerCase()) {

    // on incrémente le nombre d'essais faits par l'utilisateur de 1
    appState.trialsCount++;
    console.log(`you have ${7 - appState.trialsCount} tries left to guess the word !`);
    // affichage du pendu
    console.log(hangmanDrawings[appState.trialsCount]);

    /**
     * 
     * on affiche de nouveau l'indice à l'utilisateur => displayedWord
     *  - prendre le mot à deviner => wordToGuess
     *  - prendre le mot entré par l'utilisateur => userAnswer
     *  - comparer ces deux mots
     *  - mettre à jour le mot affiché (displayedWord) avec les lettres qu'a deviné l'utilisateur
     *    * displayedWord = fonctionQuiMetAJourLeMotAAfficher(
     * 
     * 
     * 1) à partir de la réponse de l'utilisateur, vérifier que la lettre ou suite de lettres qu'il a entré
     *    correspond à une lettre ou une suite de lettres du mot à vérifier
     * 2) si une lettre ou une suite de lettres entrés par l'utilisateur est valide, alors on affiche ces 
     *    lettres dans le mot à deviner
     * 
     */
    displayedWord = compareWords(userAnswer, wordToGuess, displayedWord);


  } else {
    userHasWon = true;
    break;
  }

}

// en dehors de la loop, on termine le programme 
if (userHasWon)
  console.log('YOU WIN, YOU GUESSED THE RIGHT WORD => END OF HANGMAN PROGRAM');
else
  console.log('YOU LOOSE => END OF HANGMAN PROGRAM');
process.exit();

