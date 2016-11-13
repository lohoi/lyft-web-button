var webpackConfig = require('./webpack.config.js');

module.exports = function (config) {

  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    frameworks: ['mocha'],

    // list of files / patterns to load in the browser
    files: ['karma.unit.js', 'test/**/*.spec.@(js|jsx)'],

    // list of files to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    preprocessors: {'karma.unit.js': ['webpack']},

    // test results reporter to use
    reporters: ['progress'],

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    browsers: ['PhantomJS'],

    // continuous integration mode (capture browsers, run tests, and exit)
    singleRun: true,

    // karma-webpack
    webpack: webpackConfig,
    webpackMiddleware: {stats: 'errors-only'},

    // plugins
    plugins: ['karma-mocha', 'karma-phantomjs-launcher', 'karma-webpack']

  });

};