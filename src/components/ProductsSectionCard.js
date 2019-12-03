import React from "react";


const ProductsSectionCard = (props) => {
    return (
        <div className={`productsSectionCard ${props.extraClasses}`}>
            <p>{props.text}</p>
        </div>
    )
}

export default ProductsSectionCard;