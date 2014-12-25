var factory = function(
    _,
    $
) {
    var Behavior = function () {
    };

    _.extend(Behavior.prototype, {
        say: function(message){
            $("#huahua").append("<p>" + message + "</p>");
        },

        listen: function(message){
            $("#phodal").append("<p>" + message + "</p>");
        }
    });

    return new Behavior();
};

if (typeof module !== "undefined" && module.exports) {
    module.exports = factory(
        require("underscore"),
        require("jquery")
    );
} else if (typeof define !== "undefined") {
    define([
        "underscore",
        "jquery"
    ], factory);
}
