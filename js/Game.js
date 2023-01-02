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
    checkForWin(){
        const letters = document.querySelectorAll(".letter");
        for (const char of letters) {           
            if(char.classList.contains("show")){
                return true;
            }else{
                return false;
            }         
        }     
    }
    /**
     * Increases the value of missed property
     * remove a life from scroreboard
     * Check if player has remaining lives and end game if player is out
     */
    removeLife(){   
        const hearts = document.getElementsByClassName("tries");        
        hearts[this.missed].firstChild.src = "images/lostHeart.png";
        this.missed += 1;

        // for (let i = 0; i < hearts.length; i++) {
        //     const heart = hearts[i];
        //     heart.src = "images/lostHeart.png";
        //     this.missed += 1;           
        // }
        
        if(this.missed === 5){
            this.gameOver();
        }
    }

    /**
     * Displays game over message
     * @param {Boolean} gameWon - Weather or not user won the game
     */
    //if all the empty boxes are occupied and hearts < 5
    //
    gameOver(){
        const gameOverMessage = document.getElementById("game-over-message");
        const startOverlay = document.querySelector(".start");
        startOverlay.style.display = "block";

        if(this.missed === 5){
            gameOverMessage.innerHTML = "Sorry!,Better Luck Next Time";
            startOverlay.classList.add("lose");
            startOverlay.classList.remove("start");
        } else{            
            startOverlay.innerHTML = "You Win!, Great Job!"
            startOverlay.classList.add("win");
            startOverlay.classList.remove("start");            
        }
    }

    handleInteraction(){
        
    }

    
}