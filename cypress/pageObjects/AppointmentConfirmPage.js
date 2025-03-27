import { BasePage } from "./BasePage";

export class AppointmentConfirmPage extends BasePage {
  static get url() {
    return "/appointment.php#summary";
  }

  static get facilityField() {
    return cy.get("#facility");
  }
  static get readmissionField() {
    return cy.get("#hospital_readmission");
  }
  static get medicaidField() {
    return cy.get("#program");
  }
  static get dateField() {
    return cy.get("#visit_date");
  }
  static get commentField() {
    return cy.get("#comment");
  }
}
