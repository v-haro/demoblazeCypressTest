class LoginPage {

    signUp(username, password) {
        cy.wait(1000);
        cy.get('#sign-username').type(username);
        cy.wait(1000);
        cy.get('#sign-password').type(password);
        cy.get('#signInModal .btn-primary').click();
        cy.wait(1000);
    }

    login(username, password) {
        
        cy.wait(2000); 
        cy.get('#loginusername').type(username);
        cy.wait(1000); 
        cy.get('#loginpassword').type(password);
        cy.contains('button', 'Log in').click();

    }


    checkWrongCredentials(username, password){
        cy.intercept('POST', 'https://api.demoblaze.com/login').as('loginRequest');

        cy.wait(1000); 
        cy.get('#loginusername').type(username);
        cy.wait(1000); 
        cy.get('#loginpassword').type(password);
        cy.contains('button', 'Log in').click();

        // Assert on the response
        cy.wait('@loginRequest').its('response.statusCode').should('eq', 200);

        cy.on('window:alert', (str) => {
            expect(str).to.equal('Wrong password.');
        });

    }

    
}
export default LoginPage;
