import React from "react";
import ProductsSectionCard from "./ProductsSectionCard";



const ProductsSection = () => {
    return (
        <div className="productsSection">
            <div className="row no-gutters">
                <div className="col-md-4 col-6">
                    <ProductsSectionCard  image={true} imageUrl="./static/img/tile1.webp" />
                </div>
                <div className="col-md-4  col-6 static">
                    <ProductsSectionCard text="Premium Soft Cotton Surface" otherText="To prevent rashes and discomfort" extraClasses="pinkCard" />
                </div>
                <div className="col-md-4 d-md-flex d-none hover">
                    <ProductsSectionCard text="To prevent rashes and discomfort" extraClasses="greenCard" />
                </div>
            </div>
            <div className="row no-gutters">
                <div className="col-md-4 d-md-flex d-none hover-left">
                    <ProductsSectionCard text="To fight bacteria and odour" extraClasses="pinkCard" />
                </div>
                <div className="col-md-4 col-6">
                    <ProductsSectionCard image={true} imageUrl="./static/img/tile2.webp" />
                </div>
                <div className="col-md-4 col-6 static">
                    <ProductsSectionCard text="Anion Strip" otherText="To fight bacteria and odour" extraClasses="greenCard" />
                </div>
            </div>
            <div className="row no-gutters">
                <div className="col-md-4 col-6">
                    <ProductsSectionCard image={true} imageUrl="./static/img/tile3.webp" />
                </div>
                <div className="col-md-4 col-6 static">
                    <ProductsSectionCard text="A Wider back" otherText="For extra precaution from leakage" extraClasses="pinkCard" />
                </div>
                <div className="col-md-4 d-md-flex d-none hover">
                    <ProductsSectionCard text="For extra precaution from leakage" extraClasses="greenCard" />
                </div>
            </div>
            <div className="row no-gutters">
                <div className="col-md-4 d-md-flex d-none hover-left">
                    <ProductsSectionCard text="For absorption upto 200ml"  extraClasses="greenCard" />
                </div>
                <div className="col-md-4 col-6">
                    <ProductsSectionCard image={true} imageUrl="./static/img/tile4.webp" />
                </div>
                <div className="col-md-4 col-6 static">
                    <ProductsSectionCard text="Organic SAP sheet (Superabsorbent Polymer" otherText="For absorption upto 200ml" extraClasses="pinkCard" />
                </div>
            </div>
            <div className="row no-gutters">
                <div className="col-md-4 col-6">
                    <ProductsSectionCard image={true} imageUrl="./static/img/tile5.webp" />
                </div>
                <div className="col-md-4 col-6 static">
                    <ProductsSectionCard text="Breathable top and bottom layer" otherText="To enhance air ventilation" extraClasses="greenCard" />
                </div>
                <div className="col-md-4 d-md-flex d-none hover">
                    <ProductsSectionCard text="To enhance air ventilation"  extraClasses="pinkCard" />
                </div>
            </div>
            <p className="natural">Natural</p>
            <p className="experience">Experience</p>
        </div>
    )
}

export default ProductsSection;