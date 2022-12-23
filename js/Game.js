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
}