/// <reference types='Cypress' />
/// <reference path='../support/index.d.ts' />

describe('Landing', () => {
  beforeEach(() => {
    cy.visit('#/about')
  })
  it('.should() - assert that <title> is correct', () => {
    cy.title().should('include', 'Quasar')
  })
  it('Types name, age, accept license and submit', () => {
    cy.dataCy('input-your-name')
      .type('Reg')
      .should('have.value', 'Reg')

    cy.dataCy('input-your-age')
      .type('29')
      .should('have.value', '29')

    cy.dataCy('toggle-accept')
      .click()
      .should('have.attr', 'aria-checked', 'true')

    cy.dataCy('submit-button')
      .click()
  })
  it('Types name, age, accept license and reset', () => {
    cy.dataCy('input-your-name')
      .type('Reg')
      .should('have.value', 'Reg')

    cy.dataCy('input-your-age')
      .type('29')
      .should('have.value', '29')

    cy.dataCy('toggle-accept')
      .click()
      .should('have.attr', 'aria-checked', 'true')

    cy.dataCy('reset-button')
      .click()

    cy.dataCy('input-your-name')
      .should('be.empty')

    cy.dataCy('input-your-age')
      .should('be.empty')

    cy.dataCy('toggle-accept')
      .should('have.attr', 'aria-checked', 'false')
  })
})
