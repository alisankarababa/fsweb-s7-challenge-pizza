import "./DropDownList.css"


import React from "react";

function DropDownList(props) {

    const {title, groupName, elements, selected, hChange} = props;
    const {datacy} = props;

    return (
        <div className="dropDownList">
            <label className="block text-darkgray" htmlFor={title}><span className="bold">{title}</span></label>
            <select data-cy={datacy} id={title} name={groupName} onChange={hChange} value={selected}>
                {
                    elements.map((element, idx) => (
                        <option key={Date.now() + 10 * idx} value={element}>{element}</option>
                    ))
                }
            </select>
        </div>
    )





}


export default DropDownList;