describe('Dashboard flows', () => {

  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/v1/reservations"), [
      {
        "id": 1,
        "name": "Christie",
        "date": "12/29",
        "time": "7:00",
        "number": 12
      },
      {
        "id": 2,
        "name": "Leta",
        "date": "4/5",
        "time": "7:00",
        "number": 2
      },
      {
        "id": 3,
        "name": "Pam",
        "date": "1/21",
        "time": "6:00",
        "number": 4
      }
    ]

    cy.visit('http://localhost:3000')
  })

  it('Should be able to render correct dashboard elements', () => {
    cy.contains('Turing Cafe Reservations')
      .get('input')
      .should('have.attr', 'placeholder')
      .should('include', 'Name')
  })

  it('Should be able to select and fill the form inputs and be able to submit the new reservation', () => {
    cy.get('input[name="name"]').type('Dana').should('have.value', 'Dana')
      .get('input[name="date"]').type('10/31').should('have.value', '10/31')
      .get('input[name="time"]').type('6:00').should('have.value', '6:00')
      .get('input[name="number"]').type('2').should('have.value', '2')
      .get('.make-res-btn').click()
      .get('.res-box').get('h4').contains('Dana')
  })
})