/*global cy*/

import {dataPageSuccess} from "../fixtures/PageSuccessData"

const url = "http://localhost:3000/success";

describe('page-success testleri', () => {
  
    beforeEach(() => {
        cy.visit(url);
    })
    
    it("checks if there is a logo img", () => {
        cy.get('[data-cy="logo"]');
    })

    it("checks if there is a p element with ...", () => {
        cy.get('[data-cy="firstParagraph"]').should("have.text", dataPageSuccess.firstParagraph)
    })

    it("checks if there is a p element with ...", () => {
        cy.get('[data-cy="secondParagraph"]').should("have.text", dataPageSuccess.secondParagraph)
    })
})