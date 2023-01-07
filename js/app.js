/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
const buttonReset = document.getElementById("btn__reset");

buttonReset.addEventListener("click", ()=>{
    game = new Game;
    game.startGame();
});

const keyboardButtons = document.querySelectorAll("#qwerty");

keyboardButtons.forEach(keyboardButton => {    
    keyboardButton.addEventListener("click", (e)=>{                        
        if(e.target.tagName === "BUTTON");
       game.handleInteraction(e.target);                   
    });         
});





//Testing
//const phrase = new Phrase("Life is like a box of chocolate");
//console.log(`Phrase - phrase: ${phrase.phrase}`)
/**
 * game.phrases.forEach((phrase, index) => {
        console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
        });
*/

// const logPhrase = (phrase) => {
//         console.log(`Phrase - phrase: `, phrase.phrase);
//         };

// const game = new Game();
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());

// const game = new Game();
// game.getRandomPhrase().addPhraseToDisplay();

// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);
