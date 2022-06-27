import { defineConfig } from "cypress"

export default defineConfig({
  // projectId: "",
  video: false,
  fixturesFolder: "tests/cypress/fixtures",
  screenshotsFolder: "tests/cypress/screenshots",

  e2e: {
    supportFile: false,
    specPattern: "tests/cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    baseUrl: "http://localhost:3000",
    setupNodeEvents (on, config) {
      // implement node event listeners here
    }
  },

  component: {
    supportFile: false,
    specPattern: "tests/cypress/component/**/*.cy.{js,jsx,ts,tsx}",
    indexHtmlFile: "./index.html",
    devServer: {
      framework: "vue",
      bundler: "vite"
    }
  }
})
