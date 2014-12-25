var factory = function(
    _
) {
    var Huahua = function () {
    };

    _.extend(Huahua.prototype, {
        initialize: function(members) {
        },

        listen: function(p1) {
            return  function (p2){
                return function(p3){
                    return function(p4){
                        return p1 + ' ' + p2 + ' ' +p3 + ' ' + p4;
                    }
                }
            };
        },

        propose: function(){
            console.log("");
            return this;
        },
        love: function() {
            return;
        }
    });
    Huahua.prototype.reply = Huahua.prototype.propose();
    return new Huahua();
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
