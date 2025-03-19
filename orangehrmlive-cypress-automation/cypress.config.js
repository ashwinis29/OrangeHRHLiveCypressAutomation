const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("after:screenshot", (details) => {
        console.log("Screenshot taken:", details.path);
      });
    },
    screenshotsFolder: "cypress/screenshots",
    screenshotOnRunFailure: true,
    video: false,
  },
});
