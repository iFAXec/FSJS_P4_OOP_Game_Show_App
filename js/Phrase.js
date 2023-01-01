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
        htmlPhrase += `<li class="hide letter">${letter}</li>`;            
    }
    if(letter === " "){
        htmlPhrase += `<li class="space">${" "}</li>`;
    }          
    });
    htmlPhrase += `</ul>`
    htmlPhrase += `</div>`
    
    ul.innerHTML = htmlPhrase;
    }
    

    //Reference: https://stackoverflow.com/questions/35948669/how-to-check-if-a-value-exists-in-an-object-using-javascript
    /**
     * Check if passed letter is in phrase
     * @param {string} letter - Letter to check 
     */
    checkLetter(letter){
        return this.phrase.includes(letter);      
    }

    /**
     * Displays passed letter on screen after a match is found
     * @param {string} letter - Letter to display
     */

    showMatchedLetter(letter){
    const selectedLetters = document.querySelectorAll(".letter");

    for (const char of selectedLetters) {
        if (char.innerHTML === letter) {
            char.classList.add("show");
            char.classList.remove("hide");       
    }
}
}
}

