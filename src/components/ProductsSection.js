import React from "react";
import ProductsSectionCard from "./ProductsSectionCard";

const ProductsSection = () => {
    return (
        <div className="productsSection">
            <div className="row">
                <div className="col-md-4">
                    <ProductsSectionCard text=""  extraClasses="cardBg1 cardBg"/>
                </div>
                <div className="col-md-4">
                    <ProductsSectionCard text="Premium Soft Cotton Surface" extraClasses="pinkCard static" />
                </div>
                <div className="col-md-4">
                    <ProductsSectionCard text="To prevent rashes and discomfort" extraClasses="greenCard hover" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <ProductsSectionCard extraClasses="hover"/>
                </div>
                <div className="col-md-4">
                    <ProductsSectionCard extraClasses="cardBg2 cardBg" />
                </div>
                <div className="col-md-4">
                    <ProductsSectionCard text="Anion Strip" extraClasses="greenCard static" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <ProductsSectionCard extraClasses="cardBg3 cardBg" />
                </div>
                <div className="col-md-4">
                    <ProductsSectionCard text="A Wider back" extraClasses="pinkCard static" />
                </div>
                <div className="col-md-4">
                    <ProductsSectionCard extraClasses="hover"/>
                </div>
            </div>

            <div className="row">
                <div className="col-md-4">
                    <ProductsSectionCard extraClasses="hover"/>
                </div>
                <div className="col-md-4">
                    <ProductsSectionCard extraClasses="cardBg4 cardBg" />
                </div>
                <div className="col-md-4">
                    <ProductsSectionCard text="Organic SAP sheet (Superabsorbent Polymer" extraClasses="pinkCard static" />
                </div>
            </div>

            <div className="row">
                <div className="col-md-4">
                    <ProductsSectionCard extraClasses="cardBg5 cardBg" />
                </div>
                <div className="col-md-4">
                    <ProductsSectionCard text="Breathable top and bottom layer" extraClasses="greenCard static" />
                </div>
                <div className="col-md-4">
                    <ProductsSectionCard extraClasses="hover"/>
                </div>
            </div>
        </div>
    )
}

export default ProductsSection;