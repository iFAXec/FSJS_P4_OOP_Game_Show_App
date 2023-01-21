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
    //AddPhrase ToDisplay method builds the html element of the phrase to display
    //Splits the phrase into each alphabets using the split method
    //Build the html elements and with letter class added to letter
    //Adds space class to space
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
    //CheckLetter method check if the letter is present in the active phrase 
    checkLetter(letter){
        return this.phrase.includes(letter);      
    }

    /**
     * Displays passed letter on screen after a match is found
     * @param {string} letter - Letter to display
     */
//ShowMatchedLetter method takes a letter parameter
//Checks if the letter matches with any letter in the phrase
//if yes, adds class "show" and removes class "hide" 
    showMatchedLetter(letter){
    const selectedLetters = document.querySelectorAll(".letter");

    for (const char of selectedLetters) {   
        //console.log(selectedLetters);

        if (char.innerHTML === letter) {
            //console.log(char);
            char.classList.add("show");
            char.classList.remove("hide");       
    }
}
}
}



