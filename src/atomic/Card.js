import React from "react"

export default function Card(props) {
    
    const {className, children} = props;
    
    return (
        <div className={className}>
            {children}
        </div>
    )
}

