describe('My First Test: Connexion Amazon', () => {  
  it('recherche sur un Produit', () => {    
    cy.clearAllCookies()
    cy.clearAllLocalStorage()
      cy.visit('https://www.amazon.com/')
      //cy.wait(5000)
      cy.get('#twotabsearchtextbox').type('Acer{enter}')
     // cy.wait(5000)
      cy.get('#a-autoid-1-announce').click()
      //cy.wait(5000)
      cy.get('#nav-cart').click()
      //cy.get('#a-autoid-0-announce').click()
   //cy.get('#ap_email').type('houssemhajji4@gmail.com')
   //cy.get('.a-button-inner > #continue').click()
  // cy.get('#continue').click()
   /*cy.get('#cvf-input-code').type('656299')
   cy.get('#cvf-submit-otp-button > .a-button-inner > .a-button-input').click()
   cy.get('.a-input-text').type('Houssem Hajji')
   cy.get('.a-button-input').click()*/
      //cy.get('#quantity_3').click()
      //cy.get('#a-autoid-0-announce > .a-size-base-plus').click()
      //cy.get('#a-autoid-1').click()
      //cy.wait(5000)
      //cy.get('#a-autoid-8-announce > .a-size-base-plus').click()
     // cy.wait(5000)
     // cy.get('#ap_email').type('houssemhajji4@gmail.com')
     // cy.wait(5000)
      //cy.get('.a-button-inner > #continue').click()
     // cy.get('#a-autoid-1').click()
    })
    /*it('creer un compte',()=> {
      
      cy.get('#ap_customer_name').type('houssem hajji')
      cy.get('#ap_email').type('houssemhajji4@gmail.com')
      cy.get('#ap_password').type('1025azerTY?')
      cy.get('#ap_password_check').type('1025azerTY?')
      cy.get('#continue').click()

    })*/
  
  })
//})
