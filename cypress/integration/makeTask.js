describe("user makes a task", () => {
  describe("when succesful request", () => {
    it("makes a task", () => {
      cy.login();
      // "createdAt": "2022-04-04T11:04:46.544Z",
      cy.clock(new Date(2022, 3, 4, 4, 46, 544), ['Date'])

      cy.get("button").contains("Make a tidbit").click();

      cy.get(".task-input").type("Go for a run");

      cy.get("button.reps-button").click().click();

      cy.get("button.days-button").click().click().click();

      cy.intercept("POST", "http://localhost:5000/api/tasks", {
        fixture: "addedTaskResponse.json",
      }).as("addedTaskResponse");

      cy.get("button.add-task-button").click();

      const tasks = cy.get("div.ongoing-tasks").find("div.card");

      tasks
        .should("have.length", 1)
        .find(".card-text")
        .should("have.text", "Go for a run");

      tasks.get("div.task-reps").should("have.text", "0 / 3");

      tasks.get("div.task-dueDate").should("have.text", "4 days left...");
    });
  });
});
