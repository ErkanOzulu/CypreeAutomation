 <reference types="cypress"/>

describe('Cypress Upload Test', () => {
  
    beforeEach(() => {
     
      cy.clearCookies();
    });

  
    it.skip('Opening a web application', () => {
      cy.visit('/registration_form');
    });

});