
export const loginPage = {
    logo: '.orangehrm-login-branding > img',
    title: '.oxd-text--h5',
    usernameProvided: '.oxd-sheet > :nth-child(1)',
    passwordProvided: '.oxd-sheet > :nth-child(2)',
    usernameLabel: ':nth-child(2) > .oxd-input-group > .oxd-input-group__label-wrapper',
    usernameInput: "input[name='username']",
    passwordLabel: ':nth-child(3) > .oxd-input-group > .oxd-input-group__label-wrapper',
    passwordInput: "input[name='password']",
    loginButton: "button[type='submit']",
    forgotPassword: "div[class='orangehrm-login-forgot']",
    copyrightText1: '.orangehrm-copyright-wrapper > :nth-child(1)',
    copyrightText2: '.orangehrm-copyright-wrapper > :nth-child(2)',
    linkedin: "a[href='https://www.linkedin.com/company/orangehrm/mycompany/']",
    facebook: "a[href='https://www.facebook.com/OrangeHRM/']",
    twitter: "a[href='https://twitter.com/orangehrm?lang=en']",
    youtube: "a[href='https://www.youtube.com/c/OrangeHRMInc']",
};

export const loginPageError = {
    errorMessage: "div[class='oxd-alert-content oxd-alert-content--error']"
}

export const forgotPasswordPage = {
    usernameInput: "input[name='username']",
    cancelButton: "button[type='button']",
    resetButton: "button[type='submit']",
    resetTitle: "h6[class='oxd-text oxd-text--h6 orangehrm-forgot-password-title']"
};


export const adminPage = {
    pimModule: "a[href='/web/index.php/pim/viewPimModule']",
    adminModule: "a[href='/web/index.php/admin/viewAdminModule']",
    addButton: "button[type='button']:contains('Add')",
    firstNameInput: "input[name='firstName']",
    lastNameInput: "input[name='lastName']",
    saveButton: "button[type='submit']:contains('Save')",
    userRoleDropdown: "div.oxd-select-wrapper:first",
    statusDropdown: "div.oxd-select-wrapper:eq(1)",
    employeeNameInput: ".oxd-autocomplete-text-input > input",
    employeeDropdown: ".oxd-autocomplete-dropdown div",
    usernameInput: "input.oxd-input.oxd-input--active:eq(1)",
    passwordInput: "input.oxd-input.oxd-input--active[type='password']:eq(0)",
    confirmPasswordInput: "input.oxd-input.oxd-input--active[type='password']:eq(0)",
    saveUserButton: "button[type='submit']:contains('Save')",
    successMessage: ".oxd-text--toast-message",
};

