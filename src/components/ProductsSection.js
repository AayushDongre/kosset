import React from "react";
import ProductsSectionCard from "./ProductsSectionCard";

const ProductsSection = () => {
    return (
        <div className="productsSection">
            <div className="row">
                <div className="col-md-4">
                    <ProductsSectionCard background="cardBg1 cardBg" text="wot"/>
                </div>
                <div className="col-md-4">
                    <ProductsSectionCard text="Premium Soft Cotton Surface" background="pinkCard" />
                </div>
                <div className="col-md-4">
                    <ProductsSectionCard text="To prevent rashes and discomfort" background="greenCard" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <ProductsSectionCard/>
                </div>
                <div className="col-md-4">
                    <ProductsSectionCard background="cardBg2 cardBg" />
                </div>
                <div className="col-md-4">
                    <ProductsSectionCard text="Anion Strip" background="greenCard" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <ProductsSectionCard background="cardBg3 cardBg" />
                </div>
                <div className="col-md-4">
                    <ProductsSectionCard text="A Wider back" background="pinkCard" />
                </div>
                <div className="col-md-4">
                    <ProductsSectionCard/>
                </div>
            </div>

            <div className="row">
                <div className="col-md-4">
                    <ProductsSectionCard/>
                </div>
                <div className="col-md-4">
                    <ProductsSectionCard background="cardBg4 cardBg" />
                </div>
                <div className="col-md-4">
                    <ProductsSectionCard text="Organic SAP sheet (Superabsorbent Polymer" background="pinkCard" />
                </div>
            </div>

            <div className="row">
                <div className="col-md-4">
                    <ProductsSectionCard background="cardBg5 cardBg" />
                </div>
                <div className="col-md-4">
                    <ProductsSectionCard text="Breathable top and bottom layer" background="greenCard" />
                </div>
                <div className="col-md-4">
                    <ProductsSectionCard/>
                </div>
            </div>
        </div>
    )
}

export default ProductsSection;