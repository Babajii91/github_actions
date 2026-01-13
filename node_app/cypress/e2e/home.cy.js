describe('Page d’accueil', () => {
  it('affiche le message de bienvenue', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Bienvenue sur mon serveur CI/CD !');
  });
});
