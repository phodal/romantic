var factory = function(
    _,
    propose,
    behavior
) {
    var Huahua = function () {
    };

    Huahua.prototype.reply = propose;
    _.extend(Huahua.prototype, {
        name: "Huahua",

        listen: function(message) {
            behavior.listen(message);
        },

        propose: function(){
	        var reply = "hmmmm.....I wanna share my life with you too";
            behavior.say(this.name + ": " + reply);
            console.log(this.name + ": " + reply);
            return reply;
        },

        love: function() {
            var message = this.name + ": "+ "I love you";
            console.log(message);
            behavior.say(message);
            return true;
        }
    });

    return new Huahua();
};

if (typeof module !== "undefined" && module.exports) {
    module.exports = factory(
        require("underscore"),
        require("propose"),
        require("behavior")
    );
} else if (typeof define !== "undefined") {
    define([
        "underscore",
        "propose",
        "behavior"
    ], factory);
}
