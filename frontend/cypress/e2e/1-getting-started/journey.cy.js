/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('displays two links and data by default', () => {
    cy.contains('Journey list')
    cy.contains('Station list')
    cy.contains('Departure station: Töölöntulli | Return station: Pasilan asema | Covered distance in km: 1.87 | Duration in min: 10')
  })
  it('displays station list when clicked', () => {
    cy.get('#stationList').click()
    cy.contains('Departure station: Töölöntulli')
  })
  it('displays single station view when clicked', () => {
    cy.contains('#62ebbf5d119bb329c9ca255d29c9ca255d').click()
    cy.contains('Station name: Töölöntulli')
  })
 
})
