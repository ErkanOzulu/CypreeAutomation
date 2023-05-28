const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://practice.cydeo.com/',
git a
    video:false, // it prevent to generate video or stop to default generate video
    retries: 2,// if test failes it runs 2 more times
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
