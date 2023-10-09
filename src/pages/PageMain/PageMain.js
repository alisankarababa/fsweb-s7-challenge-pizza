import "./PageMain.css"
import logo from "../../Assets/logo.svg"
import React from "react";
import {Link} from "react-router-dom/cjs/react-router-dom.min";

const dataPageMain = {
    paragraphFirstLine: "KOD ACIKTIRIR",
    paragraphSecondLine: "PIZZA, DOYURUR",
    linkText: "ACIKTIM",
    linkUrl: "/pizza"
}
function PageMain(props) {

    return (
        <div className="pageMain text-beige text-center">
            <img data-cy="logo" src={logo} alt="logo.svg"></img>
            <p data-cy="paragraph">{dataPageMain.paragraphFirstLine}<br/>{dataPageMain.paragraphSecondLine}</p>
            <Link className="link" data-cy="order-pizza" id="order-pizza" to={dataPageMain.linkUrl}>{dataPageMain.linkText}</Link>
        </div>
    )


}

export {dataPageMain};

export default PageMain;