import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      return config;
    },
    baseUrl: 'https://opensource-demo.orangehrmlive.com/web/index.php',
  },
});