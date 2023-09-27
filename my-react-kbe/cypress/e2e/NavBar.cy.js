describe('NavBar Component', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });

    it('displays the Shop link', () => {
        cy.get('a[href="/"]').should('contain', 'Shop');
    });

    it('navigates to the Shop page when Shop link is clicked', () => {
        cy.get('a[href="/"]').click();
        cy.url().should('include', '/');
    });

    it('displays the Contact link', () => {
        cy.get('a[href="/contact"]').should('contain', 'Contact');
    });

    it('navigates to the Contact page when Contact link is clicked', () => {
        cy.get('a[href="/contact"]').click();
        cy.url().should('include', '/contact');
    });

    it('displays the Cart link', () => {
        cy.get('a[href="/cart"]').click();
        cy.url().should('include', '/cart');
        cy.get('h1').should('contain', 'Your Cart Items');
    });

    it('navigates to the Cart page when Cart link is clicked', () => {
        cy.get('a[href="/cart"]').click();
        cy.url().should('include', '/cart');
    });

     it('displays the Shopping Cart icon', () => {
         cy.get('.navbar').find('svg').should('exist');
     });


    it('displays the User icon if not logged in', () => {
        // Assuming not logged in
        cy.get('.navbar').find('svg').should('exist');
    });



    it('navigates to the login page when the Login button is clicked', () => {
        cy.get('a[href="/login"]').click();

        // Assert that the URL contains the expected components
        cy.url().should('include', '/realms/Art-Shop/protocol/openid-connect/auth');
        cy.url().should('include', 'client_id=my-client');
        cy.url().should('include', 'redirect_uri=http%3A%2F%2Flocalhost%3A3000');
        cy.url().should('include', 'response_type=code');
        cy.url().should('include', 'scope=openid');
        cy.url().should('include', 'nonce=');

    })


});