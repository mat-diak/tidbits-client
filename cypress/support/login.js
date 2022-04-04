Cypress.Commands.add("login", () => {
  cy.visit("/", { timeout: 120000 });
  cy.url().should("match", /.*\/hello/);

  // the data comes from fixtures
  cy.get(".login-email").type("tidbits1@gmail.com");
  cy.get(".login-password").type("123456");

  cy.intercept("POST", "http://localhost:5000/api/users/login", {
    fixture: "login.json",
  }).as("loginReponse");

  cy.intercept("GET", "http://localhost:5000/api/tasks/", []).as(
    "tasksResponse"
  );
  cy.intercept("GET", "http://localhost:5000/api/premadetasks", []).as(
    "premadeTasksResponse"
  );

  cy.get("button").contains("Log in").click();
});
