describe("userDeletesTask", () => {
  it("deletes task", () => {
    cy.login();
    cy.addTask("Task to delete");

    cy.get("div.ongoing-tasks").find("div.card").should("have.length", 1);

    cy.intercept(
      "DELETE",
      "http://localhost:5000/api/tasks/624ad0ce788effc434932e66",
      {
        fixture: "deletedTaskResponse.json",
      }
    ).as("deleteTaskResponse");

    cy.get(".delete-btn").click();

    cy.get("div.ongoing-tasks").find("div.card").should("have.length", 0);
  });
});
