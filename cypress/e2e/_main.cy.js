export const mock = (method, url, fixture) =>
  cy.intercept(method, url, { fixture }).as(fixture)

export const initialize = () => {
  cy.intercept('/api/**/*', req => {
    throw new Error('request not stubbed : ' + req.url)
  })
}
