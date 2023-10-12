import "./Footer.css"

import React from "react";

import IconWithTextGroup from "../compound/IconWithTextGroup"
import FooterTexts from "../compound/FooterTexts"


import logo from "../Assets/logo.svg"

import iconLocation from "../Assets/adv-aseets/icons/icon-1.png"
import iconMail from "../Assets/adv-aseets/icons/icon-2.png"
import iconPhone from "../Assets/adv-aseets/icons/icon-3.png"

import imgF1 from "../Assets/adv-aseets/insta/li-0.png"
import imgF2 from "../Assets/adv-aseets/insta/li-1.png"
import imgF3 from "../Assets/adv-aseets/insta/li-2.png"
import imgF4 from "../Assets/adv-aseets/insta/li-3.png"
import imgF5 from "../Assets/adv-aseets/insta/li-4.png"
import imgF6 from "../Assets/adv-aseets/insta/li-5.png"


const contact = [
    {src: iconLocation, text: "341 Londonderry Road, Istanbul Türkiye"},
    {src: iconMail, text: "aciktim@teknolojikyemekler.com"},
    {src: iconPhone, text: "+90 216 123 45 67"},
]

const insta = [
    {src: imgF1},
    {src: imgF2},
    {src: imgF3},
    {src: imgF4},
    {src: imgF5},
    {src: imgF6},
]

const data = [
    "Terminal Pizza",
    "5 Kişilik Hackathlon Pizza",
    "useEffect Tavuklu Pizza",
    "Beyaz  Console Frosty" ,
    "Testler Geçti Mutlu Burger",
    "Position Absolute Acı Burger"
];

const dataHeading = "Sıccacık Menuler";

const instagramHeading = "Instagram";



export default function Footer(props) {

    const {className} = props;

    return (
        <footer className={`${className} bg-darkgray text-beige`}>
            {
                <div className="footerContent">
                    <div>
                        <img src={logo} alt="logo"/>
                        <IconWithTextGroup className="footer-icontexts" dataList={contact}/>
                    </div>
                    <FooterTexts className="footer-textarea" dataHeading={dataHeading} data={data}/>


                    <div className="footer-third">
                        <h3>{instagramHeading}</h3>
                        <div>
                            {
                                insta.map((item) => (
                                    <img className="img-insta" src={item.src} alt="img"/>
                                ))
                            }
                        </div>
                    </div>
                </div>
            }
        </footer>
    );
}