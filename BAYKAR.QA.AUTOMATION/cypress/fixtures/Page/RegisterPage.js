/// <reference types="cypress" />

class RegisterPage {
   fillEmail(value){
    const field = cy.get("#id_email")
    field.clear()
    field.type(value)
   }
   fillPasswordOne(value){
    const field = cy.get("input[name='password1']")
    field.clear()
    field.type(value)
   }
   fillPasswordSecond(value){
    const field = cy.get("input[name='password2']")
    field.clear()
    field.type(value)
   }
   clickCaptcha(){
      cy.get('[style="width: 304px; height: 78px;"] > div > iframe').click()
   }
   clickRegister(){
    const button = cy.get("#kt_sign_in_submit")
    button.click()
   }

  
   registerRandomOnePerson(email , password){
   
    this.fillEmail(email)
    this.fillPasswordOne(password)
    this.fillPasswordSecond(password)
    cy.wait(500)
    this.clickCaptcha()
    cy.wait(500)
    this.clickRegister()

   }

  }
  
  export default RegisterPage
  