import React from "react";
import Hero from "./Hero";
import ProductsSection from "./ProductsSection";
import ProductBanner1 from "./ProductBanner1";
import ProductBanner2 from "./ProductBanner2";
import AppSection from "./AppSection";
import CommingSoonSection from "./ComingSoonSection";
import Footer from "./Footer"

const LandingPage = () => {
    return (
        <div>
            < Hero />
            <ProductBanner1 />
            <ProductsSection />
            <ProductBanner2 />
            <AppSection />
            <CommingSoonSection />
            <Footer />
        </div>
    )
}

export default LandingPage;