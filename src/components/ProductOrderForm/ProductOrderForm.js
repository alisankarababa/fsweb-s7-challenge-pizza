import "./ProductOrderForm.css"
import React from "react";
import RadioButtonGroup from "../RadioButtonGroup/RadioButtonGroup";
import DropDownList from "../DropDownList/DropDownList";
import CheckBoxGroup from "../CheckBoxGroup/CheckBoxGroup";
import OrderNotes from "../OrderNotes/OrderNotes";
import OrderCount from "../OrderCount/OrderCount";
import OrderTotal from "../OrderTotal/OrderTotal";


import { testAttributes } from "../../data/PageOrderData"
import { errorMessages } from "../../data/PageOrderData";

import { useState, useEffect } from "react";
import * as yup from "yup";

function ProductOrderForm(props) {

    const {hSubmit} = props;
    const {product} = props;
    const {className} = props;

    const initialFormEntries = {
        orderCount: 1,
        productName: product.name,
        productPrice: product.price,
        customerName: "",
        orderNotes: "",
        costTotal: 0,
        costExtra: 0,
        size: product.availableSizes[0],
        doughThickness: product.availableDoughThicknesses[0],
        extraIngredients: {}
    }

    const [formEntries, setFormEntries] = useState(initialFormEntries);
    const [isFormValid, setIsFormValid] = useState(false);
    const [formErrors, setFormErrors] = useState({customerName: "", doughThickness: ""});
    const [costExtra, setCostExtra] = useState(0);
    
    const formSchema = yup.object().shape({
        customerName: yup
        .string()
        .required(errorMessages.errorNameInputEmpty)
        .min(2, errorMessages.errorNameInputMin),
        doughThickness: yup
        .string()
        .notOneOf([product.availableDoughThicknesses[0]], errorMessages.errorDoughThickness)
    });
    
    for ( const item of product.availableExtraIngredients ) {
        initialFormEntries.extraIngredients[item] = false;
    }

    useEffect(() => {
        formSchema
        .isValid(formEntries)
        .then(valid => setIsFormValid(valid));
    }, [formEntries]);

    useEffect(() => {
        const newFormEntries = {...formEntries};
        newFormEntries.costExtra = newFormEntries.orderCount * costExtra;
        newFormEntries.costTotal = newFormEntries.orderCount * product.price + newFormEntries.costExtra;
        setFormEntries(newFormEntries);
    }, [costExtra, formEntries.orderCount])

    function hIncrementOrderCount(event) {
        event.preventDefault();

        const newFormEntries = {...formEntries};
        newFormEntries.orderCount += 1;
        setFormEntries(newFormEntries);
    }

    function hDecrementOrderCount(event) {
        event.preventDefault();

        if( 1 === formEntries.orderCount )
            return;

        const newFormEntries = {...formEntries};
        newFormEntries.orderCount -= 1;
        setFormEntries(newFormEntries);
    }
    
    function hChange(event) {
        const key = event.target.name;
        const value = ("checkbox" === event.target.type ? event.target.checked : event.target.value);

        if([key] in formEntries.extraIngredients) {
            const newFormEntries = {...formEntries};
            newFormEntries.extraIngredients[key] = value;
            
            if(true === value)
                setCostExtra((e) => e + product.priceExtraIngredient);
            else
                setCostExtra((e) => e - product.priceExtraIngredient);

            setFormEntries(newFormEntries);
        }
        else {
            setFormEntries({...formEntries, [key]: value});
        }

        if("customerName" === key || "doughThickness" === key)
        yup.reach(formSchema, key)
            .validate(value)
            .then(valid => { setFormErrors({ ...formErrors, [key]: "" }); })
            .catch(err => { setFormErrors({ ...formErrors, [key]: err.errors[0] }); });
    }

    function hControlledSubmit(event) {
        event.preventDefault();

        if(!isFormValid)
            return;
        
        hSubmit(formEntries);
    }
    
    return (

        <form onSubmit={hControlledSubmit} id="pizza-form">
            <div className={`form-radio-dropdown flex justify-content-between ${className}`}>
                <RadioButtonGroup
                    title={"Boyut Seç"}
                    groupName={"size"}
                    elements={product.availableSizes}
                    checkedElement={formEntries.size}
                    hChange={hChange}
                />
                
                <DropDownList
                datacy={testAttributes.inputDoughThickness}
                title={"Hamur Seç"}
                groupName={"doughThickness"}
                elements={product.availableDoughThicknesses}
                selected={formEntries.doughThickness}
                hChange={hChange}
                />
            </div>
            {formErrors.doughThickness && <p data-cy="error" className="error-message">{formErrors.doughThickness}</p>}

            <div className="w-80 form-checkboxes">
                <CheckBoxGroup
                    title={"Ek Malzemeler"}
                    explanation = "En Fazla 10 malzeme seçebilirsiniz. 5₺"
                    elements={product.availableExtraIngredients}
                    checkList={formEntries.extraIngredients}
                    hChange={hChange}
                />
            </div>
            {formErrors.extraIngredients && <p data-cy="error" className="error-message">{formErrors.extraIngredients}</p>}

            
            <OrderNotes
                className="form-orderNotes"
                id={"name-input"}
                inputName={"customerName"}
                labelText="Müşteri Adı"
                placeholder="İsminiz..."
                value={formEntries.customerName}
                datacy={testAttributes.inputCustomerName}
                hChange = {hChange}
            />
            {formErrors.customerName && <p data-cy="error" className="error-message">{formErrors.customerName}</p>}

            <OrderNotes
                className="form-orderNotes"
                id={"note-input"}
                inputName="orderNotes"
                labelText="Sipariş Notu"
                placeholder="Sipariş notunuz..."
                value={formEntries.notes}
                datacy={testAttributes.inputNotes}
                hChange = {hChange}
            />

            <hr/>

            <div className="flex justify-content-between">
                <OrderCount
                    orderCount={formEntries.orderCount}
                    hIncrementOrderCount={hIncrementOrderCount}
                    hDecrementOrderCount={hDecrementOrderCount}
                />

                <div className="w-60">
                    <OrderTotal
                        costExtra={formEntries.costExtra}
                        priceProduct={product.price}
                        costTotal={formEntries.costTotal}
                        orderCount={formEntries.orderCount}
                    />
                    <input data-cy="submit" disabled={!isFormValid} className="orderButton w-100" type="submit" value="SİPARİŞ VER"/>
                </div>
            </div>
        </form>
    )
}

export default ProductOrderForm;