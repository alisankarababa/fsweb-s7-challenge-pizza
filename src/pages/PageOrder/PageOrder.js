import "./PageOrder.css"
import React from "react";
import Product from "../../components/Product/Product";
import ProductOrderForm from "../../components/ProductOrderForm/ProductOrderForm";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import logo from "../../Assets/logo.svg"

function PageOrder(props) {

    const {product, hSubmit} = props;
   
    return (
        <div className="page-order">

            <div className="text-beige headerish">
                <div id="header-logo" className="container text-center">
                    <img src={logo} alt="logo.svg"></img>
                </div>
                <div className="container">
                    <p className="page-path"><Link className="link" to="/">Anasayfa</Link> - Seçenekler - <span className="bold">Sipariş Oluştur</span></p>
                </div>
            </div>

            <div className="container">

                <div className="pageOrder-product">
                    <Product product={product}/>
                </div>
                <ProductOrderForm
                    className="pageOrder-form w-80"
                    product={product}
                    hSubmit={hSubmit}
                />

            </div>
        </div>
    );

}


export default PageOrder;