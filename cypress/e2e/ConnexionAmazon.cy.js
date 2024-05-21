describe('My First Test: Connexion Amazon', () => {  
  it('recherche sur un Produit', () => {  

    // Effacer tous les cookies  
    cy.clearAllCookies()

    // Effacer tout le stockage local
    cy.clearAllLocalStorage()

    // Visiter le site Amazon
    cy.visit('https://www.amazon.com/')

    // Saisir "Acer" dans la barre de recherche et appuyer sur Entrée
    cy.get('#twotabsearchtextbox').type('Acer{enter}')
    
    // Cliquer sur le panier
    cy.get('#nav-cart').click()
    
    // Cliquer sur le bouton de "connection"
    cy.get('#a-autoid-0-announce').click()

    // Saisir l'adresse email
    cy.get('#ap_email').type('houssemhajji414@gmail.com')
    
    // Cliquer sur le bouton "Continuer"
    cy.get('.a-button-inner > #continue').click()
    
    // Saisir le mot de passe
    cy.get('#ap_password').type('azerTY')

    //Cliquer sur le bouton de connexion
    cy.get('#signInSubmit').click()

    // Cliquer pour procéder au paiement
    cy.get('#sc-buy-box-ptc-button > .a-button-inner > .a-button-input').click()
    
    // Ouvrir le menu déroulant pour sélectionner le pays
    cy.get('#address-ui-widgets-countryCode > .a-button-inner > .a-button-text').click()

    //Sélectionner la Tunisie
    cy.get('#address-ui-widgets-countryCode-dropdown-nativeId_223').click()

    // Attendre 2 secondes
    cy.wait(2000)

     // Saisir le nom complet
      cy.get('#address-ui-widgets-enterAddressFullName').type('Houssem Hajji')

      // Saisir l'adresse ligne 1
      cy.get('#address-ui-widgets-enterAddressLine1').type('Rue de Carthage')

      // Saisir la ville
      cy.get('#address-ui-widgets-enterAddressCity').type('Ariana')

      // Saisir le code postal
      cy.get('#address-ui-widgets-enterAddressPostalCode').type('2081')

      // Saisir le numéro de téléphone
      cy.get('#address-ui-widgets-enterAddressPhoneNumber').type('21123456')

      // Cocher l'option pour utiliser l'adresse par défaut
      cy.get('#address-ui-widgets-use-as-my-default').check()
      
      // Cliquer pour soumettre le formulaire d'adresse
      cy.get('#address-ui-widgets-form-submit-button > .a-button-inner > .a-button-input').click()
    })
  
  })