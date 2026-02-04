const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "otx3nc",

  e2e: {
    allowCypressEnv: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
