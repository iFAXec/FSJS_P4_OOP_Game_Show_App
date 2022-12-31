/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {    
    constructor(){
        this.missed = 0;
        this.phrases = [
            new Phrase ("That which does not kill us makes us stronger"),
            new Phrase ("The journey of a thousand miles begins with one step"),
            new Phrase ("Fortune favors the bold"),
            new Phrase ("Time is money"),
            new Phrase ("Practice makes perfect")
        ];
        this.activePhrase = "null";
    }


    /**
     * Select random phrases from phrases property
     * @return {Object} Phrase object to be used
     */

    getRandomPhrase(){
      const randomNumber = Math.floor( Math.random() * this.phrases.length );
      const randomPhrase = this.phrases[randomNumber];
      return randomPhrase;
    }

    /**
     * Begins game by selecting a random phrase and displaying it to user
     */
    startGame(){
        const overlayButton = document.getElementById("overlay");
        overlayButton.style.display="none";

        this.activePhrase = this.getRandomPhrase();     
        this.activePhrase.addPhraseToDisplay();    
    }

    /**
     * Checks for winning move
     * @return {Boolean} True if game has been won, false if game wasn't
     */
    checkin(){
        const checkPhrase = this.activePhrase;
        for (let i= 0; i < checkPhrase.length; i++) {

            
        }
        
        
    }


    handleInteraction(){
        
    }

    
}