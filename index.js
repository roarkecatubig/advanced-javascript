var Word = require("./Word.js");
var Letter = require("./Letter.js");

var wordBank = [""];
var strungWord = "";
var remainingGuesses = 10;
var winState = false;

function gameSetup () {
    var gameWord = new Word("cat");
    initGame(gameWord);
}

function initGame (word) {
    var gameWord = word;
    if (winState = false & remainingGuesses != 0) {
        gameWord.word();
    }
}

gameSetup();