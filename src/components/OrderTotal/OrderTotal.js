import "./OrderTotal.css"

import React from "react";

function OrderTotal(props) {

    const {costExtra, costTotal} = props;
    const {className} = props;

    return (

        <div className={`${className}`}>
            <div className={`orderTotal`}>
                <h2>Sipariş Toplamı</h2>
                <div className="text-gray flex justify-content-between">
                    <p><span className="bold">Seçimler</span></p>
                    <p><span className="bold">{costExtra}₺</span></p>
                </div>
                <div className="text-red flex justify-content-between">
                    <p><span className="bold">Toplam</span></p>
                    <p><span className="bold">{costTotal}₺</span></p>
                </div>
            </div>
        </div>

    )

}

export default OrderTotal;