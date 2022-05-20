/// <reference types = "Cypress" />
class Proposal {
  constructor() {
    this.downloadButtonModal = '.row-even-spacing > :nth-child(1) > .btn';
    this.saveButtonModal = ':nth-child(2) > .btn';
    this.saveAndAddAgreementButton = ':nth-child(3) > .btn';
  }

  clickSaveButton() {
    cy.wait(50000);
    cy.get('#webviewer-1').then(function ($iframe) {
      const iFrameC = $iframe
        .contents()
        .find('#app > div.App > div.Header > div > button:nth-child(11)', { timeout: 30000 });
      cy.wrap(iFrameC).click({ force: true });
    });
  }

  clickDownloadButton() {
    cy.get(this.downloadButtonModal).click();
  }

  clickSaveProposalButton() {
    cy.get(this.saveButtonModal).click();
  }

  clickSaveAddAgreementButton() {
    cy.get(this.saveAndAddAgreementButton).click();
  }
}
export default Proposal;
