const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  viewportWidth: 1440,
  viewportHeight: 880,
  video: false,
  blockHosts: ['*.sentry.io', '*.abla.io'],
  e2e: {
    baseUrl: 'http://localhost:3000',
    supportFile: false,
  },
  screenshotsFolder: 'cypress/screenshots',
})
