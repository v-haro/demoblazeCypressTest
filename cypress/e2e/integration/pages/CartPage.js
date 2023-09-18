class CartPage {

    placeOrder(userData) {
        cy.get('button').contains('Place Order').click();
        cy.wait(4000);

        cy.get('#name').type(userData.name);
        cy.get('#country').type(userData.country);
        cy.get('#city').type(userData.city);
        cy.get('#card').type(userData.card);
        cy.get('#month').type(userData.month);
        cy.get('#year').type(userData.year);
        

    }

    removeFirstItem() {
        // Set up the interceptor
        cy.intercept('POST', 'https://api.demoblaze.com/deleteitem').as('deleteItemRequest');

        cy.get('#tbodyid > :nth-child(1) > :nth-child(4) > a').click();

        // Wait for the request to complete
        cy.wait('@deleteItemRequest').its('response.statusCode').should('eq', 200);
    }

    validateOrder(){
                // Set up the interceptor
                cy.intercept('POST', 'https://api.demoblaze.com/deletecart').as('deleteCartRequest');
                cy.get('button').contains('Purchase').click();
                cy.get('button').contains('OK').click();
                // Wait for the request to complete
                cy.wait('@deleteCartRequest').its('response.statusCode').should('eq', 200);
    }

}
export default CartPage;
