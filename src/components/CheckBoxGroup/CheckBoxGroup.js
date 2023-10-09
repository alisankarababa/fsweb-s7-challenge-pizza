import "./CheckBoxGroup.css"
import React from "react";
function CheckBoxGroup(props) {
    
    const {title, explanation, elements, checkList, hChange} = props;
    
    return (

        <div className="checkboxGroup">
            <h2>{title}</h2>
            <p className="explanation">{explanation}</p>
            <div className="flex flex-wrap">
                {
                    elements.map((element, idx) => (
                        <div className="checkBox" key={Date.now() + idx}>
                            <input
                                data-cy={element.replace(" ", "")}
                                type="checkbox"
                                name={element}
                                id={element}
                                checked={checkList[element]}
                                onChange={hChange}/>
                            <label htmlFor={element}>{element}</label>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CheckBoxGroup;