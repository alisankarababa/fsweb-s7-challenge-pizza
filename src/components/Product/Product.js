import "./Product.css"
import React from "react";

function Product(props) {

    const {name, explanation, price, points, number} = props.product;

    return (
        <div className="product text-darkgray">
            <h1>{name}</h1>
            <div className="">
                <p className="product-price grow-3"><span className="bold">{price}₺</span></p>
                <div className="flex justify-content-between text-gray grow-1">
                    <p className="product-points">{points}</p>
                    <p className="product-number">({number})</p>
                </div>
            </div>
            <p className="text-gray product-explanation">{explanation}</p>
        </div>


    )
}

export default Product;