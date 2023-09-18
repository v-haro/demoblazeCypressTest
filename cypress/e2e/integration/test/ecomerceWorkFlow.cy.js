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

    it('Test Scenario 2 and 3', function() {
        // Log in
        home.visit();
        home.goToLogin();
        login.login(this.data.username, this.data.password);

        // Go to Phones category and add two phones to cart
        //1st phone
        home.goToCategory('Phones');
        home.selectProduct1();
        product.addToCart();
        home.goToHome();
        
        //2nd pone
        home.goToCategory('Phones');
        home.selectProduct2();
        product.addToCart();

        // Go to cart, remove an item and place an order
        home.goToCart();
        cart.removeFirstItem();
        cart.placeOrder(this.data.userData);
        cart.validateOrder();
    });
});
