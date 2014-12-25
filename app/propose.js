var factory = function(
    _
) {
    var Propose = function () {
    };

    Propose.prototype.times = 99;

    _.extend(Propose.prototype, {
        initialize: function(members) {
        }
    });
    return new Propose();
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
