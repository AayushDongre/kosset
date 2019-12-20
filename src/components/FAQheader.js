import React from 'react';

const FAQheader = (props) => {
    return(
        <div className="container-fluid faq-hero py-5" id="faq-hero">
            <h1 className="faq-title pt-5">{props.title}</h1>
            <p className="pb-lg-2 mb-lg-5">{props.subtitle}</p>
        </div>
    )
}

export default FAQheader;