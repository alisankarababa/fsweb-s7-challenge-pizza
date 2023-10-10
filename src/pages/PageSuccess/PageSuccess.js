import "./PageSuccess.css"
import logo from "../../Assets/logo.svg"

import React from "react"
import Card from "../../atomic/Card"
import Cost from "../../compound/Cost"
import Attribute from "../../compound/Attribute"

import {useParams} from "react-router-dom"

const dataPageSuccess = {
    firstParagraph: "lezzetin yolda",
    secondParagraph: "SİPARİŞ ALINDI",
}

function PageSuccess(props) {
    console.log(useParams());
    const { order: orderEncoded } = useParams();
    const orderJSON = decodeURIComponent(orderEncoded);

    const order = JSON.parse(orderJSON);
    console.log(order);
    console.log(order.name);
    const extraIngredients = [];

    for (const key in order.extraIngredients) {

            if( order.extraIngredients[key] )
                extraIngredients.push(key);
    }

    return (
        <div className="page-success">
                <img data-cy="logo" src={logo} alt="logo.svg"></img>
                <p data-cy="firstParagraph" className="cursive">{dataPageSuccess.firstParagraph}</p>
                {/* <p data-cy="firstParagraph">{dataPageSuccess.firstParagraph}</p> */}
                <p data-cy="secondParagraph" className="secondParagraph">{dataPageSuccess.secondParagraph}</p>
                <hr/>
                <div className="order flex flex-col .align-items-start">
                </div>
                
                <Card className="order-name-details">
                    <p className="order-name">{order.productName}</p>
                    <Card className="order-details">
                        <Attribute label="Boyut: " itemList={Array(1).fill(order.size)}/>
                        <Attribute label="Hamur: " itemList={Array(1).fill(order.doughThickness)}/>
                        <Attribute label="Ek Malzemeler: " seperator="," itemList={extraIngredients}/>
                    </Card>
                </Card>
                <Card className="cost-card">
                    <h2>Sipariş Toplamı</h2>
                    <Cost className="cost" costCategory="Seçimler" cost={`${order.costExtra}₺`}/>
                    <Cost className="cost" costCategory="Toplam" cost={`${order.costTotal}₺`}/>
                </Card>

        </div>
    )
}

export default PageSuccess;