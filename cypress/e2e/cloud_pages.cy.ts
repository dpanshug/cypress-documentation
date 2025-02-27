describe('Visit Cloud pages', () => {
  before(() => {
    cy.task('createFileTree', { path: 'cloud' }).then((urls) => {
      // console.log('urlsLength', urls.length)
      Cypress.env({ urls })
    })
  })

  // Well, this number is hardcoded and should match the length of urls
  Cypress._.range(0, 29).forEach(index => {
    it(`Visit Cloud page ${index} `, () => {
      cy.visit(Cypress.env().urls[index])
      cy.get('h1').should('be.visible')
    })
  })
})