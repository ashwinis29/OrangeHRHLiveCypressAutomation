import { login, getRandomUsername } from '../../support/utils';
import LoginPage from '../../pages/LoginPage';
import AdminPage from '../../pages/AdminPage';

describe('OrangeHRM Admin Page Test Cases', () => {
    let userData;

    beforeEach(function () {
    cy.fixture('userData').then((data) => {
        userData = data; //Store the fixture data in variables
        LoginPage.visitLoginPage();
    });
    
});

    it('Verify Add User', () => {
        LoginPage.login(login.adminUsername, login.adminPassword);
        cy.url().should('include', '/dashboard');

        //Navigate to PIM and Add Employee
        AdminPage.navigateToPIM();
        AdminPage.clickAddButton();
        AdminPage.enterEmployeeDetails(userData.addUser.firstName, userData.addUser.lastName);
        AdminPage.saveEmployee();

        //Navigate to Admin & Add System User
        AdminPage.navigateToAdmin();
        cy.url().should('include', '/admin/viewSystemUsers');
        AdminPage.clickAddButton();
        cy.url().should('include', '/admin/saveSystemUser');

        //Select User
        AdminPage.selectUserRole(userData.addUser.userRole);

        //Enter Employee Name
        AdminPage.enterEmployeeName(userData.addUser.employeeName);

        //Select Status
        AdminPage.selectStatus(userData.addUser.status);
        
        //Enter Login Details
        const username = getRandomUsername();
        AdminPage.enterLoginCredentials(username, userData.addUser.password);
       
        //Save and Verify User
        AdminPage.saveUser();
        AdminPage.verifyUserAdded(username);
    });

    afterEach(function () {
        if (this.currentTest.state === "failed") {
            cy.screenshot(`failed_tests/${this.currentTest.title}`); //Save failed test screenshots in a folder
        }
    });
});
