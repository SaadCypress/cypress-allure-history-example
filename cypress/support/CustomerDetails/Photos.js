/// <reference types = "Cypress" />

class Photo {
  constructor() {
    this.photo = '#images > span';
    this.createNewFolder = 'Create a New Folder';
    this.writeName = 'input.form-control';
    this.saveButton = 'button.btn.btn-primary';
    this.savePButton = 'Save Changes';
    this.upload = 'button.ml-0.btn.btn-default';
    this.invite = 'button.pull-right.btn.btn-default';
    this.inputEmail = '[data-testid="emails"]';
    this.spinner = '#spinner';
    this.sendEmail =
      'body > div.fade.modal.show > div > div > div.modal-body > form:nth-child(1) > div > div.col-sm-3 > button';
    this.inputPhoneNo = '[data-testid="phonenumber"]';
    this.sendText =
      'body > div.fade.modal.show > div > div > div.modal-body > form:nth-child(3) > div > div.col-sm-3 > button';
    this.dotButton =
      'body > div.container-fluid > div > div > div.job-content > job-tabs > div > div > div:nth-child(4) > div > div > div:nth-child(1) > div > div.card-body > div.top-right-2.dropleft > button';
    this.editWriteName =
      'body > div.container-fluid > div > div > div.job-content > job-tabs > div > div > div:nth-child(4) > div > div > div:nth-child(1) > div > div.card-body > div > form > div > input';
    this.refreshPhoto = 'Refresh';
    this.editPName =
      'body > div.container-fluid > div > div > div.job-content > job-tabs > div > div > div:nth-child(6) > div > div.table-body.row > div > div > div > div:nth-child(7) > div > a:nth-child(1)';
    this.renamePName = '#title';
    this.deleteP =
      'body > div.container-fluid > div > div > div.job-content > job-tabs > div > div > div:nth-child(6) > div > div.table-body.row > div > div > div > div:nth-child(7) > div > a:nth-child(2)';
  }

  navigateToPhoto() {
    cy.get(this.spinner, { timeout: 10000 }).should('not.exist');
    cy.get(this.photo).click();
    cy.url().should('include', '/images');
  }

  addNewFolder() {
    cy.contains(this.createNewFolder).invoke('show').click({ force: true });
  }

  writeNames(name) {
    cy.get(this.writeName).click().type(name);
  }

  refreshPhotos() {
    cy.contains(this.refreshPhoto).click();
    cy.contains('Refreshing in');
  }

  uploadFiles() {
    cy.get(this.upload).selectFile('cypress/fixtures/evening.png', {
      action: 'drag-drop',
    });
  }

  sendInviteemail(email) {
    cy.get(this.invite).click();
    cy.get(this.inputEmail).clear().type(email);
    cy.get(this.sendEmail).click();
  }

  sendInvitephone(phone) {
    cy.get(this.invite).click();
    cy.get(this.inputPhoneNo).clear().type(phone);
    cy.get(this.sendText).click();
  }

  sendInviteAssert() {
    cy.contains('Refreshing in');
  }

  uploadFileAssert() {
    cy.get(this.spinner, { timeout: 10000 }).should('not.exist');
    cy.contains('evening');
  }

  editPhotoName() {
    cy.get(this.editPName).click();
  }

  renamePhotoName(PName) {
    cy.get(this.renamePName).type(PName);
  }

  dotRightButton() {
    cy.get(this.dotButton).click();
  }

  editFolder() {
    cy.contains('Edit').click();
  }

  renameFolder(newname) {
    cy.get(this.editWriteName).clear().type(newname);
  }

  deleteFolder() {
    cy.contains('Delete').click();
    cy.contains('OK').click();
  }

  deletePhoto() {
    cy.get(this.deleteP).click();
    cy.contains('OK').click();
    cy.contains('Image successfully deleted');
  }

  renameSaveButton() {
    cy.contains(this.savePButton).click();
  }

  saveFolder() {
    cy.get(this.saveButton).click();
    cy.contains('Saved folder successfully');
  }

  clicksavebutton() {
    cy.get(this.saveButton).click();
  }
}
export default Photo;
