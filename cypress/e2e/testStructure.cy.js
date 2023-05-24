/// <reference types="cypress" />

const { before } = require("mocha")

describe('Context: My First Tests', ()=>{
before(()=>{
    // runs once before all test cases in this describe block, like beforeClass in Test NG
})
beforeEach(()=>{
    //runs before each test case, like beforeMethod in TestNG
    cy.clearCookies();
})

after(()=>{
    // similiar to afterClass in TestNG, runs once after all tests finished
})

afterEach(()=>{
    //similiar to afterMethod in TestNG
})

it('Opening a web application', () =>{
    cy.visit('/registration_form');
  
})

})