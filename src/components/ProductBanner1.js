import React from "react";


const ProductBanner1 = () => {
    return (
        <div className="productBanner1 row">
            <div className="productBanner1-text col-md-6 px-lg-5">
                <p className=" banner1-title px-lg-5 pt-4 pt-md-0 ">Kosset Sanitary Pads</p>
                <p className="px-lg-5 px-4 pb-4 pb-md-0"> made of cotton and organic polymer, making them a better alternative for You and the Earth.
                Get rid of chemically processed,
                plastic containing sanitary pads and say
                goodbye to rashes and irritation.</p>
            </div>
            <div className="productBanner1-image px-0 col-lg-6">
            <img src="/static/img/sec1.webp" className="img-fluid"/>
            </div>
        </div>
    )
}

export default ProductBanner1;