var factory = function(
    _
) {
    var Phodal = function () {
    };

    _.extend(Phodal.prototype, {
        name: "Phodal",

        ask: function(p1) {
            return  function (p2){
                return function(p3){
                    return function(p4){
	                    var questions = p1 + ' ' + p2 + ' ' + p3 + ' ' + p4 + '?';
                        console.log("Phodal" + ": " + questions);
                        return questions;
                    }
                }
            };
        },

        command: function(message){
            console.log(this.name + ": " + message);
            return this.name + ": " + message;
        },

        love: function() {
            var message = this.name + ": "+ "I love you";
            console.log(message);
            return true;
        }
    });
    return new Phodal();
};

if (typeof module !== "undefined" && module.exports) {
    module.exports = factory(
        require("underscore")
    );
} else if (typeof define !== "undefined") {
    define([
        "underscore"
    ], factory);
}
