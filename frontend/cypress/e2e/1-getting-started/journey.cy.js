/* global cy */
/// <reference types="cypress" />

describe('dev-academy-2022-fall-exercise', () => {
  beforeEach(() => {
    cy.request('POST', 'http://localhost:3001/api/journeys/reset')
    cy.request('POST', 'http://localhost:3001/api/bikeStations/reset')
    const journey1 = {
      'Departure': '2021-05-31T23:54:48',
      'Return': '2021-06-01T00:00:57',
      'Departure station id': '292',
      'Departure station name': 'Koskelan varikko',
      'Return station id': '133',
      'Return station name': 'Paavalinpuisto',
      'Covered distance (m)': '1713',
      'Duration (sec.)': '366'
    }

    const journey2 = {
      'Departure': '2021-05-31T23:56:59',
      'Return': '2021-06-01T00:07:14',
      'Departure station id': '082',
      'Departure station name': 'Töölöntulli',
      'Return station id': '113',
      'Return station name': 'Pasilan asema',
      'Covered distance (m)': '1870',
      'Duration (sec.)': '611'
    }

    const journey3 = {
      'Departure': '2021-05-31T23:56:44',
      'Return': '2021-06-01T00:03:26',
      'Departure station id': '123',
      'Departure station name': 'Näkinsilta',
      'Return station id': '121',
      'Return station name': 'Vilhonvuorenkatu',
      'Covered distance (m)': '1025',
      'Duration (sec.)': '399'
    }

    const journey4 = {
      'Departure': '2021-05-31T23:56:23',
      'Return': '2021-06-01T00:29:58',
      'Departure station id': '004',
      'Departure station name': 'Viiskulma',
      'Return station id': '065',
      'Return station name': 'Hernesaarenranta',
      'Covered distance (m)': '4318',
      'Duration (sec.)': '2009'
    }

    const journey5 = {
      'Departure': '2021-05-31T23:56:11',
      'Return': '2021-06-01T00:02:02',
      'Departure station id': '004',
      'Departure station name': 'Viiskulma',
      'Return station id': '065',
      'Return station name': 'Hernesaarenranta',
      'Covered distance (m)': '1400',
      'Duration (sec.)': '350'
    }
    cy.request('POST', 'http://localhost:3001/api/journeys/', journey1)
    cy.request('POST', 'http://localhost:3001/api/journeys/', journey2)
    cy.request('POST', 'http://localhost:3001/api/journeys/', journey3)
    cy.request('POST', 'http://localhost:3001/api/journeys/', journey4)
    cy.request('POST', 'http://localhost:3001/api/journeys/', journey5)

    const bikeStations1 = {
      'FID': '1',
      'ID': '501',
      'Nimi': 'Hanasaari',
      'Name': 'Hanasaari',
      'Osoite': 'Hanasaarenranta 1',
      'Adress': 'Hanaholmsstranden 1',
      'Kaupunki': 'Espoo',
      'Stad': 'Esbo',
      'Operaattor': 'CityBike Finland',
      'Kapasiteet': '10',
      'x': '24.840319',
      'y': '60.16582'
    }

    const bikeStations2 = {
      'FID': '2',
      'ID': '503',
      'Nimi': 'Keilalahti',
      'Name': 'Keilalahti',
      'Osoite': 'Keilalahdentie 2',
      'Adress': 'Kägelviksvägen 2',
      'Kaupunki': 'Espoo',
      'Stad': 'Esbo',
      'Operaattor': 'CityBike Finland',
      'Kapasiteet': '28',
      'x': '24.827467',
      'y': '60.171524',
    }

    const bikeStations3 = {
      'FID': '3',
      'ID': '505',
      'Nimi': 'Westendinasema',
      'Name': 'Westendinasema',
      'Osoite': 'Westendintie 1',
      'Adress': 'Westendvägen 1',
      'Kaupunki': 'Espoo',
      'Stad': 'Esbo',
      'Operaattor': 'CityBike Finland',
      'Kapasiteet': '16',
      'x': '24.805758',
      'y': '60.168266',
    }

    const bikeStations4 = {
      'FID': '4',
      'ID': '507',
      'Nimi': 'Golfpolku',
      'Name': 'Golfpolku',
      'Osoite': 'Golfpolku 3',
      'Adress': 'Golfstigen 3',
      'Kaupunki': 'Espoo',
      'Stad': 'Esbo',
      'Operaattor': 'CityBike Finland',
      'Kapasiteet': '16',
      'x': '24.796136',
      'y': '60.168143',
    }

    const bikeStations5 = {
      'FID': '192',
      'ID': '082',
      'Nimi': 'Töölöntulli',
      'Name': 'Töölöntulli',
      'Osoite': 'Mannerheimintie 112',
      'Adress': 'Mannerheimvägen 112',
      'Kaupunki': 'Helsinki',
      'Stad': 'Helsingfors',
      'Operaattor': 'CityBike Finland',
      'Kapasiteet': '16',
      'x': '24.912893019047',
      'y': '60.1909233737999',
    }
    cy.request('POST', 'http://localhost:3001/api/bikeStations/', bikeStations1)
    cy.request('POST', 'http://localhost:3001/api/bikeStations/', bikeStations2)
    cy.request('POST', 'http://localhost:3001/api/bikeStations/', bikeStations3)
    cy.request('POST', 'http://localhost:3001/api/bikeStations/', bikeStations4)
    cy.request('POST', 'http://localhost:3001/api/bikeStations/', bikeStations5)
  })

  it('displays two links and data by default', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Journey list')
    cy.contains('Station list')
    cy.contains('Departure station: Töölöntulli | Return station: Pasilan asema | Covered distance in km: 1.87 | Duration in min: 10')
    cy.contains('Departure station: Töölöntulli | Return station: Pasilan asema | Covered distance in km: 1.87 | Duration in min: 10')
    cy.contains('Departure station: Näkinsilta | Return station: Vilhonvuorenkatu | Covered distance in km: 1.025 | Duration in min: 7')
    cy.contains('Departure station: Viiskulma | Return station: Hernesaarenranta | Covered distance in km: 4.318 | Duration in min: 33')
    cy.contains('Departure station: Viiskulma | Return station: Hernesaarenranta | Covered distance in km: 1.4 | Duration in min: 6')

  })
  it('displays station list when clicked', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#stationList').click()
    cy.contains('Departure station: Koskelan varikko')
    cy.contains('Departure station: Töölöntulli')
    cy.contains('Departure station: Näkinsilta')
    cy.contains('Departure station: Viiskulma')
  })
  it('displays single station view when clicked', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#stationList').click()
    cy.contains('Töölöntulli').click()
    cy.contains('Station name: Töölöntulli')
    cy.contains('Mannerheimintie 112')
    cy.contains('Total number of journeys starting from the station: 1')
    cy.contains('Total number of journeys ending at the station: 0')

  })
})
