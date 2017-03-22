/* eslint-env node */

var MyReporter = require('./lib/my-reporter');

module.exports = {
  "test_page": "tests/index.html?hidepassed",
  "disable_watching": true,
  "reporter": new MyReporter(),
  "report_file": "report.txt",
  "launch_in_ci": [
    "PhantomJS"
  ],
  "launch_in_dev": [
    "PhantomJS",
    "Chrome"
  ]
};
