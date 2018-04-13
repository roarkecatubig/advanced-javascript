var Word = require("./Word.js");
var Letter = require("./Letter.js");

var wordBank = [""];
var strungWord = "";
var remainingGuesses = 10;

function gameLogic () {
    var gameWord = new Word("cat");
    gameWord.word();
}

gameLogic();
