---
title: Collect reports of Tests
description: Slim notes.
order: 150
---

You can collect the results of tests using PHPUnit. PHPUnit provides various ways to gather and interpret the results of your tests, including test reports, code coverage reports, and log files.

Here are some ways to collect and analyze test results with PHPUnit:

1. **Test Reports:**
   PHPUnit generates test reports in various formats, such as text, XML, and HTML. These reports provide detailed information about each test method's success or failure, along with any assertions that failed. By default, PHPUnit generates a test report in text format after running tests. You can specify the desired output format using the `--log-junit` or `--log-json` command-line options.

2. **Code Coverage Reports:**
   PHPUnit can generate code coverage reports to show which parts of your code are being executed during the tests. This helps you identify areas that need more test coverage. You can generate code coverage reports in HTML, text, or XML formats. To enable code coverage, use the `--coverage-html`, `--coverage-text`, or `--coverage-clover` command-line options.

3. **Log Files:**
   PHPUnit allows you to log various types of information, including test results and messages, to log files. This can be helpful for debugging and analyzing test failures. You can specify the log file using the `--log` command-line option.

4. **Custom Reporters:**
   PHPUnit supports custom reporters that allow you to format and display test results in a way that suits your needs. You can create your own custom reporter by implementing the `PHPUnit\TextUI\ResultPrinter` interface.

5. **Continuous Integration (CI) Platforms:**
   When running PHPUnit as part of your Continuous Integration (CI) pipeline, CI platforms (e.g., Jenkins, Travis CI, GitHub Actions) often provide built-in integrations to display test results and reports directly within the CI environment.

To collect and analyze test results, you can follow these general steps:

1. Run your PHPUnit tests using the command-line interface or through your CI platform.
2. Review the generated test reports to see which tests passed and which ones failed.
3. Examine the code coverage reports to identify areas of your codebase that need more testing.
4. Check any log files you've generated for additional details about test results or failures.
5. If needed, customize or create your own reporting mechanism to present test results in the desired format.

By effectively collecting and analyzing test results, you can gain insights into the health and reliability of your codebase and take necessary actions to improve your test suite and application quality.

