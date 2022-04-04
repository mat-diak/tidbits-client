describe("user completes a task", () => {
  it("task moves to completed", () => {
    cy.login();
    cy.addTask("Task to complete");

    const res1 = {
      _id: "624ad0ce788effc434932e66",
      user: "6242d3f25729960c54a1d255",
      text: "Go for a run",
      targetReps: 3,
      completedReps: 1,
      endDate: "2022-04-08T16:40:27.425Z",
      createdAt: "2022-04-04T16:40:27.427Z",
      updatedAt: "2022-04-04T16:40:27.427Z",
      __v: 0,
    };

    const res2 = {
      _id: "624ad0ce788effc434932e66",
      user: "6242d3f25729960c54a1d255",
      text: "Go for a run",
      targetReps: 3,
      completedReps: 2,
      endDate: "2022-04-08T16:40:27.425Z",
      createdAt: "2022-04-04T16:40:27.427Z",
      updatedAt: "2022-04-04T16:40:27.427Z",
      __v: 0,
    };

    const res3 = {
      _id: "624ad0ce788effc434932e66",
      user: "6242d3f25729960c54a1d255",
      text: "Go for a run",
      targetReps: 3,
      completedReps: 3,
      endDate: "2022-04-08T16:40:27.425Z",
      createdAt: "2022-04-04T16:40:27.427Z",
      updatedAt: "2022-04-04T16:40:27.427Z",
      __v: 0,
    };

    // stub the put request
    cy.intercept(
      "PUT",
      "http://localhost:5000/api/tasks/624ad0ce788effc434932e66",
      res1
    );

    cy.get("button.done-btn").click();

    cy.intercept(
      "PUT",
      "http://localhost:5000/api/tasks/624ad0ce788effc434932e66",
      res2
    );

    cy.get("button.done-btn").click();

    cy.intercept(
      "PUT",
      "http://localhost:5000/api/tasks/624ad0ce788effc434932e66",
      res3
    );

    cy.get("button.done-btn").click();

    cy.get("div.ongoing-tasks").find("div.task-card").should("have.length", 0);

    cy.get("div.completed-tasks")
      .find("div.task-card")
      .should("have.length", 1);
  });
});
