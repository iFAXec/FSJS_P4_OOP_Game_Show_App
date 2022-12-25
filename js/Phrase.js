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
    let htmlPhrase = `
    <div id="phrase" class="section">
    <ul class = htmlUl>
    
    
    </ul>    
    </div>
    `;
    phraseArray.forEach(letter => {
     if(letter === ""){
        ul.innerHTML += `
        <li class="letter">${letter}</li>
        `        
    }
    if(letter === " "){
        ul.innerHTML += `
        <li class="space">" "</li>        
        `
    }       
      });
      return htmlPhrase;
    }    
    
}

