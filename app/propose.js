var factory = function(
    _,
    phodal,
    behavior
) {
    var Propose = function () {
    };

    Propose.prototype.times = 0;

    _.extend(Propose.prototype, {
        initialize: function(members) {
        },
        propose: function(){
            this.times ++;
            var reply ="Huahua:" + "I need time to consider carefully.";
            console.log(reply);
            behavior.say(reply);
            if(this.times === 99){
                phodal.command("marry me! I want to spend the rest of my life with you.");
            }
            return reply;
        }
    });
    return new Propose();
};

if (typeof module !== "undefined" && module.exports) {
    module.exports = factory(
        require("underscore"),
        require("phodal"),
        require("behavior")
    );
} else if (typeof define !== "undefined") {
    define([
        "underscore",
        "phodal",
        "behavior"
    ], factory);
}
