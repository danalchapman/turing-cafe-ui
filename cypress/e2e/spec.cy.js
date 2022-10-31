describe('Dashboard flows', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Should be able to render correct dashboard elements', () => {
    cy.contains('Turing Cafe Reservations')
      .get('input')
      .should('have.attr', 'placeholder')
      .should('include', 'Name')
  })

  it('Should be able to select the name, date, time, and number inputs and fill them with the corresponding values', () => {
    cy.get('input[name="name"]') .type('Dana') .should('have.value', 'Dana')
      .get('input[name="date"]') .type('10/31') .should('have.value', '10/31')
      .get('input[name="time"]') .type('6:00') .should('have.value', '6:00')
      .get('input[name="number"]') .type('2') .should('have.value', '2')
  })

  it('Should be able to see pre-existing reservations', () => {
    cy.intercept("GET", "http://localhost:3001/api/v1/reservations/1", {
      id: 1,
      name: "Christie",
      date: "12/29",
      time: "7:00",
      number: 12
    })

    cy.intercept("GET", "http://localhost:3001/api/v1/reservations/2", {
      id: 1,
      name: "Leta",
      date: "4/5",
      time: "7:00",
      number: 2
    })

    cy.intercept("GET", "http://localhost:3001/api/v1/reservations/3", {
      id: 1,
      name: "Pam",
      date: "1/21",
      time: "6:00",
      number: 4
    })
  })

  // test to check user flow of adding a new res to the page
})