import "./Attribute.css"

import React from "react";

export default function Attribute(props) {

    const {className, label, itemList} = props;

    let {seperator} = props;
    const id = Date.now() + label;
    seperator = seperator ? seperator : " ";
    
    if(1 === itemList.length)
        seperator = "";

    const strItemList = itemList.join(seperator);
    return (
        <div className={className ? `attribute ${className}` : "attribute"}>
            <label htmlFor={id}>{label}</label>
            <span id={id} className="itemList">{strItemList}</span>
        </div>
    );
}

