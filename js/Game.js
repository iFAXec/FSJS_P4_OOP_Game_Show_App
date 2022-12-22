/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {    
    constructor(){
        this.missed = 0;
        this.phrases = [
            {"That which does not kill us makes us stronger"},
            {"The journey of a thousand miles begins with one step"},
            {"Fortune favors the bold"},
            {"Time is money"},
            {"Practice makes perfect"}
        ];
        this.activePhrase = "null";
    }
}