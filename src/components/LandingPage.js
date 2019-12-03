import React from "react";
import Hero from "./Hero";
import ProductsSection from "./ProductsSection";
import ProductBanner1 from "./ProductBanner1";
import ProductBanner2 from "./ProductBanner2";

const LandingPage = () => {
    return (
        <div>
            < Hero />
            <ProductBanner1 />
            <ProductsSection g/>
            <ProductBanner2 />

        </div>
    )
}

export default LandingPage;