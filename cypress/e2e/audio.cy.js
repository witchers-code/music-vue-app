describe("Audio Player", () => {
  it("plays audio", () => {
    cy.visit("/");
    cy.wait(2000);
    cy.get(".composition-name:first").click();
    cy.wait(2000);
    cy.get("#play-btn").click();

    cy.wait(5000);
    cy.get("#player-play-btn").click();
  });
});
