var factory = function(
    _,
    behavior
) {
    var Phodal = function () {
    };

    _.extend(Phodal.prototype, {
        name: "Phodal",

        ask: function(p1) {
            return  function (p2){
                return function(p3){
                    return function(p4){
	                    var questions = "Phodal" + ": " + p1 + ' ' + p2 + ' ' + p3 + ' ' + p4 + '?';
                        console.log("Phodal" + ": " + questions);
                        return questions;
                    }
                }
            };
        },

        command: function(message){
	        var command = this.name + ": " + message;
            console.log(command);
            behavior.listen(command);
            return command;
        },

        love: function() {
            var message = this.name + ": "+ "I love you";
            console.log(message);
            behavior.listen(message);
            return true;
        }
    });
    return new Phodal();
};

if (typeof module !== "undefined" && module.exports) {
    module.exports = factory(
        require("underscore"),
        require("behavior")
    );
} else if (typeof define !== "undefined") {
    define([
        "underscore",
        "behavior"
    ], factory);
}
