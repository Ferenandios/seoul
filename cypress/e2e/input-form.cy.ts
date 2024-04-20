import hexRgb, { type RgbaObject } from "hex-rgb";

// Hex to RGB function
const rgb = (hex: string): string => {
  const o: RgbaObject = hexRgb(hex);
  return `rgb(${o.red}, ${o.green}, ${o.blue})`;
};
describe("Input form", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Add todos", () => {
    cy.get("[data-test='field']").should("exist");
    cy.get("[data-test='item']").should("have.length", 0);
    // Create few todos
    cy.get("[data-test='field']").type("First task{enter}");
    cy.get("[data-test='field']").type("Second task{enter}");
    // Check todo-list was updated
    cy.get("[data-test='item']").should("have.length", 2);
    cy.get(`[data-test='item']:first`).should("contain", "First task");
    cy.get(`[data-test='item']:last`).should("contain", "Second task");
    cy.get('[data-test="length"]').should("contain", "2 items left");
    // Set completed for the second todo
    cy.get("[data-test='completed']").should("have.length", 2);
    cy.get("[data-test='completed']:last").click();
    cy.get("[data-test='completed']:last").should(
      "have.css",
      "border-color",
      rgb("#A4D5C9")
    );
    cy.get('[data-test="length"]').should("contain", "1 item left");
    // Set Active and check todos
    cy.get("[data-test='filterButton']")
      .eq(1)
      .should("exist")
      .and("have.text", "Active")
      .click();
    cy.get("[data-test='item']").should("have.length", 1);
    cy.get("[data-test='item']:first").should("contain", "First task");
    // Set Completed and check todos
    cy.get("[data-test='filterButton']")
      .eq(2)
      .should("exist")
      .and("have.text", "Completed")
      .click();
    cy.get("[data-test='item']").should("have.length", 1);
    cy.get("[data-test='item']:first").should("contain", "Second task");
    // Set All and clear completed todos
    cy.get("[data-test='filterButton']")
      .eq(0)
      .should("exist")
      .and("have.text", "All")
      .click();
    cy.get("[data-test='clear']").click();
    cy.get("[data-test='item']").should("have.length", 1);
    // Set Completed and check todos
    cy.get("[data-test='filterButton']")
      .eq(2)
      .should("exist")
      .and("have.text", "Completed")
      .click();
    cy.get("[data-test='empty']").should("have.length", 1);
    // Create another todo and check length
    cy.get("[data-test='field']").type("Another task{enter}");
    cy.get("[data-test='filterButton']")
      .eq(0)
      .should("exist")
      .and("have.text", "All")
      .click();
    cy.get("[data-test='item']").should("have.length", 2);
    cy.get("[data-test='item']:last").should("contain", "Another task");
    cy.get('[data-test="length"]').should("contain", "2 items left");
  });
});
