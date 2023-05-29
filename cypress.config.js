const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://practice.cydeo.com/',
    viewportHeight:800,
    viewportWidth:1200,
    video:false, // it prevent to generate video or stop to default generate video
    retries: 1,// if test failes it runs 2 more times
    defaultCommandTimeout: 5000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
