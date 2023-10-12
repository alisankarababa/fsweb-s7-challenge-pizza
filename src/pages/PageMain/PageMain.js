import "./PageMain.css"
import logo from "../../Assets/logo.svg"
import iconNoodle from "../../Assets/adv-aseets/icons/1.svg"
import iconPizza from "../../Assets/adv-aseets/icons/2.svg"
import iconHamburger from "../../Assets/adv-aseets/icons/3.svg"
import iconFries from "../../Assets/adv-aseets/icons/4.svg"
import iconBurgerAndBeverage from "../../Assets/adv-aseets/icons/5.svg"
import iconBeverage from "../../Assets/adv-aseets/icons/6.svg"

import imgMostReq1 from "../../Assets/adv-aseets/food-1.png"
import imgMostReq2 from "../../Assets/adv-aseets/food-2.png"
import imgMostReq3 from "../../Assets/adv-aseets/food-3.png"




import CategoryAdvertise from "../../compound/CategoryAdvertise"

import MainNav from "../../layout/MainNav"
import Footer from "../../layout/Footer"

import React from "react";
import {Link} from "react-router-dom/cjs/react-router-dom.min";
import MostReqNav from "../../layout/MostReqNav"
import FoodDisplay from "../../layout/FoodDisplay"

const navDataList = [
    { src: iconNoodle, text: "YENİ! Kore", text2: "Ramen" },
    { src: iconPizza, text: "Pizza", text2: "Pizza" },
    { src: iconHamburger, text: "Burger", text2: "Burger" },
    { src: iconFries, text: "Kızartmalar", text2: "French Fries" },
    { src: iconBurgerAndBeverage, text: "Fast Food", text2: "Fast Food" },
    { src: iconBeverage, text: "Gazlı İçecek", text2: "Soft Drinks"},
]

const mostReqFoods = [
    {src: imgMostReq1, name: "Terminal Pizza", rating: 4.9, cntOrder: 200, price: 60},
    {src: imgMostReq2, name: "Position Absolute Acı Pizza", rating: 4.9, cntOrder: 928, price: 85},
    {src: imgMostReq3, name: "useEffect Tavuklu Burger", rating: 4.9, cntOrder: 462, price: 75},
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

            <MainNav className="nav-main" dataList= {navDataList} />

            <div className="bg-beige mid-area">
                <section className="sec-area1 bg-beige">
                        <div className="bg-pizza">
                            <CategoryAdvertise
                                title={"Özel Lezzetus"}
                                motto="Position:Absolute Acı Burger"
                            />
                        </div>
                        <div>
                            <div className="bg-fastfood">
                                <CategoryAdvertise
                                    title={"Hackathlon Burger Menü"}
                                />
                            </div>
                            <div className="bg-delivery">
                                <CategoryAdvertise
                                    title={<><span className="text-red">Çoooook</span> hızlı npm gibi kurye</>}
                                />
                            </div>
                        </div>
                </section>

                <section className="sec-mostrequested">
                    <p className="text-red cursive text-center">en çok paketlenen menüler</p>
                    <p className="text-darkgray text-center fw-600">Acıktıran Kodlara Doyuran Lezzetler</p>

                    <MostReqNav className="nav-mostreq" dataList= {navDataList}/>
                    <FoodDisplay className="food-display" dataList={mostReqFoods}/>
                </section>
            </div>

            <Footer/>

        </div> 
    )
}

export {dataPageMain};

export default PageMain;