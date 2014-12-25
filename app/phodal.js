var factory = function(
    _
) {
    var Phodal = function () {
    };

    _.extend(Phodal.prototype, {
        initialize: function(members) {
        },

        ask: function(p1) {
            return  function (p2){
                return function(p3){
                    return function(p4){
	                    var questions = p1 + ' ' + p2 + ' ' + p3 + ' ' + p4 + '?';
                        console.log(questions);
                        return questions;
                    }
                }
            };
        },
        love: function() {

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
