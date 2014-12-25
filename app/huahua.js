var factory = function(
    _,
    propose,
    lovers
) {
    var Huahua = function () {
    };

    Huahua.prototype = lovers;
    Huahua.prototype.reply = propose;
    _.extend(Huahua.prototype, {
        name: "Huahua",

        listen: function() {
            //console.log("");
        },

        propose: function(){
	        var reply = "I want to spend the rest of my life with you.";
            console.log(this.name + ": " + reply);
            return reply;
        },

        love: function() {
            var message = this.name + ": "+ "I love you";
            console.log(message);
            return true;
        }
    });

    return new Huahua();
};

if (typeof module !== "undefined" && module.exports) {
    module.exports = factory(
        require("underscore"),
        require("propose"),
        require("lovers")
    );
} else if (typeof define !== "undefined") {
    define([
        "underscore",
        "propose",
        "lovers"
    ], factory);
}
