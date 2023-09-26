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
        cy.get('h1').should('contain', 'Shop'); // Adjust the selector as needed
    });

    it('navigates to the Contact page', () => {
        cy.get('a[href="/contact"]').click();
        cy.url().should('include', '/contact');
        cy.get('h1').should('contain', 'Contact'); // Adjust the selector as needed
    });

    it('navigates to the Cart page', () => {
        cy.get('a[href="/cart"]').click();
        cy.url().should('include', '/cart');
        cy.get('h1').should('contain', 'Cart'); // Adjust the selector as needed
    });

    it('navigates to the Secured Page when logged in', () => {
        // Assuming you have a login mechanism
        // Perform a login action here
        // For example, you might click a "Log In" button or use a mock authentication function

        // Verify that the user is logged in
        cy.get('.navbar').find('svg[data-icon="user"]').should('exist');

        // Navigate to the Secured Page
        cy.get('a[href="/secured"]').click();
        cy.url().should('include', '/secured');
        cy.get('h1').should('contain', 'Secured Page'); // Adjust the selector as needed
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