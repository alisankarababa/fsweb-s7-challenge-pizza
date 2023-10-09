import "./PageSuccess.css"
import logo from "../../Assets/logo.svg"

import React from "react"

const dataPageSuccess = {
    firstParagraph: "TEBRİKLER!",
    secondParagraph: "SİPARİŞİNİZ ALINDI!",
}

function PageSuccess() {
    return (
        <div className="page-success">
                <img data-cy="logo" src={logo} alt="logo.svg"></img>
                <p data-cy="firstParagraph">{dataPageSuccess.firstParagraph}</p>
                <p data-cy="secondParagraph">{dataPageSuccess.secondParagraph}</p>
        </div>
    )
}

export default PageSuccess;