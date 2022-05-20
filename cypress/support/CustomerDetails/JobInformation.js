/// <reference types = "Cypress" />

class JobInformation {
  constructor() {
    // add job
    this.addJob = 'body > div.container-fluid > div > div:nth-child(1) > div:nth-child(2) > div > button:nth-child(3)';
    // information locators
    // customer details
    this.customerName = '#customer_name';
    this.customerEmailId = '#email';
    this.phoneType =
      'body > div.container-fluid > div > div > div.job-content > div > form > div:nth-child(1) > div > div > div.form-section-content > div:nth-child(2) > div > div > div.form-group.ng-scope > div > div.col-md-3 > input';
    this.customerPhoneNo =
      'body > div.container-fluid > div > div > div.job-content > div > form > div:nth-child(1) > div > div > div.form-section-content > div:nth-child(2) > div > div > div.form-group.ng-scope > div > div.col-md-7 > input';
    this.deleteButton =
      'body > div.container-fluid > div > div > div.job-content > div > form > div:nth-child(1) > div > div > div.form-section-content > div:nth-child(2) > div > div > div.form-group.ng-scope > div > div.col-md-2 > button';
    this.newButton =
      'body > div.container-fluid > div > div > div.job-content > div > form > div:nth-child(1) > div > div > div.form-section-content > div:nth-child(2) > div > div > div:nth-child(3) > div > div > button';

    // job details
    this.jobName = '#name';
    this.jobStatus = '';
    this.changeStatus = '#actions';
    this.organization = '';
    this.assignto = '#user';
    this.selectleadsource = '#lead_source';
    this.inputleadsource = '';

    // job address
    this.address1 = '#address_1';
    this.address2 = '#address_2';
    this.city = '#address_city';
    this.state = '#address_state';
    this.postalcode = '#address_postal_code';
    this.country = '#address_country';

    //navmenu
    this.customerename = 'h1.ng-binding';
    // customeraddrss

    this.checkcustomeraddress = '';
    this.uncheckcustomeraddress = '';

    // save job
    this.savejob =
      'body > div.container-fluid > div > div > div.job-content > div > form > div:nth-child(8) > div.col-md-4 > button.btn.btn-default.pull-right';
    this.alertmessage = 'body > flash-alert > div';
    this.loader = '.graphic';
    // Archivejob
    this.archivejob =
      'body > div.container-fluid > div > div > div.job-content > div > form > div:nth-child(8) > div.col-md-4 > button.btn.btn-danger.pull-right.margin-bottom.ng-scope.ng-isolate-scope';
  }

  addNewJobFromFixture(fixture = 'job') {
    this.addNewJob();

    cy.fixture(fixture).then((job) => {
      this.customerDetails(job.cname, job.cemail, job.cphone, job.ctype);
      this.jobDetails(job.jname, job.jstatus, job.jassign, job.jlead);
      this.jobAddress(job.jaddress, job.jaddress2, job.jcity, job.jstate, job.jpostalcode, job.jcountry);
    });
  }

  renamJobNameFromFixture(fixture = 'job') {
    cy.fixture(fixture).then((job) => {
      this.renameJobName(job.renameJobName);
    });
  }

  renamCustomerNameFromFixture(fixture = 'job') {
    cy.fixture(fixture).then((job) => {
      this.renameCustomerNameAndVerify(job.customerrename);
    });
  }

  renamCustomerNameFromFixture(fixture = 'job') {
    cy.fixture(fixture).then((job) => {
      this.renameCustomerNameAndVerify(job.customerrename);
      this.saveNewJob();
    });
  }

  //customer rename assertion
  customerNameAssertion(fixture = 'job') {
    cy.fixture(fixture).then((job) => {
      cy.get(this.customerename).then(($customerrenamename) => {
        const rename = $customerrenamename.text();
        expect(rename).to.eq(job.customerrename);
      });
    });
  }

