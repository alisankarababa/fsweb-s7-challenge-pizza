import "./App.css"

import React from "react";
import axios from "axios";
import { Switch, Route, useHistory} from "react-router-dom";

import PageMain from "./pages/PageMain/PageMain";
import PageOrder from "./pages/PageOrder/PageOrder";
import PageSuccess from "./pages/PageSuccess/PageSuccess";

const urlPageMain = "/";
const urlPageSuccess = "/success";
const urlPageOrder = "/pizza"


const pizzas = [

    {
        name: "Position Absolute Acı Pizza",
        price: 85.50,
        priceExtraIngredient: 5,
        availableSizes: ["Küçük", "Orta", "Büyük"],
        availableDoughThicknesses: ["Hamur Kalınlığı", "Kalın", "İnce"],
        availableExtraIngredients: ["Pepperoni", "Domates", "Biber", "Sosis", "Mısır", "Sucuk", "Kanada Jambonu", "Ananas", "Jalepeno", "Soğan", "Sarımsak"],
        points: "4.9",
        number : "200",
        explanation: "Frontend Dev olarak hala position absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra        geneleneksel olarak odun atelinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir.. Küçük bir pizzaya bazen pizzetta denir."
    }
]

const App = () => {
    const history = useHistory();
    
    function hSubmit(formEntries) {
        console.log(formEntries);
        axios.post("https://reqres.in/api/user", formEntries)
        .then(function (response) {
            
            const order = response.data;
            console.log(order);

            const orderJSON = JSON.stringify(order);
            const encodedOrder = encodeURIComponent(orderJSON);

            history.push(`${urlPageSuccess}/${encodedOrder}`)
        })
        .catch(function (error) {
            console.error(error);
        });
    }
    
    return (
        <Switch>
            <Route exact path={urlPageMain}>
                <PageMain/>
            </Route>
            <Route exact path={urlPageOrder}>
                <PageOrder
                    product={pizzas[0]}
                    hSubmit={hSubmit}
                />
            </Route>
            <Route path={`${urlPageSuccess}/:order`}>
                <PageSuccess/>
            </Route>
        </Switch>
    );
};
export default App;
