var factory = function(
    _
) {
    var Sweetheart = function () {
    };

    _.extend(Sweetheart.prototype, {
        love: function() {
            var message = this.name + ": "+ "I love you";
            console.log(message);
            return true;
        }
    });
    return new Sweetheart();
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
