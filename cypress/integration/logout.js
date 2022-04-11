describe("user can log out", () => {
  it("logs out", () => {
    cy.login();

    cy.get(".header-logout")
      .contains("Log out")
      .click()
      .should(() => {
        expect(localStorage.user).to.be.undefined;
      });
  });
});
