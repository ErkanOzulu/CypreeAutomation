/// <reference types="cypress" />

const { before } = require('mocha');

describe('Context: My First Tests', () => {
  before(() => {
    // runs once before all test cases in this describe block, like beforeClass in Test NG
  });

  beforeEach(() => {
    // runs before each test case, like beforeMethod in TestNG
    cy.clearCookies();
  });

  after(() => {
    // similiar to afterClass in TestNG, runs once after all tests finished
  });

  afterEach(() => {
    // similiar to afterMethod in TestNG
  });

  it.skip('Opening a web application', () => {
    cy.visit('/registration_form');
  });
  it('test2', () => {
    expect(false).to.equal(false);
  });
  xit('test3', () => {
    expect(false).not.to.equal(true);
  });

  it('test4', () => {
    expect(5).to.equal(5);
  });
  it('test5', () => {
    expect(true).to.equal('5' == 5);
  });
});
