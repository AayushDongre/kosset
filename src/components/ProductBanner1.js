import React from "react";
import { Link } from 'react-router-dom';


const ProductBanner1 = () => {
    return (
        <div className="productBanner1 row" id="ProductBanner1">
            <div className="productBanner1-text col-md-6 px-lg-5 px-4 py-5">
                <p className="px-lg-5  py-md-4 pb-md-0 mb-0">Kosset Sanitary Pads are made of cotton and organic polymer, making them a better alternative for You and the Earth.<br />
                    Get rid of chemically processed,
                    plastic containing sanitary pads and say
                    goodbye to rashes and irritation.
                 </p>
                <div className="buyNow d-block px-5">
                    <Link className="buyNow-Pb btn btn-outline-dark mb-2 mb-lg-4 px-4 mt-3 mt-md-0 " to="/products">Buy Now</Link>
                </div>
            </div>
            <div className="productBanner1-image px-0 col-lg-6">
                <picture>
                    <source srcSet="/static/img/sec1.webp" type="image/webp" className="img-fluid"/>
                        <source srcSet="/static/img/sec1.png" type="image/png" className="img-fluid"/>
                        <img src="/static/img/sec1.webp" className="img-fluid" />
                </picture>
                            
            </div>
        </div>
                    )
                }
                
export default ProductBanner1;