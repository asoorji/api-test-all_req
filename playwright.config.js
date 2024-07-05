const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  use: {
    baseURL: 'https://jsonplaceholder.typicode.com', // Set the base URL for the API
  },
  testDir: './tests', // Set the directory for test files
});