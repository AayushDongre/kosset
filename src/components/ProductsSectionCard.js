import React from "react";


const ProductsSectionCard = (props) => {
    return (
        <div className={`productsSectionCard align-middle ${props.background}`}>
            <p>{props.text}</p>
        </div>
    )
}

export default ProductsSectionCard;