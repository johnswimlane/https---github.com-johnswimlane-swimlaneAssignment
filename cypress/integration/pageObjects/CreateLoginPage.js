class CreateLoginPage{
    getLoginLink(){
        return cy.get('a[title=Login]')
    }
    getSignUpLink(){
        return cy.get('.show-signup')
    }
    getEmailInput(){
        return cy.get('#email')
    }
    getPasswordInput(){
        return cy.get('#password')
    }   
    getFullNameInput(){
        return cy.get('#name') 
    }
    getUserNameInput(){
        return cy.get('input[name=username]')
    }
    getLoginButton(){
         return cy.get('button').contains("Sign up")
    }
}
export default CreateLoginPage 