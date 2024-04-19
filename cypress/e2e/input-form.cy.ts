describe("Input form", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("foceses input on load", () => {
    cy.visit("/");
    cy.focused().should("have.id", "field");
  });
});
