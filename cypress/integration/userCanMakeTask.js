describe("user makes a task", () => {
  describe("when succesful request", () => {
    it("makes a task", () => {
      cy.login();

      cy.get("button").contains("Make a tidbit").click();

      cy.get(".add-task-input").type("Go for a run");

      cy.get("button.reps-button").click().click();

      cy.get("button.days-button").click().click().click();

      cy.intercept("POST", "http://localhost:5000/api/tasks", {
        fixture: "addedTaskResponse.json",
      }).as("addedTaskResponse");

      cy.get("button.add-task-button").click();

      const tasks = cy.get("div.ongoing-tasks").find("div.task-card");

      tasks
        .should("have.length", 1)
        .find(".card-text")
        .should("have.text", "Go for a run");

      tasks.get("div.task-reps").should("have.text", "0/3");

      tasks.get("div.task-dueDate").should("have.text", "4 days to go!");
    });
  });
});
