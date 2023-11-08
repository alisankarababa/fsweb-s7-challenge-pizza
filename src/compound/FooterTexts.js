import "./FooterTexts.css"

import React from "react";


export default function FooterTexts(props) {

    const {className, dataHeading, data} = props

    return (
        <div className={`${className} footer-texts`}>
            <h3>{dataHeading}</h3>
            {
                data.map((item) => (
                    <p key={Date.now() + item}>{item}</p>
                ))
            }
        </div>
    );
}
