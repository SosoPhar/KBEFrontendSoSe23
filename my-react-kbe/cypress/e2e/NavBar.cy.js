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

    
});