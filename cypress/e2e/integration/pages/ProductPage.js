class ProductPage {
    selectProduct(productName) {
        cy.contains(productName).click()
    }

    addToCart() {
        cy.get('.col-sm-12 > .btn').click();
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Product added.');
        });
    }

    goToCart() {
        cy.get('#cartur').click()
    }
}
export default ProductPage;
