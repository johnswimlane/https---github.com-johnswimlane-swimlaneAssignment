/// <reference types = "Cypress"/>
import CreateLoginPage from './pageObjects/CreateLoginPage'
import NavigationMenuPage from './pageObjects/NavigationMenuPage'
import NewArticlePage from './pageObjects/NewArticlePage'

describe('Create a new user and add a record', function(){
    // 1. Create a user.
    // 2. Log in as the user you created.
    // 3. Create a record and specify the title, body, and tags for the record.
    // 4. Verify the record was created successfully.
    // 5. Verify the profile tab shows the user’s name.
    // 6.  Logout button successfully logs the user out
    it('Test1', () => {
    
      cy.visit("http://localhost:3000")
        const navigationMenuPage = new NavigationMenuPage()
        const createLoginPage = new CreateLoginPage()
        const newArticlePage = new NewArticlePage()
        // 1. Create a user      
        createLoginPage.getLoginLink().click()
        createLoginPage.getSignUpLink().click()
        createLoginPage.getEmailInput().type('some'+Date.now()+'@email.com')
        createLoginPage.getPasswordInput().type('password1')
        createLoginPage.getFullNameInput().type('full name')
        createLoginPage.getUserNameInput().type('username')
        // 2. Log in as the user you created.
        createLoginPage.getLoginButton().click() 
        // 3. Create a record and specify the title, body, and tags for the record.
        navigationMenuPage.getNewArticleLink().click()
        newArticlePage.getTitleInput().type('A title')
        newArticlePage.getBodyField().type('Field text') 
        newArticlePage.getTagsField().type('aTag')
        newArticlePage.getSaveButton().click()
        // 4. Verify the record was created successfully.
        newArticlePage.getSuccessMessage().contains('Successfully created article!')
        // 5. Verify the profile tab shows the user’s name.
        navigationMenuPage.getProfileLink().should('be.visible');
        navigationMenuPage.getProfileLink().click() 
        cy.get('h1').contains('full name')
        // 6.  Logout button successfully logs the user out
        navigationMenuPage.getLogOutLink().click()
        cy.get('h1').contains('Login')
    })
    
})
