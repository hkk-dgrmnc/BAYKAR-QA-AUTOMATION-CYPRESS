/// <reference types="cypress" />



class LoginPage {

      clickGoRegisterButton(){
        const button = cy.get("a.link-primary").contains("Hesap Oluştur")
        button.click()
      }
      fillEmail(value){
        const field = cy.get("input[name='login']")
        field.clear()
        field.type(value)
      }
      fillPassword(value){
        const field = cy.get("input[name='password']")
        field.clear()
        field.type(value)
      }
      clickCaptcha(){
        cy.get('[style="width: 304px; height: 78px;"] > div > iframe').click()
     }
     clickEnter(){
      const button = cy.get("#kt_sign_in_submit")
      button.click()
     }
     
     beLogin(email,password){
      this.fillEmail(email)
      this.fillPassword(password)
      this.clickCaptcha()
      this.clickEnter()
     }
  }
  
  export default LoginPage