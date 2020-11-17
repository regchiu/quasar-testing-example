/// <reference types='Cypress' />
/// <reference path='../support/index.d.ts' />

// Use `cy.dataCy` custom command for more robust tests
// See https://docs.cypress.io/guides/references/best-practices.html#Selecting-Elements

// ** This file is an example of how to write Cypress tests, you can safely delete it **

// This test will pass when run against a clean Quasar project
describe('Landing', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('.should() - assert that <title> is correct', () => {
    cy.title().should('include', 'Quasar')
  })
  it('clicks the hamburger menu', () => {
    cy.get('.q-btn__content > .material-icons').click()
  })
  it('clicking "Docs" navigates to a new url', () => {
    cy.get('.q-btn__content > .material-icons').click()
    cy.contains('Docs').click()
  })
  it('clicking "About" navigates to a new page', () => {
    cy.get('.q-btn__content > .material-icons').click()
    cy.contains('About').click()
    cy.url().should('include', 'about')
  })
})

// ** The following code is an example to show you how to write some tests for your home page **
//
// describe('Home page tests', () => {
//   beforeEach(() => {
//     cy.visit('/');
//   });
//   it('has pretty background', () => {
//     cy.dataCy('landing-wrapper')
//       .should('have.css', 'background').and('match', /(".+(\/img\/background).+\.png)/);
//   });
//   it('has pretty logo', () => {
//     cy.dataCy('landing-wrapper img')
//       .should('have.class', 'logo-main')
//       .and('have.attr', 'src')
//       .and('match', /^(data:image\/svg\+xml).+/);
//   });
//   it('has very important information', () => {
//     cy.dataCy('instruction-wrapper')
//       .should('contain', 'SETUP INSTRUCTIONS')
//       .and('contain', 'Configure Authentication')
//       .and('contain', 'Database Configuration and CRUD operations')
//       .and('contain', 'Continuous Integration & Continuous Deployment CI/CD');
//   });
// });
