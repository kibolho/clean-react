import * as Helper from '../utils/helpers'

describe('Public Routes', () => {
  beforeEach(() => {
    cy.fixture('account').then(account => {
      Helper.setLocalStorageItem('account', account)
    })
  })
  it('Should login if login has token', () => {
    cy.visit('login')
    Helper.testUrl('/')
  })

  it('Should login if signup has token', () => {
    cy.visit('/signup')
    Helper.testUrl('/')
  })
})
