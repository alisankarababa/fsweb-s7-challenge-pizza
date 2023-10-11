import "./PageMain.css"
import logo from "../../Assets/logo.svg"
import iconNoodle from "../../Assets/adv-aseets/icons/1.svg"
import iconPizza from "../../Assets/adv-aseets/icons/2.svg"
import iconHamburger from "../../Assets/adv-aseets/icons/3.svg"
import iconFries from "../../Assets/adv-aseets/icons/4.svg"
import iconBurgerAndBeverage from "../../Assets/adv-aseets/icons/5.svg"
import iconBeverage from "../../Assets/adv-aseets/icons/6.svg"

import IconWithText from "../../compound/IconWithText"

import React from "react";
import {Link} from "react-router-dom/cjs/react-router-dom.min";

const dataTopNav = [
    
    { src: iconNoodle, text: "YENİ! Kore" },
    { src: iconPizza, text: "Pizza" },
    { src: iconHamburger, text: "Burger" },
    { src: iconFries, text: "Kızartmalar" },
    { src: iconBurgerAndBeverage, text: "Fast Food" },
    { src: iconBeverage, text: "Gazlı İçecek" },
]

const dataPageMain = {
    paragraphFirstLine: "KOD ACIKTIRIR",
    paragraphSecondLine: "PIZZA, DOYURUR",
    linkText: "ACIKTIM",
    linkUrl: "/pizza"
}

function PageMain(props) {

    return (
        <div className="page-main">
            <div className="banner-main text-beige text-center">
                <img data-cy="logo" src={logo} alt="logo.svg"></img>
                <h1 data-cy="paragraph">{dataPageMain.paragraphFirstLine}<br/>{dataPageMain.paragraphSecondLine}</h1>
                <Link className="link" data-cy="order-pizza" id="order-pizza" to={dataPageMain.linkUrl}>{dataPageMain.linkText}</Link>
            </div>

            <nav>
                <ul className="flex justify-content-between">
                {
                    dataTopNav.map((item) => (
                        <li className="d-inline">
                            <IconWithText className="flex align-items-center" srcIcon={item.src} text={item.text}/>
                        </li>
                    ))
                }
                </ul>
            </nav>

            <section className="sec-area1">
                    <div className="bg-pizza"> 
                        <p>Özel Lezzetus</p>
                        <p>Position:Absolute Acı Burger</p>
                        <button className="btn-pill text-red bg-beige">SİPARİŞ VER</button>
                    </div>
                    <div>
                        <div className="bg-fastfood"> </div>
                        <div className="bg-delivery"> </div>
                    </div>
            </section>

        </div> 



    )


}

export {dataPageMain};

export default PageMain;