// import authService from './src/features/auth/authService.js'

describe("user can register", () => {
  describe("when user with email does not exist", () => {
    it("user registers", () => {
      cy.visit("/");
      cy.url().should("match", /.*\/hello/);

      // the data comes from fixtures
      cy.get(".register-name").type("tidbit1");
      cy.get(".register-email").type("tidbit1@gmail.com");
      cy.get(".register-password").type("123456");
      cy.get(".register-password2").type("123456");

      cy.intercept("POST", "http://localhost:5000/api/users/", {
        fixture: "register.json",
      });

      cy.intercept("GET", "http://localhost:5000/api/tasks/", []);
      cy.intercept("GET", "http://localhost:5000/api/premadetasks", []);

      cy.get("button")
        .contains("Register")
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
