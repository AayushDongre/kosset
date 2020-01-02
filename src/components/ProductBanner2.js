import React from "react";
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';

const ProductBanner2 = () => {
    return (
        <div className="productBanner2 row">
            <div className="productBanner2-image px-0 col-md-6">
                <LazyLoad height="100%" once={true}>
                <img src="/static/img/sec2.png" className="img-fluid w-100" />
                </LazyLoad>
        </div>
        <div className="productBanner2-text col-md-6 d-flex flex-column justify-content-center">
            <ul>
                <li>Eco-friendly packets for easy disposal</li>
                <li>Your period essentials delivered to your doorstep</li>
                <li>Option to choose from 3 sizes to create your custom box of 15 pads in sync with your flow</li>

            </ul>
            <Link className="buyNow-Pb2 btn btn-outline-dark mx-4 mb-2  " to="/products">Buy Now</Link>
        </div>
        </div>
    )
}

export default ProductBanner2;