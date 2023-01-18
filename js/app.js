/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const buttonReset = document.getElementById("btn__reset");
const keyboardButtons = document.querySelectorAll("#qwerty");
const keyRows = document.querySelectorAll(".keyrow");
const hearts = document.getElementsByClassName("tries");        

let game;
buttonReset.addEventListener("click", ()=>{
    // if(game !== undefined){
    //     game.resetGame();
    //     game.startGame();                                  
    // }    
    game = new Game;
    game.startGame();   
     
});

keyboardButtons.forEach(keyboardButton => {    
    keyboardButton.addEventListener("click", (e)=>{                        
        if(e.target.tagName === "BUTTON"){
       game.handleInteraction(e.target);
    }                   
    });         
});









//Testing

