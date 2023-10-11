import React from "react"

export default function IconWithText(props) {
    
    return (
        <div className={`${props.className}`}>
            <img src={props.srcIcon} alt={props.srcIcon}/>
            <span>{props.text}</span>
        </div>
    )    
}