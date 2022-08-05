/* global cy */
/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {

  })

  it('displays two links and data by default', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Journey list')
    cy.contains('Station list')
    cy.contains('Departure station: Töölöntulli | Return station: Pasilan asema | Covered distance in km: 1.87 | Duration in min: 10')
  })
  it('displays station list when clicked', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#stationList').click()
    cy.contains('Departure station: Töölöntulli')
  })
  it('displays single station view when clicked', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#stationList').click()
    cy.contains('Töölöntulli').click()
    cy.contains('Station name: Töölöntulli')
  })
})
