import "./OrderNotes.css"
import React from "react";


function OrderNotes(props) {

    const {id, labelText, inputName, value, hChange} = props;
    const {className} = props;
    const {datacy} = props;
    return (
            <div className={`orderNotes ${className}`}>
                <label className="block" htmlFor={id}><span className="bold">{labelText}</span></label>
                <input data-cy={datacy} id={id} name={inputName} value={value} onChange={hChange} placeholder="İsim"/>
            </div>
    )
}

export default OrderNotes;