/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


//Initiate Game class add constructor
//Add missed parameter and set it to 0
//Add an array of five Phrase objects to use with the game
//Add activePhrase property intiate the value to null
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
        this.activePhrase = null;
    }


    /**
     * Select random phrases from phrases property
     * @return {Object} Phrase object to be used
     */
    //GetRandom method generates a randon number
    //returns a random phrase from the phrase array
    getRandomPhrase(){
      const randomNumber = Math.floor( Math.random() * this.phrases.length );
      const randomPhrase = this.phrases[randomNumber];
      return randomPhrase;
    }

    
    /**
     * Begins game by selecting a random phrase and displaying it to user
     */
    //StartGame method removes the overlay button
    //Gets random phrase from phrase array and assigns it to active phrase property
    //Displays the active phrase which is play
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
    //Remove the first heart in the list
    //increases the missed property by 1
    //Checks if the missed is equal to 5
    //If condition is met then gameOver method is called
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
    //gameOver method displays the startOverlay 
    //Checks if the player has lost all the lives 
    //if yes, then adds "Sorry" message on screen
    //Add class lose and remove class start
    //If no, then adds Win class and removes start class
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
    //If the letter is present in the active phrase
    //Add chosen class
    //Display letter on the screen by calling ShowatchedLetter method
    //Check for win by calling checkForWin method
    //Else add  class wrong to button
    //remove life by calling removeLife method
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

    //Remove all the li elements
    //Disable all the keys
    // replace lost heart with active heart 
    resetGame(){    
        //removes all the li element from ul
        const divElements = document.querySelector("#phrase");
        const liElements = divElements.querySelectorAll(".letter");
        //console.log(liElements);

        liElements.forEach(liElement =>{
            liElement.parentNode.removeChild(liElement);
        })
        
       //Enables all the keys and removes class chosen and wrong 
       const keys = document.querySelectorAll(".key");
       //console.log(keys);
        keys.forEach(key=>{
            key.classList.remove("chosen","wrong");
            key.disabled = false;
        })
        
        //replaces the lost heart with live hearts
        
        const heartImages = document.getElementsByTagName("img");
        for(const heartimage of heartImages) {
            console.log(heartimage);
            heartimage.src = "images/liveHeart.png";            
        }        
             
}
}

//const game = new Game();
//console.log(game.getRandomPhrase());
