module.exports = function (config) {
    config.set({
        basePath: '../..',
        files: [
            'node_modules/angular/angular.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'dist/angular-bootstrap-multiselect.min.js',
            'test/unit/*-test.js'
        ],
        browsers: ['PhantomJS'],
        frameworks: ['jasmine'],
        reporters: ['dots'],
        port: 9877,
        colors: true,
        exclude: [],
        singleRun: true
    });
};