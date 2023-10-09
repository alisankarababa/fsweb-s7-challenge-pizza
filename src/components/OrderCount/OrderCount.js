import "./OrderCount.css"

import React from "react";

function OrderCount(props) {

    const {orderCount, hIncrementOrderCount, hDecrementOrderCount} = props

    return (

        <div className="orderCount flex">
            <button className="left" onClick={hDecrementOrderCount}>-</button>
            <p>{orderCount}</p>
            <button className="right" onClick={hIncrementOrderCount}>+</button>
        </div>
    )
}

export default OrderCount;