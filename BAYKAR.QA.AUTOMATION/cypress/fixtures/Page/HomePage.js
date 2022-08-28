/// <reference types="cypress" />

class HomePage {
    visit() {
      cy.visit("https://kariyer.baykartech.com/")
    }
    clickEnterButton(){
        const button = cy.get("div.button>ul>li").contains("GİRİŞ")
        button.click()
        cy.wait(1000)
    }
  }
  
  export default HomePage
  