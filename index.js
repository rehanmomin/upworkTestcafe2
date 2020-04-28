var reporter = require('cucumber-html-reporter');

var options = {
        theme: 'bootstrap',
        jsonFile: '/Users/admin/Documents/Testcode/reports/report.json',
        output: '/Users/admin/Documents/Testcode/reports/cucumber_report.html',
        screenshotsDirectory: '/Users/admin/Documents/Testcode/reports/screenshots/',
        storeScreenshots: true,
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        metadata: {
            "App Version":"0.3.2",
            "Test Environment": "STAGING",
            "Browser": "Chrome  54.0.2840.98",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        }
    };

    reporter.generate(options);
    
