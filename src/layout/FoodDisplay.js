import React from "react";

import "./FoodDisplay.css"

import Food from "../compound/Food";

export default function FoodDisplay(props) {

    const {dataList, className} = props;

    return (
        <div className={`${className}`}>
            {
                dataList.map((item) => (
                    <Food
                        key={Date.now() + item.name}
                        className="food-display--item"
                        img={item.src}
                        name={item.name}
                        rating={item.rating}
                        cntOrder={item.cntOrder}
                        price={item.price}
                    />
                ))
            }
        </div>
    );
}