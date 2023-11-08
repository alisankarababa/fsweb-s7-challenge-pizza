import React from "react";


import IconWithText from "../compound/IconWithText";

export default function IconWithTextGroup(props) {

    const {dataList, className} = props;

    return (
        <div className={`${className}`}>
            {
                dataList.map((item) => (
                    <IconWithText key={Date.now() + item.text} srcIcon={item.src} text={item.text}/>
                ))
            }
        </div>
    );
}