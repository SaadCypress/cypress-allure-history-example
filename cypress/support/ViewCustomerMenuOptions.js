/// <reference types = "Cypress" />

class ViewCustomerMenuOptions {
  constructor() {
    // View customer Details

    this.InformationMenu = '#information > .k-link > .menu-text > .customer_nav_text';
    this.AppointmentsMenu = '#appointments > .k-link > .menu-text > .customer_nav_text';
    this.PropertyDataMenu = '#property_data > .k-link > .menu-text > .customer_nav_text';
    this.ToolsMenu = '#tools > .k-link > .menu-text > .customer_nav_text';
    this.ImagesMenu = '#images > .k-link > .menu-text > .customer_nav_text';
    this.DocumentsMenu = '#documents > .k-link > .menu-text > .customer_nav_text';
    this.MeasurementsMenu = '#measurements > .k-link > .menu-text > .customer_nav_text';
    this.NotesMenu = '#notes > .k-link > .menu-text > .customer_nav_text';
    this.HistoryMenu = '#history > .k-link > .menu-text > .customer_nav_text';

    //View Company Information
    this.PresentationsMenu = '#presentations > .k-link > .menu-text > .customer_nav_text';
    this.DesignToolsMenu = '#design_tools > .k-link > .menu-text > .customer_nav_text';
    this.EstimatesMenu = '#estimates > .k-link > .menu-text > .customer_nav_text';

    //Proposals & Agreements
    this.AgreementsMenu = '#contracts > .k-link > .menu-text > .customer_nav_text';
    this.ProposalsMenu = '#proposals > .k-link > .menu-text > .customer_nav_text';
    this.spinner = '#spinner';
  }

  viewInformation() {
    cy.get(this.InformationMenu).click();
    cy.url().should('include', '/info');
  }

  viewAppointments() {
    cy.get(this.spinner, { timeout: 10000 }).should('not.exist');
    cy.get(this.AppointmentsMenu).click();
    cy.get(this.spinner, { timeout: 10000 }).should('not.exist');
    cy.url().should('include', '/appointments');
  }

  viewPropertyData() {
    cy.get(this.PropertyDataMenu).click();
    cy.url().should('include', '/property');
  }

  viewTools() {
    cy.get(this.ToolsMenu).click();
    cy.url().should('include', '/tools');
  }

  viewImages() {
    cy.get(this.ImagesMenu).click();
    cy.url().should('include', '/images');
  }

  viewDocuments() {
    cy.get(this.spinner, { timeout: 10000 }).should('not.exist');
    cy.get(this.DocumentsMenu).click();
    cy.get(this.spinner, { timeout: 10000 }).should('not.exist');
    cy.url().should('include', '/documents');
  }

  viewMeasurements() {
    cy.get(this.MeasurementsMenu).click();
    cy.url().should('include', '/measurements');
  }

  viewNotes() {
    cy.get(this.NotesMenu).click();
    cy.url().should('include', '/notes');
  }

  viewHistory() {
    cy.get(this.HistoryMenu).click();
    cy.url().should('include', '/history');
  }

  viewPresentations() {
    cy.get(this.PresentationsMenu).click();
    cy.url().should('include', '/presentations');
  }

  viewDesignTools() {
    cy.get(this.spinner, { timeout: 10000 }).should('not.exist');
    cy.get(this.DesignToolsMenu).click();
    cy.get(this.spinner, { timeout: 10000 }).should('not.exist');
    cy.url().should('include', '/design-tools');
  }

  viewEstimates() {
    cy.get(this.spinner, { timeout: 15000 }).should('not.exist');
    cy.get(this.EstimatesMenu).click();
    cy.get(this.spinner, { timeout: 15000 }).should('not.exist');
    cy.url().should('include', '/estimates/new');
  }

  viewProposals() {
    cy.get(this.ProposalsMenu).click();
    cy.url().should('include', '/proposals');
  }

  viewAgreements() {
    cy.get(this.AgreementsMenu).click();
    cy.url().should('include', '/contracts');
  }
}
export default ViewCustomerMenuOptions;
