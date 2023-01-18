/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {    
    constructor(){
        this.missed = 0;
        this.phrases = [
            new Phrase ("To Kill a Mockingbird"),
            new Phrase ("Peaky Blinders"),
            new Phrase ("Mrs Doubtfire"),
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
    
    //check for all the elements with hide class 
    //If all hide class are removed then return true else return false
    checkForWin(){        
        const hideLetter = document.querySelectorAll(".hide");
        if(hideLetter.length === 0){
            return true;
        } else{
            return false;
        }        
    }

    /**
     * Increases the value of missed property
     * remove a life from scroreboard
     * Check if player has remaining lives and end game if player is out
     */
    removeLife(){   
        const hearts = document.querySelectorAll(".tries");        
        hearts[this.missed].firstChild.src = "images/lostHeart.png";
        this.missed += 1;
             
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
            gameOverMessage.innerHTML = "Sorry! Better Luck Next Time";
            startOverlay.classList.add("lose");
            startOverlay.classList.remove("start");
        } else{            
            startOverlay.innerHTML = "You Win! Great Job!"
            startOverlay.classList.add("win");
            startOverlay.classList.remove("start");            
        }
    }


    /**
     * Handles onscreen keyboard button clicks
     * @param {HTMLButtonElement} button - The clicked button element
     */
    //disables selected letter upon click
    handleInteraction(button) {  
        console.log(button);
        button.disabled = true;
        
        if(this.activePhrase.checkLetter(button.innerHTML)){
            button.classList.add("chosen");
            this.activePhrase.showMatchedLetter(button.innerHTML);
            this.checkForWin();
        } else{
            button.classList.add("wrong");
            this.removeLife();
        }  

        if(this.checkForWin()){
            this.gameOver();
        }        
    };

    
    resetGame(){    
        //removes all the li element from ul
        const liElements = document.querySelectorAll("#phrase ul");

        liElements.forEach(liElement =>{
            liElement.parentNode.removeChild(liElement);
        })
        
       //Enables all the keys and removes class chosen and wrong 
       const keys = document.querySelectorAll(".key");
        keys.forEach(key=>{
            key.classList.remove("chosen","wrong");
            key.disabled = false;
        })
        
        //replaces the lost heart with live hearts
        for(const heart of hearts) {
            heart.src = "images/liveHeart.png";            
        }        
             
}
}

//const game = new Game();
//console.log(game.getRandomPhrase());
