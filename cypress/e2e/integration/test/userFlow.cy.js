import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import { generateCredentials } from '../functions/functions';

const home = new HomePage();
const login = new LoginPage();

describe('User Flow', () => {

    const credentials = generateCredentials();
    const username=credentials.username;
    const password=credentials.password

    beforeEach('Sign Up as a new user', () => {
        home.visit();
    });

    it('Sign Up as a new user', () => {
        home.goToSignUp();
        login.signUp(username, password);
        cy.log(username)
        cy.log(password)
    });

    
    it('Log in and Log out', () => {
        home.goToLogin();
        login.login(username, password);
        home.logOut();
        cy.log(username)
        cy.log(password)
    });

    
    it('Try logging in with invalid user', () => {
        home.goToLogin();
        login.checkWrongCredentials('invalidUser', 'invalidPass');

    });
    
});
