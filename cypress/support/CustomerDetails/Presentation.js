/// <reference types = "Cypress" />
class Presentation {
  constructor() {
    this.presentation = '#presentation-mode-off';
    this.presentationstart = '#presentation-mode-start';
    this.videocamerapresentation = '.fa-video-camera';
    this.leftsidepresentation = '[data-testid="gridContainer"] > :nth-child(1) > .card-footer';
    this.fullscreenbutton = '.pull-right > :nth-child(1)';
    this.closebuttononly = '.pull-right > .fullscreen';
    this.stoppresentation = '#presentation-mode-stop';
  }

  presentationFromTopMenu() {
    cy.get(this.presentation).click();
    cy.get(this.presentationstart).click();
    cy.get(this.stoppresentation).should('be.visible');
  }

  videoCameraPresentation() {
    cy.get(this.presentation).click();
    cy.get(this.presentationstart).click();
    cy.get(this.videocamerapresentation).click();
  }

  presentationIniFrame() {
    cy.get(this.leftsidepresentation).click();
    cy.get(this.fullscreenbutton).click();
    cy.contains('Close');
  }
}
export default Presentation;
