var Letter = require("./Letter.js");
var inquirer = require('inquirer');
var prompt = require('prompt');

var lettersArray = [];
var connectedLetters = "";
var userGuesses = [];
var remainingGuesses = 10;
var gameWord = "";

var Word = function (word) {
    this.word = function () {
        gameWord = word.toUpperCase();
        for (i = 0; i < word.length; i++) {
            var letter = new Letter(word[i]);
            var character = letter.display().toUpperCase();
            lettersArray.push(letter);
            connectedLetters = connectedLetters + character + " ";
            

        }
        console.log(connectedLetters);
        this.guess();
    }
    this.guess = function () {
        
        if (remainingGuesses > 0) {
            inquirer.prompt([
                {
                name: "userGuess",
                message: "Guess a letter! "
                }
            ]).then(function(answers) {
                // initializes the variable newGuy to be a programmer object which will take
                // in all of the user's answers to the questions above
                var guess = answers.userGuess
                var stringGuess = guess.toUpperCase();
                if (gameWord.includes(stringGuess) === true) {
                    for (i = 0; i < lettersArray.length; i++) {
                        lettersArray[i].check(stringGuess);
                        lettersArray[i].display();
                    }

                    connectedLetters = "";
                    for (j = 0; j < lettersArray.length; j++) {
                        connectedLetters = connectedLetters + lettersArray[j].display().toUpperCase() + " ";
                    }
                }
                else {
                    console.log("Didn't find a letter");
                }
                console.log(connectedLetters);

                if (connectedLetters.includes("_")) {
                    this.guess;
                }
            });
        }
    
    }
}

module.exports = Word;