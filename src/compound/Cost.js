import React from "react"
import "./Cost.css"


export default function Cost(props) {

    const {costCategory, cost} = props;
    const {className} = props;

    return (
        <div className={`cost ${className}`}>
            <p>{costCategory}</p>
            <p>{cost}</p>
        </div>
    );
}