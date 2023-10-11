import "./OrderNotes.css"
import React from "react";


function OrderNotes(props) {

    const {id, labelText, inputName, value, hChange, placeholder} = props;
    const {className} = props;
    const {datacy} = props;
    return (
            <div className={`orderNotes ${className}`}>
                <label 
                    className="block" 
                    htmlFor={id}
                >
                    {labelText}
                </label>
                <input
                    data-cy={datacy}
                    id={id}
                    name={inputName}
                    value={value}
                    onChange={hChange}
                    placeholder={placeholder ? placeholder : ""}
                />
            </div>
    )
}

export default OrderNotes;