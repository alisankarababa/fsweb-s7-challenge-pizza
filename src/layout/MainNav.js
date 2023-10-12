import React from "react";


import IconWithText from "../compound/IconWithText";

export default function MainNav(props) {

    const {dataList, className} = props;

    return (
        <nav className={`${className}`}>
            {
                dataList.map((item, idx) => (
                    <IconWithText key={Date.now() + idx} srcIcon={item.src} text={item.text}/>
                ))
            }
        </nav>
    );
}