describe('App Component', () => {
    beforeEach(() => {
        // Visit the home page
        cy.visit('http://localhost:3000/'); // Replace '/' with the actual URL or route to your home page
    });

    it('displays the NavBar', () => {
        cy.get('.navbar').should('exist');
    });

    it('navigates to the Shop page', () => {
        cy.get('a[href="/"]').click();
        cy.url().should('include', '/');
        cy.wait(2000); // Adjust the wait time as needed
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
        cy.get('h1').should('contain', 'Cart'); // Adjust the selector as needed

    });



    it('does not navigate to the Secured Page when not logged in', () => {
        // Assuming the user is not logged in

        // Verify that the user is not logged in
        cy.get('.navbar').find('svg[data-icon="user"]').should('not.exist');

        // Attempt to navigate to the Secured Page
        cy.get('a[href="/secured"]').click();
        cy.url().should('not.include', '/secured');
    });
});