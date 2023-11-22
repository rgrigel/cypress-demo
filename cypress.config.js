const { defineConfig } = require("cypress");
const browserstackAccessibility = require('browserstack-cypress-cli/bin/accessibility-automation/plugin');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      browserstackAccessibility(on, config);
      return config;
    },
    baseUrl: "https://www.dn.se/",
  },
  chromeWebSecurity: false,
});
