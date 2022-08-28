/// <reference types="cypress" />

import SelectRandomPerson from "../fixtures/RandomVariable/SelectedRandomPerson.js"

import HomePage from "../fixtures/Page/HomePage.js"
import LoginPage from "../fixtures/Page/LoginPage.js"
import RegisterPage from "../fixtures/Page/RegisterPage.js"

const homePage = new HomePage()
const loginPage = new LoginPage()
const registerPage = new RegisterPage()

context('Test Suit 1: Register ', () => {

it('TC1.1 : Go to Url and Check it', () => {
    homePage.visit()
    cy.get('div.button>ul>li').then(function (e) {
        const t = e.text()
        expect(t).to.contains('GİRİŞ')
        cy.wait(1000)
      })
})
it('TC1.2 : Go to RegisterPage and Check it', () => {
    homePage.clickEnterButton()
    loginPage.clickGoRegisterButton()
    cy.url().should('include', '/signup')
})
it('TC1.3 : Fill information, Register and check it', () => {
    const selectRandomPerson = new SelectRandomPerson()
    const randomPerson = selectRandomPerson.randomPerson()

    registerPage.registerRandomOnePerson(randomPerson.selectedEmail , randomPerson.selectedPassword)
    cy.get("h1.mb-3").should('have.text', "E-Posta doğrulama bağlantınız mail adresinize gönderildi.")

})








})
