require.config({
    paths: {
        "jquery": "../libs/jquery",
        "underscore": "../libs/underscore"
    },
    shim: {
        jquery: {
            exports: "$"
        },
        underscore: {
            exports: "_"
        }
    }
});

if (!window.requireTestMode) {
    require(['main'], function(){ });
}





