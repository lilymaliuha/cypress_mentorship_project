import { defineConfig } from "cypress";

export default defineConfig({
  defaultCommandTimeout: 10000,

  e2e: {
    baseUrl: 'http://localhost:3000',

    setupNodeEvents (on, config) {
      require("cypress-localstorage-commands/plugin")(on, config);
      return config;
    }
  }
});
