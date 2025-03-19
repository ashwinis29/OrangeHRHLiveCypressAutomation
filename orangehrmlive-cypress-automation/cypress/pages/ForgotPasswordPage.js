import { forgotPasswordPage } from '../support/selectors';
import LoginPage from '../pages/LoginPage';

class ForgotPasswordPage 
{
    static verifyResetPageLoaded() {
        cy.url().should('include', '/requestPasswordResetCode');
    }

    static verifyResetPageElements() {
        Object.values(forgotPasswordPage).forEach(selector => {
            cy.get(selector).should('be.visible');
        });
    }

    static submitValidUsername(username) {
        cy.get(forgotPasswordPage.usernameInput).type(username);
        cy.get(forgotPasswordPage.resetButton).click();
        cy.url().should('include', '/sendPasswordReset');
        cy.get(forgotPasswordPage.resetTitle).should('have.text', 'Reset Password link sent successfully');
    }

    static submitInvalidUsername(username) {
        cy.get(forgotPasswordPage.usernameInput).type(username);
        cy.get(forgotPasswordPage.resetButton).click();
        ForgotPasswordPage.verifyResetPageLoaded();
    }

    static clickCancelButton() {
        cy.get(forgotPasswordPage.cancelButton).click();
        cy.url().should('include', '/login');
    }

    static submitEmptyUsername() {
        cy.get(forgotPasswordPage.resetButton).click();
        LoginPage.verifyRequiredFieldMessage();
    }
}

export default ForgotPasswordPage;
