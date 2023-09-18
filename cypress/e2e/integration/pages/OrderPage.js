class OrderPage {
    fillOrderDetails(name, country, city, card, month, year) {
        // Fill in the order details using the given parameters
    }

    confirmOrder() {
        cy.get('[onclick="purchaseOrder()"]').click()
    }

    getOrderConfirmation() {
        return cy.get('.sweet-alert').invoke('text')
    }
}
export default OrderPage;
