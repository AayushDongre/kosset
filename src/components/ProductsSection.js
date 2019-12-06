import React from "react";
import ProductsSectionCard from "./ProductsSectionCard";

const ProductsSection = () => {
    return (
        <div className="productsSection px-xl-5">
            <div className="row">
                <div className="col-md-4">
                    <ProductsSectionCard text="" extraClasses="cardBg1 cardBg" />
                </div>
                <div className="col-md-4  static">
                    <ProductsSectionCard text="Premium Soft Cotton Surface" extraClasses="pinkCard" />
                </div>
                <div className="col-md-4 hover">
                    <ProductsSectionCard text="To prevent rashes and discomfort" extraClasses="greenCard" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 hover-left">
                    <ProductsSectionCard text="To fight bacteria and odour" extraClasses="pinkCard" />
                </div>
                <div className="col-md-4">
                    <ProductsSectionCard extraClasses="cardBg2 cardBg" />
                </div>
                <div className="col-md-4 static">
                    <ProductsSectionCard text="Anion Strip" extraClasses="greenCard" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <ProductsSectionCard extraClasses="cardBg3 cardBg" />
                </div>
                <div className="col-md-4 static">
                    <ProductsSectionCard text="A Wider back" extraClasses="pinkCard" />
                </div>
                <div className="col-md-4 hover">
                    <ProductsSectionCard text="For extra precaution from leakage" extraClasses="greenCard" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 hover-left">
                    <ProductsSectionCard text="For absorption upto 200ml"  extraClasses="greenCard" />
                </div>
                <div className="col-md-4">
                    <ProductsSectionCard extraClasses="cardBg4 cardBg" />
                </div>
                <div className="col-md-4 static">
                    <ProductsSectionCard text="Organic SAP sheet (Superabsorbent Polymer" extraClasses="pinkCard" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <ProductsSectionCard extraClasses="cardBg5 cardBg" />
                </div>
                <div className="col-md-4 static">
                    <ProductsSectionCard text="Breathable top and bottom layer" extraClasses="greenCard" />
                </div>
                <div className="col-md-4 hover">
                    <ProductsSectionCard text="To enhance air ventilation"  extraClasses="pinkCard" />
                </div>
            </div>
            <p className="natural">Natural</p>
            <p className="experience">Experience</p>
        </div>
    )
}

export default ProductsSection;