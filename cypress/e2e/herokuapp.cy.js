import { AppointmentConfirmPage } from "../pageObjects/AppointmentConfirmPage";
import { AppointmentPage } from "../pageObjects/AppointmentPage";
import { HistoryPage } from "../pageObjects/HistoryPage";
import { HomePage } from "../pageObjects/HomePage";
import { LoginPage } from "../pageObjects/LoginPage";

describe('Appointments', () => {
  context("Home Page", () => {
    beforeEach(() => {
      HomePage.visit();
    });
  it('Make an Appointment', () => {
    HomePage.accountButton.click();
    LoginPage.usernameField.type("John Doe");
    LoginPage.passwordField.type("ThisIsNotAPassword");
    LoginPage.loginButton.click();

    AppointmentPage.facilityField.select("Seoul CURA Healthcare Center");
    AppointmentPage.medicaidField.click();
    AppointmentPage.dateField.click();
    AppointmentPage.setDate.contains("30").click();
    AppointmentPage.readmissionCheck.click();
    AppointmentPage.commentField.type("CURA Healthcare Service");
    AppointmentPage.BookAppointmentField.click();

    AppointmentConfirmPage.facilityField.should("contain.text","Seoul CURA Healthcare Center");
    AppointmentConfirmPage.readmissionField.should("contain.text","Yes");
    AppointmentConfirmPage.medicaidField.should("contain.text","Medicaid");
    AppointmentConfirmPage.dateField.should("contain.text","30/03/2025");
    AppointmentConfirmPage.commentField.should("contain.text","CURA Healthcare Service");
  });
  it('Appointment history empty', () => {
    HomePage.accountButton.click();
    LoginPage.usernameField.type("John Doe");
    LoginPage.passwordField.type("ThisIsNotAPassword");
    LoginPage.loginButton.click();
    AppointmentPage.menuButton.click();
    AppointmentPage.sidebar.should("have.class","active");
    AppointmentPage.historyButton.click();
    HistoryPage.noAppointments.should("contain.text","No appointment");
  });
})
});