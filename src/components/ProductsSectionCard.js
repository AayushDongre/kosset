import React from "react";


const ProductsSectionCard = (props) => {
    return (
        <div className={`productsSectionCard ${props.extraClasses}`}>
            {props.text && <p >{props.text}</p>}
            { props.image &&  <img src={props.imageUrl} className="img-fluid" />}
            {props.otherText && <p className="d-md-none d-inline-block info-text-card">{props.otherText}</p>}
        </div>
    )
}

export default ProductsSectionCard;