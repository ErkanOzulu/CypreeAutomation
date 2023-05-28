/// <reference types="cypress" />


describe('Find or Get Element by Using Diffirent Locators', ()=>{

beforeEach(()=>{
    //runs before each test case, like beforeMethod in TestNG
    cy.clearCookies();
    cy.visit('/login');
})



it('Check diffirent locators strategies', () =>{
    
  // By Css locator
  cy.get("input[name='username']").type("CydeoStudent");// every statement creates an object to be interacted, and next command makes operation to the object created at the previous statement
  // attribute name and value
  cy.get("[type='text'").clear();  //clear what is typed

  // tagname
  cy.get("input").each((item, index, list)=>{
    // assert the length of the list is 2
    expect(list).to.have.length(2);
    expect(item).to.have.attr("type");

  })
  //by attribute name
  cy.get('[type]');

  //by clasName
  cy.get('.btn.btn-primary');

  //By id
  cy.get('#wooden_spoon');

  //if I want to use text: no xpath in cypress, but it still possible with a different approach

  cy.get('button').should('contain','Login').click();


})


})