var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

require('jasmine-reporters');
var env = require('node-env-file');
env(__dirname + '/.env');

var reporter = new HtmlScreenshotReporter({
    dest: 'target/main_report',
    filename: 'my-report.html',
    reportOnlyFailedSpecs: false,
    captureOnlyFailedSpecs: false,
    showQuickLinks: true
});

exports.config = {

    beforeLaunch: function () {
        return new Promise(function (resolve) {
            reporter.beforeLaunch(resolve);
        });
    },

    suites: {
        test_search: [
            'built/scenarios/*.js'
        ],
        test_search_jasmine: [
            'built/scenarios/TestJasmineSearch.js'

        ]
    },
    multiCapabilities: [
        {
            browserName: 'chrome',
            chromeOptions: {
                args: [
                    '--start-maximized'
                ],
                prefs: {
                    'download': {
                        'default_directory': './e2e/downloads/'
                    }
                }

            }



        }
    ],
    baseUrl: process.env.BASE_URL,
    framework: 'jasmine2',
    onPrepare: function () {

        browser.ignoreSynchronization = true;

        jasmine.getEnv().addReporter(reporter);
        var SpecReporter = require('jasmine-spec-reporter');
        jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all'}));

    },

    jasmineNodeOpts: {

        print: function () {
        },
        showTiming: true,
        showColors: true,
        isVerbose: true,
        includeStackTrace: false,
        defaultTimeoutInterval: 1200000
    },
    afterLaunch: function (exitCode) {
        return new Promise(function (resolve) {
            reporter.afterLaunch(resolve.bind(this, exitCode));
        });
    }

};
