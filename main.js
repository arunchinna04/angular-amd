require.config({
    baseUrl: "",
    
    // alias libraries paths.  Must set 'angular'
    paths: {
        'angular': 'lib/angular',
        'angular-route': 'lib/angular-route',
        'angularAMD': 'lib/angularAMD'

        
    },
    
    // Add angular modules that does not support AMD out of the box, put it in a shim
    shim: {
        'angularAMD': ['angular'],
        'angular-route': ['angular']
    },
    
    // kick start application
    deps: ['app']
});