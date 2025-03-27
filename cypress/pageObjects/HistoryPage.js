import { BasePage } from "../pageObjects/BasePage";

export class HistoryPage extends BasePage {
  static get url() {
    return "/history.php#history";
  }

  static get noAppointments() {
    return cy.get("#history");
  }

}
