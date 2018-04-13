var Letter = function (character) {
    this.character = character;
    this.expose = false;
    this.default = "_";
    this.display = function () {
        if (this.expose === false) {
            return this.default;
        }

        else if (this.expose === true) {
            return this.character; 
        }
    }

    this.check = function (guess) {
        if (guess === this.character.toUpperCase()) {
            this.expose = true;
            this.display();
        }

        else if (guess != this.character.toUpperCase()) {
            console.log("Incorrect guess")
            this.display();
        }

        else {
            console.log("Don't know what to do.");
        }
    }

}

module.exports = Letter;

// var newLetter = new Letter("A");
// newLetter.check("A");





