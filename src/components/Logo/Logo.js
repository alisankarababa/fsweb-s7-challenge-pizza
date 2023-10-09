import "./Logo.css"

import React from "react"
function Logo(props) {

    return (
        <img className={`${props.className}`} src={props.logo} alt={`logo`}></img>
    )
}

export default Logo;