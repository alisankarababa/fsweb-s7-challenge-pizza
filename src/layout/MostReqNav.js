import React from "react";

import IconWithText from "../compound/IconWithText";

export default function MostReqNav(props) {

    const {dataList, className} = props;

    return (
        <nav className={`${className}`}>
            {
                dataList.map((item) => (
                    <button key={Date.now() + item.text2 } className="bg-white btn btn-pill">
                        <IconWithText srcIcon={item.src} text={item.text2}/>
                    </button>
                ))
            }
        </nav>
    );
}