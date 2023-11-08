import "./IconWithText.css"
import React from "react"

export default function IconWithText(props) {
    
    return (
        <div className={`icon-text ${props.className}`}>
            <img src={props.srcIcon} alt={props.srcIcon}/>
            <span>{props.text}</span>
        </div>
    )
}