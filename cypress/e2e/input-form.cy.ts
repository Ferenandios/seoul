const baseUrl = "http://localhost:5173/";
describe("Input form", () => {
  it("foceses input on load", () => {
    cy.visit(baseUrl);
    cy.focused().should("have.id", "field");
  });
});
