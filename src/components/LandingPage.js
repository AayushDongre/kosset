import React from "react";
import Hero from "./Hero";
import ProductsSection from "./ProductsSection";
import ProductBanner1 from "./ProductBanner1";
import ProductBanner2 from "./ProductBanner2";
import AppSection from "./AppSection";

const LandingPage = () => {
    return (
        <div>
            < Hero />
            <ProductBanner1 />
            <ProductsSection />
            <ProductBanner2 />
            <AppSection />
        </div>
    )
}

export default LandingPage;