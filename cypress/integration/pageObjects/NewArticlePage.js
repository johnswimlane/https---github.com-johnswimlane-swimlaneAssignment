class NewArticlePage{
   getTitleInput(){
       return cy.get('#title')
   }
   getBodyField(){
     return cy.get('#desc')
   }
   getTagsField(){
      return cy.get('#tags_tag')
   }
   getSaveButton(){
      return cy.get('button').contains("Save")
   }
   getProfileLink(){
      return cy.get('a[title="Profile"]')
   }
   getSuccessMessage(){
      return cy.get('.fade')
   }
}
export default NewArticlePage 