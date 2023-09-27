describe('App Component', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });

    it('displays the NavBar', () => {
        cy.get('.navbar').should('exist');
    });

    it('navigates to the Shop page', () => {
        cy.get('a[href="/"]').click();
        cy.url().should('include', '/');
        cy.wait(2000);
        cy.get('a[href="/"]').should('contain', 'Shop');
    });

    it('navigates to the Contact page', () => {
        cy.get('a[href="/contact"]').click();
        cy.url().should('include', '/contact');
        cy.wait(2000); // Adjust the wait time as needed
        cy.get('a[href="/contact"]').should('contain', 'Contact');
    });

    it('navigates to the Cart page', () => {
        cy.get('a[href="/cart"]').click();
        cy.url().should('include', '/cart');
        cy.get('h1').should('contain', 'Cart');

    });

});