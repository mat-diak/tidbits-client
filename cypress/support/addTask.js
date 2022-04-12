Cypress.Commands.add("addTask", (text) => {
  cy.get("button").contains("Make a tidbit").click();

  cy.get(".task-input").type(text);

  cy.get("button.reps-button").click().click();

  cy.get("button.days-button").click().click().click();

  cy.intercept("POST", "http://localhost:5000/api/tasks", {
    fixture: "addedTaskResponse.json",
  }).as("addedTaskResponse");

  cy.get("button.add-task-button").click();
});
