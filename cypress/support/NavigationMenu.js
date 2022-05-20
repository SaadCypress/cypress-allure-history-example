/// <reference types="cypress" />
class NavigationMenu {
  constructor() {
    //Locators

    this.CustomerDetailScreen = '#job-list > span > div > div:nth-child(1) > div > div.job-list-hover';
    this.DashboardIcon = 'body > div:nth-child(6) > div > nav > a > img';
    this.AppointmentMenu = 'Appointments';
    this.CustomerMenu = 'Customers';
    this.AdministrationMenu = 'Administration';
    this.Search = '#search';
    this.backToCustomer = 'Back to All Customers';
    this.backToCustomers = '.customer-nav-back';
    this.cancel =
      'body > div.modal.on-top-modal.fade.ng-scope.ng-isolate-scope.show > div > div > div.modal-footer.ng-scope > button.btn.btn-default';
    this.AddJobScreen = 'Add Job';
    this.CustomersInGridView = '.btn-light > .ng-scope';
    this.CustomersInLinearView = 'button.btn.btn-success';
    this.signout = 'Logout';
    this.customer = 'Customers';
    this.customerDiv = '#job-list > span > div > div:nth-child(1) > div';
    this.viewDetailButton = '//*[@id="job-list"]/span/div/div[1]/div/div[5]/a';
    this.jobbox = '#job-list > span > div > div:nth-child(1) > div';
    this.navMenu = '[data-testid="dropdown-toggle"] > .row';
    this.spinner = '.spinner-graphic';
    this.selectOrgProfileDropdown = '[href="/orgs/accesses"]';
    this.selectOrgListProfileDropdown = '[data-testid="org-10"] > .org-access-item > .card-body > .h-100';
    this.orgID = '[ng-repeat="org in $ctrl.orgResponse.orgs"][href="/orgs/5/info?parent_id=2"] > :nth-child(2)';
    this.orgName = '#name';
    this.orgEmptyError = '.has-error > .ng-scope';
  }

  viewDashboardIcon() {
    cy.get(this.DashboardIcon).click();
    cy.url().should('include', '/jobs');
  }

  viewCustomerDetailScreen() {
    cy.get(this.CustomerDetailScreen).invoke('show').click();
    cy.contains('View Details').click();
  }

  viewAppointmentMenu() {
    cy.contains(this.AppointmentMenu).click();
    cy.url().should('include', '/calendar');
  }

  viewCustomerMenu() {
    cy.contains(this.CustomerMenu).click();
    cy.url().should('include', '/jobs');
  }

  viewAdministrationMenu() {
    cy.contains(this.AdministrationMenu).click();
    cy.url().should('include', '/orgs');
  }

  viewSearchFunctionality(searchText) {
    cy.get(this.jobbox).should('be.visible');
    cy.get(this.Search).clear().type(searchText);
  }

  backToCustomerScreen() {
    cy.contains(this.backToCustomer).scrollIntoView();
    cy.get(this.backToCustomers, { timeout: 35000 }).click({ force: true });
    cy.contains('OK').click();
    cy.url().should('include', '/jobs');
  }

  backToCustomersScreen() {
    cy.contains(this.backToCustomer).scrollIntoView();
    cy.get(this.backToCustomers, { timeout: 35000 }).click({ force: true });
    cy.url().should('include', '/jobs');
  }

  viewAddJobScreen() {
    cy.contains(this.AddJobScreen).click();
  }

  viewCustomersInGridView() {
    cy.get(this.CustomersInGridView).click();
  }

  viewCustomersInLinearView() {
    cy.get(this.CustomersInLinearView).click();
  }

  LogOut() {
    cy.get(this.navMenu).click();

    cy.contains(this.signout).click();
  }

  profileMenu() {
    cy.contains(this.CustomerMenu).click();
    cy.url().should('include', '/jobs');
    cy.get(this.navMenu).click();
  }

  selectOrganization() {
    cy.contains(this.CustomerMenu).click();
    cy.url().should('include', '/jobs');
    cy.get(this.navMenu).click();
    cy.get(this.selectOrgProfileDropdown).click();
    cy.get(this.selectOrgListProfileDropdown).click();
  }

  selectOrgName() {
    cy.contains(this.AdministrationMenu).click();
    cy.url().should('include', '/orgs');
    cy.contains(this.orgID, '5').click();
    cy.get(this.orgName).clear();
    cy.contains(this.orgEmptyError, 'Required');
  }
}

export default NavigationMenu;
