var factory = function(
    _,
    phodal
) {
    var Propose = function () {
    };

    Propose.prototype.times = 0;

    _.extend(Propose.prototype, {
        initialize: function(members) {
        },
        propose: function(){
            this.times ++;
            var reply = "I need time to consider carefully.";
            console.log("Huahua:" + reply);
            if(this.times === 99){
                phodal.command("marry me!");
            }
            return reply;
        }
    });
    return new Propose();
};

if (typeof module !== "undefined" && module.exports) {
    module.exports = factory(
        require("underscore"),
        require("phodal")
    );
} else if (typeof define !== "undefined") {
    define([
        "underscore",
        "phodal"
    ], factory);
}
