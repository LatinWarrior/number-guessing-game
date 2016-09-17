
angular.module('app').component('main', {
    templateUrl: 'app/templates/main.html',
    bindings: {

    },
    controller: function () {
        this.deviation = null;
        this.guess = null;
        this.noOfTries = 0;
        this.original = 0;        

        this.verifyGuess = function(){
            this.deviation = this.original - this.guess;
            this.noOfTries = this.noOfTries + 1;
        };

        this.initializeGame = function(){
            this.noOfTries = 0;
            this.original = Math.floor((Math.random()  * 1000) + 1);
            this.guess = null;
            this.deviation = null;
        };

        this.initializeGame();

    }
});