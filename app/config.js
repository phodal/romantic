require.config({
    paths: {
        "jquery": "../bower_components/jquery/dist/jquery",
        "underscore": "../bower_components/underscore/underscore"
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





