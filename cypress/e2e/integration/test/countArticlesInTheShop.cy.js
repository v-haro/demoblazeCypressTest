import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import ProductPage from '../pages/ProductPage';
import CartPage from '../pages/CartPage';

describe('E-commerce Workflow', () => {
    const home = new HomePage();
    const login = new LoginPage();
    const product = new ProductPage();
    const cart = new CartPage();

    before(() => {
        cy.fixture('testData').as('data');
    });

    it('Test Scenario 4', function () {
        // Log in
        home.visit();
        home.goToLogin();
        login.login(this.data.username, this.data.password);

        let articles = 0;
        // Function to count articles in a category
        const countArticlesInCategory = (categoryName) => {
            home.goToCategory(categoryName);
            return cy.get('div#tbodyid div.card-block').its('length');
        };

        // Chain the counting for each category
        countArticlesInCategory('Phones').then((count) => {
            articles += count;
            return countArticlesInCategory('Laptops');
        }).then((count) => {
            articles += count;
            return countArticlesInCategory('Monitors');
        }).then((count) => {
            articles += count;
            // Log the final count
            cy.log('Number of articles counted:', articles);

            // Assert that the counted articles match the full quantity from the home page
            expect(articles).to.equal(23);
        });
    });
});
