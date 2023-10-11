import "./ProductOrderForm.css"
import React from "react";
import RadioButtonGroup from "../RadioButtonGroup/RadioButtonGroup";
import DropDownList from "../DropDownList/DropDownList";
import CheckBoxGroup from "../CheckBoxGroup/CheckBoxGroup";
import OrderNotes from "../OrderNotes/OrderNotes";
import OrderCount from "../OrderCount/OrderCount";
import OrderTotal from "../OrderTotal/OrderTotal";


import { testAttributes } from "../../data/PageOrderData"



function ProductOrderForm(props) {
    const {product, formEntries, formErrors} = props;
    const {hChange} = props;
    const {className} = props;
    const {onSubmit} = props;
    const {hIncrementOrderCount, hDecrementOrderCount} = props;
    const {disabled} = props;
    
    return (

        <form onSubmit={onSubmit} id="pizza-form">
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
                    <input data-cy="submit" disabled={disabled} className="orderButton w-100" type="submit" value="SİPARİŞ VER"/>
                </div>
            </div>
        </form>
    )
}

export default ProductOrderForm;