import React from "react"
import "./Food.css"

export default function Food(props) {

    const { img, name, rating, cntOrder, price, className} = props;

    return (
        <div className={`${className} compound-component-food`}>
            <div>
                <img src={img} alt={img}/>
                <h5>{name}</h5>
                <div className="flex justify-content-between">
                    <span>{rating}</span>
                    <span>{`(${cntOrder})`}</span>
                    <span className="fw-600">{(price)}₺</span>
                </div>
            </div>
        </div>
    );
}