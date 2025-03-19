import { login, getRandomUsername } from '../../support/utils';
import { loginPage, loginPageError, forgotPasswordPage } from '../../support/selectors';
import LoginPage from '../../pages/LoginPage';
import ForgotPasswordPage from '../../pages/ForgotPasswordPage';

describe('OrangeHRM Login Page Test Cases', () => {
    let userData;

    beforeEach(function () {
    cy.fixture('userData').then((data) => {
        userData = data; //Store the fixture data in variables
        LoginPage.visitLoginPage();
    });
    
});

    it('Verify Website title ', () => {
        cy.title().should('eq','OrangeHRM');
    });

    it('should display login page elements', () => {
        Object.values(loginPage).forEach(selector => {
            cy.get(selector).should('be.visible');
        });
    }); 

    it('should login successfully with valid credentials', () => {
        LoginPage.login(login.adminUsername, login.adminPassword);
        cy.url().should('include', '/dashboard');
        cy.contains('Dashboard').should('be.visible');
    });

    it('should show error for invalid credentials (password)', () => {
        LoginPage.login(login.adminUsername, userData.invalidLogin.invalidPassword);
        LoginPage.verifyErrorMessage('Invalid credentials');
    });

    it('should show error for invalid credentials (username)', () => {
        LoginPage.login(userData.invalidLogin.invalidUsername, login.adminPassword);
        LoginPage.verifyErrorMessage('Invalid credentials');
    });

    it('should show error for both invalid username and password credentials', () => {
        LoginPage.login(userData.invalidLogin.invalidUsername, userData.invalidLogin.invalidPassword);
        LoginPage.verifyErrorMessage('Invalid credentials');
    });

    it('should show validation messages for empty fields', () => {
        LoginPage.clickLogin();
        LoginPage.verifyRequiredFieldMessage();
    });

    it('should show validation message for empty username field', () => {
        LoginPage.enterPassword(login.adminPassword);
        LoginPage.clickLogin();
        LoginPage.verifyRequiredFieldMessage();
    });

    it('should show validation message for empty password field', () => {
        LoginPage.enterUsername(login.adminUsername);
        LoginPage.clickLogin();
        LoginPage.verifyRequiredFieldMessage();
    });

    it('Verify LinkedIn social media link', () => {
        LoginPage.verifySocialMediaLink(
            loginPage.linkedin, 
            'https://www.linkedin.com', 
            'https://www.linkedin.com/company/orangehrm'
        );
    });

    it('Verify facebook social media link', () => {
        LoginPage.verifySocialMediaLink(
            loginPage.facebook, 
            'https://www.facebook.com', 
            'https://www.facebook.com/OrangeHRM/'
        );
    });

    it('Verify X social media link', () => {
        LoginPage.verifySocialMediaLink(
            loginPage.twitter, 
            'https://x.com', 
            'https://x.com/orangehrm?lang=en'
        );
    });

    it('Verify YouTube link is accessible', () => {
        cy.request('https://www.youtube.com/c/OrangeHRMInc')
          .its('status')
          .should('eq', 200); //Ensure link is valid
    });

    afterEach(function () {
        if (this.currentTest.state === "failed") {
            cy.screenshot(`failed_tests/${this.currentTest.title}`); //Save failed test screenshots in a folder
        }
    });
});

describe('OrangeHRM Forgot Password Test Cases', () => {
    beforeEach(() => {
        LoginPage.visitLoginPage();
        LoginPage.clickForgotPassword();
    });

    it('should verify "Forgot your password?" link is visible and clickable', () => {
        ForgotPasswordPage.verifyResetPageLoaded();
    });

    it('should display password reset page elements', () => {
        ForgotPasswordPage.verifyResetPageElements();
    }); 

    it('should submit valid username for password reset', () => {
        ForgotPasswordPage.submitValidUsername(login.adminUsername);
    });

    it('should show error message for invalid username', () => {
        ForgotPasswordPage.submitInvalidUsername('invalidUser');
    });

    it('should verify cancel button functionality', () => {
        ForgotPasswordPage.clickCancelButton();
    });

    it('should show validation message for empty input', () => {
        ForgotPasswordPage.submitEmptyUsername();
    });

    afterEach(function () {
        if (this.currentTest.state === "failed") {
            cy.screenshot(`failed_tests/${this.currentTest.title}`); // Save failed test screenshots in a folder
        }
    });
});

