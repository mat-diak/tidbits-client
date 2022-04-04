describe("user can log in", () => {
  describe("when successfully registered", () => {
    it("users logs in", () => {
      cy.visit("/");
      cy.url().should("match", /.*\/hello/);

      // the data comes from fixtures
      cy.get(".login-email").type("tidbits1@gmail.com");
      cy.get(".login-password").type("123456");

      cy.intercept("POST", "http://localhost:5000/api/users/login", {
        fixture: "login.json",
      }).as('loginReponse');

      cy.intercept("GET", "http://localhost:5000/api/tasks/", []).as('tasksResponse');
      cy.intercept("GET", "http://localhost:5000/api/premadetasks", []).as('premadeTasksResponse');

      cy.get("button")
        .contains("Log in")
        .click()
        .should(() => {
          const userData = JSON.parse(localStorage.user);
          expect(userData.email).to.eq("tidbits1@gmail.com");
          expect(userData.name).to.eq("tidbits1");
          expect(userData.token).to.eq("token");
          expect(userData._id).to.eq("1");
        });

      cy.get(".navbar-text").should("have.text", "Hello, tidbits1");
    });
  });
});
