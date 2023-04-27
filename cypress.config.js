const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'ck3cf3',
  defaultCommandTimeout: 10000,

  e2e: {
    baseUrl: 'http://localhost:3000',

    setupNodeEvents (on, config) {
      require("cypress-localstorage-commands/plugin")(on, config);
      return config;
    }
  }
})
