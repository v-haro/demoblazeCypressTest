class HomePage {
    visit() {
        cy.visit('https://www.demoblaze.com/')
    }

    goToLogin() {
        cy.get('#login2').click()
    }

    goToSignUp() {
        cy.get('#signin2').click()
    }

    logOut() {
        cy.get('#logout2').click()
    }

    goToPhones() {
        cy.wait(2000);
        cy.get(':nth-child(2) > .nav-link').click()
    }

    goToCategory(categoryName) {
        cy.wait(2000);
        cy.get('a').contains(categoryName).click();
    }

    goToCart() {
        cy.wait(2000);
        cy.get('a').contains('Cart').click();
    }

    selectProduct1(){
        cy.wait(2000);
        cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click();
    }

    selectProduct2(){
        cy.wait(2000);
        cy.get(':nth-child(2) > .card > .card-block > .card-title > .hrefch').click();
    }

    goToHome(){
        cy.wait(2000);
        cy.get('a').contains('Home').click();
    }

}
export default HomePage;
