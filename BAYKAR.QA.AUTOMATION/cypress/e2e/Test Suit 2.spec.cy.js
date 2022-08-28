/// <reference types="cypress" />

import SelectRandomPerson from "../fixtures/RandomVariable/SelectedRandomPerson.js"

import loginInformation from "../fixtures/Constants/loginInformation.json"

import HomePage from "../fixtures/Page/HomePage.js"
import LoginPage from "../fixtures/Page/LoginPage.js"


const homePage = new HomePage()
const loginPage = new LoginPage()


context('Test Suit 2: E2E ', () => {

it('TC2.1 : Go to Url,LoginPage and Check it', () => {
    homePage.visit()
    homePage.clickEnterButton()
    cy.url().should('include', '/login')
})
it('TC2.2 : Fill informations, be Login and Check it', () => {
    loginPage.beLogin(loginInformation.email,loginInformation.password)
    
})







})