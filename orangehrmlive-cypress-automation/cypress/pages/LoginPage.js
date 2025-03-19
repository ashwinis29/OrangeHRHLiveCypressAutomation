import { loginPage, loginPageError } from '../support/selectors';

class LoginPage {
    
    //Actions
    static visitLoginPage() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

    static enterUsername(username) {
        cy.get(loginPage.usernameInput).clear().type(username);
    }

    static enterPassword(password) {
        cy.get(loginPage.passwordInput).clear().type(password);
    }

    static clickLogin() {
        cy.get(loginPage.loginButton).click();
    }

    static verifyErrorMessage(message) {
        cy.get(loginPageError.errorMessage).should('have.text', message);
    }

    static verifyRequiredFieldMessage() {
        cy.contains('Required').should('be.visible');
    }

    static login(username, password) {
        this.enterUsername(username);
        this.enterPassword(password);
        this.clickLogin();
    }
    static verifySocialMediaLink(locator,origin,expectedUrl) {
        cy.get(locator)
        .should('be.visible')
        .invoke('removeAttr', 'target') // Removes 'target=_blank' to stay in the same tab
        .click();

    cy.wait(2000);

    // cy.origin(origin, { args: [expectedUrl] }, (url) => {
    //     cy.url().should('eq', url);
    // });

    cy.origin(origin, { args: { expectedUrl } }, ({ expectedUrl }) => {
        cy.url().then((currentUrl) => {
            cy.log(`Current URL: ${currentUrl}`);
            cy.log(`Expected URL: ${expectedUrl}`);
            expect(currentUrl).to.eq(expectedUrl);
        });
    });
    }

    static verifyForgotPassword() {
        cy.get(loginPage.forgotPassword).should('be.visible').click();
        cy.url().should('include', '/requestPasswordResetCode');
    }

    static clickForgotPassword() {
        cy.get(loginPage.forgotPassword).should('be.visible').click();
    }
}

// Export the class
export default LoginPage;
