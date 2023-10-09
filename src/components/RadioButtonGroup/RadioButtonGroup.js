import "./RadioButtonGroup.css"
import React from "react";

function RadioButtonGroup(props) {

    const {title, elements, groupName, checkedElement, hChange} = props;

    return (
        <div className="radioButtonGroup">
            <h2><span className="bold">{title}</span></h2>
            {
                elements.map((element, idx) => (
                    <div className="radioButton text-gray" key={Date.now() + idx}>
                        <input data-cy={element.replace(" ", "")} type="radio" id={element} name={groupName} value={element} checked={checkedElement === element} onChange={hChange}/>
                        <label htmlFor={element}>{element}</label>
                    </div>
                ))
            }
        </div>
    )
}

export default RadioButtonGroup;