  custAndJobVerify(fixture = 'job') {
    cy.fixture(fixture).then((job) => {
      cy.get(this.customerName).then(($custjob) => {
        const jobname = $custjob.val();
        expect(jobname).to.not.eq(job.jname);
      });
    });
  }

  renameJobNameFromFixture(fixture = 'job') {
    cy.fixture(fixture).then((job) => {
      this.renameJobName(job.renameJobName);
    });
  }

  renameCustomerNameFromFixture(fixture = 'job') {
    cy.fixture(fixture).then((job) => {
      this.renameCustomerNameAndVerify(job.customerrename);
      this.saveNewJob();
    });
  }

  //customer rename assertion
  customerNameAssertion(fixture = 'job') {
    cy.fixture(fixture).then((job) => {
      cy.get(this.customerename).then(($customerrenamename) => {
        const rename = $customerrenamename.text();
        expect(rename).to.eq(job.customerrename);
      });
    });
  }

  custAndJobVerify(fixture = 'job') {
    cy.fixture(fixture).then((job) => {
      cy.get(this.customerName).then(($custjob) => {
        const jobname = $custjob.val();
        expect(jobname).to.not.eq(job.jname);
      });
    });
  }

  addNewJob() {
    cy.get(this.addJob).click();
    cy.url().should('include', '/info');
  }

  customerDetails(cname, cemail, cphone, ctype) {
    cy.get(this.customerName).click().type(cname);
    cy.get(this.customerEmailId).type(cemail);
    cy.get(this.phoneType).type(ctype);
    cy.get(this.customerPhoneNo).type(cphone);
  }

  jobDetails(jname) {
    cy.get(this.jobName).clear().type(jname);
  }

  jobAddress(jaddress, jaddress2, jcity, jstate, jpostalcode, jcountry) {
    cy.get(this.address1).click().type(jaddress);
    cy.get(this.address2).type(jaddress2);
    cy.get(this.city).type(jcity);
    cy.get(this.state).select(jstate, { force: true }).invoke('val');
    cy.get(this.postalcode).type(jpostalcode);
    cy.get(this.country).select(jcountry, { force: true }).invoke('val');
  }

  customerNewButton() {
    cy.get(this.newButton).click();
  }

  customerDeleteButton() {
    cy.get(this.deleteButton).click();
  }

  saveNewJob() {
    cy.get(this.savejob, { timeout: 10000 }).should('be.enabled');
    cy.get(this.savejob).click({ force: true });
  }

  newJobAssertion() {
    cy.get(this.loader);
    cy.contains('Job Saved', { timeout: 10000 });
  }

  renameJobName(jobrename) {
    cy.get(this.jobName).click({ force: true });
    cy.get(this.jobName).clear().type(jobrename);
  }

  renameCustomerNameAndVerify(customerrename) {
    cy.get(this.customerName).click({ force: true });
    cy.get(this.customerName).clear().type(customerrename);
  }

  archiveTheJob() {
    cy.get(this.alertmessage, { timeout: 10000 }).should('not.be.visible');
    cy.get(this.archivejob).click({ force: true });
    cy.contains('Are you sure you wish to archive this job?');
    cy.contains('OK').click();
    cy.contains('Job Archived');
    cy.url().should('include', '/jobs');
  }

  waitUntilJobsaved() {
    cy.get(this.alertmessage, { timeout: 10000 }).should('not.be.visible');
  }

  addNewJobMandatoryFieldFromFixture(fixture = 'job') {
    this.addNewJob();

    cy.fixture(fixture).then((job) => {
      this.customerDetailsMandatory(job.cname, job.cemail);
    });
  }

  customerDetailsMandatory(cname, cemail) {
    cy.get(this.customerName).click().type(cname);
    cy.get(this.customerEmailId).type(cemail);
  }

  noAddNewJobButton() {
    cy.get(this.addJob).should('not.be.visible');
  }
}
export default JobInformation;
