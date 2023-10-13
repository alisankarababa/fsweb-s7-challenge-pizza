/*global cy*/
import {testAttributes} from "../fixtures/PageOrderData";
import { errorMessages } from "../fixtures/PageOrderData";

const url = "http://localhost:3000/pizza";
const urlPageSuccess = "http://localhost:3000/pizza";

const sampleProduct = {
    name: "Position Absolute Acı Pizza",
    price: 85.50,
    priceExtraIngredient: 5,
    availableSizes: ["Küçük", "Orta", "Büyük"],
    availableDoughThicknesses: ["Hamur Kalınlığı", "Kalın", "İnce"],
    availableExtraIngredients: ["Pepperoni", "Domates", "Biber", "Sosis", "Mısır", "Sucuk", "Kanada Jambonu", "Ananas", "Jalepeno", "Soğan", "Sarımsak"],
    points: "4.9",
    number : "200",
    explanation: "Frontend Dev olarak hala position absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra        geneleneksel olarak odun atelinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir.. Küçük bir pizzaya bazen pizzetta denir."
}


describe('Sipariş Formu testleri', () => {
  
    beforeEach(() => {
        cy.visit(url);
    })

    it("checks if submit button is disabled as it should be", () => {
        cy.get('[data-cy="submit"]').should("be.disabled");
    })

    it("checks if radio buttons work", () => {
        
        for(const item of sampleProduct.availableSizes) {
            cy.get(`[data-cy=${item}]`).check();
            cy.get(`[data-cy=${item}]`).should("be.checked");
        }
    })

    it("checks if dropdown input works", () => {
        
        for(let i = 0 ; i < sampleProduct.availableDoughThicknesses.length; ++i) {
            cy.get(`[data-cy=${testAttributes.inputDoughThickness}]`).select(i).invoke("val").should("eq", sampleProduct.availableDoughThicknesses[i]);
        }
    })

    it("checks if checkboxes work", () => {

        for (const item of sampleProduct.availableExtraIngredients) {
            cy.get(`[data-cy=${item.replace(" ", "")}]`).check();
            cy.get(`[data-cy=${item.replace(" ", "")}]`).should("be.checked");
            cy.get(`[data-cy=${item.replace(" ", "")}]`).uncheck();
            cy.get(`[data-cy=${item.replace(" ", "")}]`).should("not.be.checked");
        }
    })

    it("checks if dropdown errors show up", () => {
        cy.get(`[data-cy=${testAttributes.inputDoughThickness}]`).select(1);
        cy.get(`[data-cy=${testAttributes.inputDoughThickness}]`).select(0);

        cy.get(`[data-cy=${testAttributes.error}]`).should("have.length", 1).should("have.text", errorMessages.errorDoughThickness);
    })

    it("checks if name errors show up", ()=> {
        cy.get(`[data-cy=${testAttributes.inputCustomerName}]`).type("aa");
        cy.get(`[data-cy=${testAttributes.inputCustomerName}]`).clear();

        cy.get(`[data-cy=${testAttributes.error}]`).should("have.length", 1).should("have.text", errorMessages.errorNameInputEmpty);

        cy.get(`[data-cy=${testAttributes.inputCustomerName}]`).type("a");
        cy.get(`[data-cy=${testAttributes.error}]`).should("have.length", 1).should("have.text", errorMessages.errorNameInputMin);
    })



    function enterValidInput() {
        const validInput = {
            name: "Name1",
            doughThickness: sampleProduct.availableDoughThicknesses[sampleProduct.availableDoughThicknesses.length - 1],
            size: sampleProduct.availableSizes[2],
            extraIngredient: sampleProduct.availableExtraIngredients[2]
        }
        cy.get(`[data-cy=${testAttributes.inputCustomerName}]`).type(validInput.name);
        cy.get(`[data-cy=${validInput.size.replace(" ", "")}]`).check();
        cy.get(`[data-cy=${testAttributes.inputDoughThickness}]`).select(validInput.doughThickness);

        cy.get(`[data-cy=${sampleProduct.availableExtraIngredients[0].replace(" ", "")}]`).check();
        cy.get(`[data-cy=${sampleProduct.availableExtraIngredients[1].replace(" ", "")}]`).check();
        cy.get(`[data-cy=${sampleProduct.availableExtraIngredients[2].replace(" ", "")}]`).check();

    }

    it("checks if entering valid data enables submit button and gives no error", () => {
        enterValidInput();
        cy.get(`[data-cy=${testAttributes.error}]`).should("not.exist");
        cy.get(`[data-cy="submit"]`).should("be.enabled");
    })

    it("checks if submitting valid data redirects to success page", () => {

        enterValidInput();

        cy.get(`[data-cy="submit"]`).click();

        cy.url().should("eq", urlPageSuccess);
    })
})












