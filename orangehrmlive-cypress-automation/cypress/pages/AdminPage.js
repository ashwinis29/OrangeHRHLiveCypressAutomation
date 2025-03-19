import { adminPage } from '../support/selectors';

class AdminPage 
{
    static navigateToPIM() {
        cy.get(adminPage.pimModule).click();
    }

    static navigateToAdmin() {
        cy.get(adminPage.adminModule).click();
    }

    static clickAddButton() {
        cy.get(adminPage.addButton).click();
    }

    static enterEmployeeDetails(firstName, lastName) {
        cy.get(adminPage.firstNameInput).type(firstName);
        cy.get(adminPage.lastNameInput).type(lastName);
    }

    static saveEmployee() {
        cy.get(adminPage.saveButton).click();
    }

    static selectUserRole(role) {
        cy.get(adminPage.userRoleDropdown).click();
        cy.contains("div.oxd-select-dropdown", role).click();
    }

    static enterEmployeeName(employeeName) {
        cy.get(adminPage.employeeNameInput).type(employeeName).wait(2000);
        cy.get(adminPage.employeeDropdown).should('be.visible').first().click();
    }

    static selectStatus(status) {
        cy.get(adminPage.statusDropdown).click();
        cy.contains("div.oxd-select-dropdown", status).click();
    }

    static enterLoginCredentials(username, password) {
        cy.get(adminPage.usernameInput).type(username);
        cy.get(adminPage.passwordInput).type(password);
        cy.get(adminPage.confirmPasswordInput).type(password);
    }

    static saveUser() {
        cy.get(adminPage.saveUserButton).click();
    }

    static verifyUserAdded(username) {
        cy.get(adminPage.successMessage).should('have.text', 'Successfully Saved');
        cy.wait(2000);
        cy.contains(username).should('be.visible');
    }
}

export default AdminPage;
