class NavigationMenuPage{
    getProfileLink(){
       return cy.get('a[title="Profile"]')
    }
    getLogOutLink(){
       return cy.get('a[title="logout"]')
    }   
    getNewArticleLink(){
        return cy.get('a[title="new article"]')
    }
}
export default NavigationMenuPage