
describe("Parcours amazon d'un achat prouit jusqu'a le paiement", () => {
  before( () =>{
    // Effacer tous les cookies  
    cy.clearAllCookies()
    // Effacer tout le stockage local
    cy.clearAllLocalStorage()

  });

  it('Récuperer les données de test', () => {  
  });

  it('Se connecter a Amazon', () => {  
    // Visiter le site Amazon
    cy.visit('https://www.amazon.com/')
  });

  it('Authentier le compte Amazon', () => {

    // Ajouter Step 
    cy.get('#nav-link-accountList').click()

    // Saisir l'adresse email
    cy.get('#ap_email').type('houssemhajji414@gmail.com')
  
    //Cliquer sur le bouton "Continuer"
    cy.get('.a-button-inner > #continue').click()
    
    // Saisir le mot de passe
    cy.get('#ap_password').type('azerTY')

    //Cliquer sur le bouton de connexion
    cy.get('#signInSubmit').click()
  });

  it('Chercher un produit', () => {  
    // Saisir le produit "Acer" dans la barre de recherche et appuyer sur Entrée
    cy.get('#twotabsearchtextbox').type('Acer{enter}')
    // Ajouter le premier produit trouvé au panier
    cy.get('#nav-cart').click()
  });

  it('Consulter panier', () => {
    cy.get('#nav-cart-count').click() 

  });
  

  it('Procéder le paiement',()=>{
    // Cliquer pour procéder au paiement
    cy.get('#sc-buy-box-ptc-button > .a-button-inner > .a-button-input').click()
  
  })
  
})