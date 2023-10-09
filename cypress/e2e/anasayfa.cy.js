/*global cy*/

import {data} from "../fixtures/PageMainData"

const url = "http://localhost:3000/";
const urlPizza = "http://localhost:3000/pizza";

describe('Anasayfa Testleri', () => {
  
    beforeEach(() => {
        cy.visit(url);
    })
    
    it("checks if there is a logo img", () => {
        cy.get('[data-cy="logo"]');
    })

    it("checks if there is a p element with ...", () => {
        cy.get('[data-cy="paragraph"]').should("have.text", `${data.paragraphFirstLine}${data.paragraphSecondLine}`)
    })

    it("checks if there is a button that links to /pizza", () => {
        cy.get('[data-cy="order-pizza"]').click();

        cy.url().should("eq", urlPizza);
    })


    //yukarıda bir img olacak
    //altında KOD ACIKTIRIR <br> PIZZA DOYURUR p tagi ile 
    //ACIKTIM YAZAN BuTON
        //buton /pizza ya gidecek


})