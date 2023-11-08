import React from "react"

export default function CategoryAdvertise(props) {
    
    const {title, motto, className} = props;

    return (
        <div className={className}>
            <h5>{title}</h5>
            {motto && <p>{motto}</p>}
            <button className="btn btn-pill text-red bg-beige">SİPARİŞ VER</button>
        </div>
    );
}