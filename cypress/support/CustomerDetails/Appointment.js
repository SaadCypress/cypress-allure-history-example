/// <reference types = "Cypress" />
class Appointment {
  constructor() {
    // create new appointment
    this.appointment = '#appointments';
    this.addappointment =
      'body > div.container-fluid > div > div > div.job-content > div > div:nth-child(2) > div:nth-child(2) > button';
    this.addnewappointment =
      '#scheduler > table > tbody > tr:nth-child(2) > td:nth-child(2) > div > table > tbody > tr:nth-child(30) > td:nth-child(3)';

    // add appointment details
    this.title =
      'body > div.k-widget.k-window > div.k-popup-edit-form.k-scheduler-edit-form.k-window-content.k-content.ng-scope > div > div:nth-child(2)';
    this.startdate = '#appt-start > span.k-widget.k-datetimepicker.k-header > span > input';
    this.enddate = '#appt-end > span.k-widget.k-datetimepicker.k-header > span > input';
    this.description =
      'body > div.k-widget.k-window > div.k-popup-edit-form.k-scheduler-edit-form.k-window-content.k-content.ng-scope > div > div:nth-child(8) > textarea';
    this.savebutton =
      'body > div.k-widget.k-window > div.k-popup-edit-form.k-scheduler-edit-form.k-window-content.k-content.ng-scope > div > div.k-edit-buttons.k-state-default > a.k-button.k-primary.k-scheduler-update';
    this.closeappointment =
      'body > div.modal.appointment-creator.fade.ng-scope.ng-isolate-scope.show > div > div > div.modal-header.ng-scope > button';
  }

  createAppointment() {
    cy.get(this.appointment).click();
    cy.url().should('include', '/appointments');
    cy.get(this.addappointment).click();
    cy.wait(3000);
    cy.get(this.addnewappointment).dblclick({ force: true });
  }

  appointmentDetails(title, startDate, endDate, description) {
    cy.get(this.title).clear().type(title);
    cy.get(this.startdate).clear().type(startDate);
    cy.get(this.enddate).clear().type(endDate);
    cy.get(this.description).type(description);
    cy.get(this.savebutton).click();
  }

  closeAppointmentBox() {
    cy.get(this.closeappointment).click();
  }
}
export default Appointment;
