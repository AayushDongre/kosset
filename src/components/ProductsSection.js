import React from "react";
import ProductsSectionCard from "./ProductsSectionCard";



const ProductsSection = () => {
    return (
        <div className="productsSection mb-xl-5">
            <div className="row no-gutters">
                <div className="col-md-4 col-6 order-2 order-md-1">
                    <ProductsSectionCard  image={true} imageUrl="./static/img/tile1.png" />
                </div>
                <div className="col-md-4  col-6 static order-1 order-md-2">
                    <ProductsSectionCard text="Premium Soft Cotton Surface" otherText="To prevent rashes and discomfort" extraClasses="pinkCard" />
                </div>
                <div className="col-md-4 d-md-flex d-none hover hover1 order-md-3">
                    <ProductsSectionCard text="To prevent rashes and discomfort" extraClasses="greenCard" />
                </div>
            </div>
            <div className="row no-gutters">
                <div className="col-md-4 d-md-flex d-none hover-left hover2">
                    <ProductsSectionCard text="To fight bacteria and odour" extraClasses="pinkCard" />
                </div>
                <div className="col-md-4 col-6">
                    <ProductsSectionCard image={true} imageUrl="./static/img/tile2.png" />
                </div>
                <div className="col-md-4 col-6 static">
                    <ProductsSectionCard text="Anion Strip" otherText="To fight bacteria and odour" extraClasses="greenCard" />
                </div>
            </div>
            <div className="row no-gutters">
                <div className="col-md-4 col-6 order-2 order-md-1">
                    <ProductsSectionCard image={true} imageUrl="./static/img/tile3.png" />
                </div>
                <div className="col-md-4 col-6 static order-md-2">
                    <ProductsSectionCard text="A Wider back" otherText="For extra precaution from leakage" extraClasses="pinkCard" />
                </div>
                <div className="col-md-4 d-md-flex d-none hover hover3 order-md-3">
                    <ProductsSectionCard text="For extra precaution from leakage" extraClasses="greenCard" />
                </div>
            </div>
            <div className="row no-gutters">
                <div className="col-md-4 d-md-flex d-none hover-left hover4">
                    <ProductsSectionCard text="For absorption upto 200ml"  extraClasses="greenCard" />
                </div>
                <div className="col-md-4 col-6">
                    <ProductsSectionCard image={true} imageUrl="./static/img/tile4.png" />
                </div>
                <div className="col-md-4 col-6 static">
                    <ProductsSectionCard text="Organic SAP sheet (Superabsorbent Polymer)" otherText="For absorption upto 200ml" extraClasses="pinkCard" />
                </div>
            </div>
            <div className="row no-gutters">
                <div className="col-md-4 col-6 order-2 order-md-1">
                    <ProductsSectionCard image={true} imageUrl="./static/img/tile5.png" />
                </div>
                <div className="col-md-4 col-6 static order-md-2">
                    <ProductsSectionCard text="Breathable top and bottom layer" otherText="To enhance air ventilation" extraClasses="greenCard" />
                </div>
                <div className="col-md-4 d-md-flex d-none hover order-md-3 hover5 " >
                    <ProductsSectionCard text="To enhance air ventilation"  extraClasses="pinkCard" />
                </div>
            </div>
    
        </div>
    )
}

export default ProductsSection;