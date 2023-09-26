import {User } from "phosphor-react"; // Import the User icon

describe('NavBar Component', () => {
    beforeEach(() => {
        // Visit the home page where the NavBar component is located
        cy.visit('http://localhost:3000/'); // Replace '/' with the actual URL or route to your home page
    });

    it('displays the Shop link', () => {
        cy.get('a[href="/"]').should('contain', 'Shop');
    });

    it('displays the Contact link', () => {
        cy.get('a[href="/contact"]').should('contain', 'Contact');
    });

    // it('displays the Cart link', () => {
    //     cy.get('a[href="/cart"]').should('contain', 'Cart');
    // });
    //
    // it('displays the Shopping Cart icon', () => {
    //     cy.get('.navbar').find('svg[data-icon="shopping-cart"]').should('exist');
    // });
    //
    // it('displays the cart item count if there are items in the cart', () => {
    //     // Simulate having items in the cart (adjust as needed)
    //     const totalCartItems = 3;
    //     cy.window().its('ShopContext.cartItems').invoke('update', totalCartItems);
    //
    //     cy.get('.cart-item-count').should('contain', totalCartItems);
    // });

    // it('displays the User icon if not logged in', () => {
    //     // Assuming that the "User" icon appears after a login action
    //     // Simulate being logged out
    //     // Perform any actions that trigger the rendering of the "User" icon
    //     // For example, you might click a "Log Out" button or perform other actions
    //
    //     // Wait for the "User" icon to be rendered
    //     cy.wait(1000); // Adjust the wait time as needed, it's in milliseconds
    //
    //     // Now, check for the existence of the "User" icon
    //     cy.get('.navbar').find('svg[data-icon="user"]').should('exist');
    // });

    // it('displays the Login link if not logged in', () => {
    //     // Assuming not logged in
    //     cy.get('a[href="/login"]').should('contain', 'Login');
    // });

    // it('displays the User icon if not logged in', () => {
    //     // Intercept the network request associated with the login action
    //     cy.intercept('POST', '/login', (req) => {
    //         // Perform any actions that trigger the login request
    //         // For example, you might click a "Log In" button or perform other actions
    //     }).as('loginRequest');
    //
    //     // Perform any actions that trigger the login request (e.g., click a "Log In" button)
    //     // ...
    //
    //     // Wait for the login request to complete
    //     cy.wait('@loginRequest');
    //
    //     // Now, check for the existence of the "User" icon
    //     cy.get('.navbar').find('svg[data-icon="user"]').should('exist');
    // });
});