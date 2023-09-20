import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import ArticleCounter from '../functions/articleCounter';

describe('E-commerce Workflow', () => {
    const home = new HomePage();
    const login = new LoginPage();
    const articleCounter = new ArticleCounter();

    before(() => {
        cy.fixture('testData').as('data');
    });

    it('Test Scenario 4', function () {
        // Log in
        home.visit();
        home.goToLogin();
        login.login(this.data.username, this.data.password);

        // Get the total count of articles
        articleCounter.getTotalArticles().then((articles) => {
            // Log the final count
            cy.log('Number of articles counted:', articles);

            // Assert that the counted articles match the full quantity from the home page
            expect(articles).to.equal(23);
        });
    });
});
