/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase){
       this.phrase = phrase.toLowerCase();
    }


    /**
     * Display phrase on game board
     */
addPhraseToDisplay(){
    const phraseArray = this.phrase.split("");
    const ul = document.querySelector("#phrase ul");

    let htmlPhrase = " ";    
    htmlPhrase += `<div id="phrase" class="section">`;
    htmlPhrase += `<ul>`;

    phraseArray.forEach(letter => {
     if(letter !== " "){
        htmlPhrase += `<li class="letter">${letter}</li>`;            
    }
    if(letter === " "){
        htmlPhrase += `<li class="space">${" "}</li>`;
    }          
    });
    htmlPhrase += `</ul>`
    htmlPhrase += `</div>`
    
    ul.innerHTML = htmlPhrase;
    }
    
    /**
     * Check if passed letter is in phrase
     * @param {string} letter - Letter to check 
     */
    checkLetter(letter){
        game.activePhrase.forEach(element =>{
            if(letter === element){
                return letter;
            }
        });
    }

    showMatchedLetter(){
        const selectedLetter = document.getElementsByClassName("letter");
        


    }

}

