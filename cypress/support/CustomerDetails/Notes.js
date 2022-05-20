/// <reference types = "Cypress" />

class Note {
  constructor() {
    this.visitnote = '#notes';
    this.note = '#initial-note-textarea';
    this.savenewnote = 'Save New Note';
    this.editnote =
      'body > div.container-fluid > div > div > div.job-content > job-tabs > div:nth-child(2) > div > div:nth-child(3) > form > div > div.btn.nowrap.col-md-1 > i.rsf-edit-link.rsf-base-66.note-icon';
    this.deletenote =
      'body > div.container-fluid > div > div > div.job-content > job-tabs > div:nth-child(2) > div > div:nth-child(3) > form > div > div.btn.nowrap.col-md-1 > i.rsf-delete-link.rsf-base-66.note-icon';
    this.saveinexsitingnote =
      'body > div.container-fluid > div > div > div.job-content > job-tabs > div:nth-child(2) > div > div:nth-child(3) > form > div > div.btn.nowrap.col-md-1 > i.rsf-save-link.rsf-base-66.note-icon';
    this.assertnote = 'Saved note successfully!';
    this.deleteassert = 'Note deleted successfully!';
  }

  visitNoteTab() {
    cy.get(this.visitnote).click();
    cy.url().should('include', '/notes');
  }

  typeNote() {
    cy.get(this.note).click().clear().type('Enter Note');
  }

  saveNewNotes() {
    cy.contains(this.savenewnote).click();
  }

  editNotes() {
    cy.get(this.editnote).click();
  }

  editTypeNote() {
    cy.contains('Enter Note').clear().type('Enter edit Note');
  }

  saveExistingNotes() {
    cy.get(this.saveinexsitingnote).click();
  }

  deletingNotes() {
    cy.get(this.deletenote).click();
    cy.contains('OK').click();
  }

  deleteAssertNote() {
    cy.contains(this.deleteassert);
  }

  assertNotes() {
    cy.contains(this.assertnote);
  }
}
export default Note;
