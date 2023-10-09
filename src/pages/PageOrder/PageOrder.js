import "./PageOrder.css"
import React from "react";
import Product from "../../components/Product/Product";
import ProductOrderForm from "../../components/ProductOrderForm/ProductOrderForm";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


import { useState, useEffect } from "react";
import * as yup from "yup";


import logo from "../../Assets/logo.svg"

import { errorMessages } from "../../data/PageOrderData";
import { testAttributes } from "../../data/PageOrderData"


function PageOrder(props) {

    const {hSubmit} = props;
    const {product} = props;

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
    
    const [formEntries, setFormEntries] = useState(initialFormEntries);
    const [isFormValid, setIsFormValid] = useState(false);
    const [formErrors, setFormErrors] = useState({customerName: false, doughThickness: false});
    const [costExtra, setCostExtra] = useState(0);

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
            .then(valid => { setFormErrors({ ...formErrors, [key]: false }); })
            .catch(err => { setFormErrors({ ...formErrors, [key]: err.errors[0] }); });
    }

    function hControlledSubmit(event) {
        event.preventDefault();

        if(!isFormValid)
            return;
        
        hSubmit(formEntries);
    }

    return (
        <div className="page-order">

            <div className="text-beige headerish">
                <div id="header-logo" className="container text-center">
                    <img src={logo} alt="logo.svg"></img>
                </div>
                <div className="container">
                    <p className="page-path"><Link className="link" to="/">Anasayfa</Link> - Seçenekler - <span className="bold">Sipariş Oluştur</span></p>
                </div>
            </div>

            <div className="container">

                <div className="pageOrder-product">
                    <Product product={product}/>
                </div>
                <ProductOrderForm
                    onSubmit={hControlledSubmit}
                    className="pageOrder-form w-80"
                    product={product}
                    formEntries={formEntries}
                    formErrors={formErrors}
                    disabled={!isFormValid}
                    hChange={hChange}
                    hIncrementOrderCount={hIncrementOrderCount}
                    hDecrementOrderCount={hDecrementOrderCount}
                    testAttributes={testAttributes}
                />

            </div>
            
            {/* <hr className="w-50"/> */}
            


        </div>
    );

}


export default PageOrder;