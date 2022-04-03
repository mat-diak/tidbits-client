describe("works", () => {
  it("works", () => {
    cy.visit("/");
    cy.url().should("match", /.*\/hello/);

    cy.get(".login-email").type("tidbit1@gmail.com");
    cy.get(".login-password").type("123456");

    cy.get("button").contains("Log in").click();

    // cy.contains('Register').click()
    // cy.contains('Please add all fields')
  });
});
