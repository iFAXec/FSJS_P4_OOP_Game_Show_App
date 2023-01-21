/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const buttonReset = document.getElementById("btn__reset");
const keyboardButtons = document.querySelectorAll("#qwerty");
const keyRows = document.querySelectorAll(".keyrow");

//Add event listen to the reset button
//If game is undefined (default start of the game)
//reset the game by calling resetgame method on game object
//call startGame  on game method
//Initiate the new game
//call startGame method to start the game
let game;
buttonReset.addEventListener("click", ()=>{
    if(game !== undefined){
        game.resetGame();
        game.startGame();                                  
    }    
    game = new Game;
    game.startGame();   
     
});


//Add event listener on the keys
//Call handleInteraction method on the game object
keyboardButtons.forEach(keyboardButton => {    
    keyboardButton.addEventListener("click", (e)=>{                        
        if(e.target.tagName === "BUTTON"){
       game.handleInteraction(e.target);
    }                   
    });         
});



//Testing




