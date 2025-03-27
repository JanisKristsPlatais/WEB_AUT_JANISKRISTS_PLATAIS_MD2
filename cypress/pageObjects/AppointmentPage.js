import { BasePage } from "../pageObjects/BasePage";

export class AppointmentPage extends BasePage {
  static get url() {
    return "/#appointment";
  }

  static get facilityField() {
    return cy.get("#combo_facility");
  }
  static get readmissionCheck() {
    return cy.get("#chk_hospotal_readmission");
  }
  static get medicaidField() {
    return cy.get("#radio_program_medicaid");
  }
  static get dateField() {
    return cy.get("#txt_visit_date");
  }
  static get setDate() {
    return cy.get(".datepicker-dropdown");
  }
  static get commentField() {
    return cy.get("#txt_comment");
  }
  static get BookAppointmentField() {
    return cy.get("#btn-book-appointment");
  }
  static get menuButton() {
    return cy.get("#menu-toggle");
  }
  static get sidebar() {
    return cy.get("#sidebar-wrapper");
  }
  static get historyButton() {
    return cy.get("a[href='history.php#history']");
  }

}
