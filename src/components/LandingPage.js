import React from "react";
import Hero from "./Hero";
import ProductsSection from "./ProductsSection";
import ProductBanner1 from "./ProductBanner1";
import ProductBanner2 from "./ProductBanner2";
import AppSection from "./AppSection";
import CommingSoonSection from "./ComingSoonSection";
import Footer from "./Footer";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { ToastRedirect } from './EcommercePage'


class LandingPage extends React.Component {
    render() {
        return (
            <div>
             <ToastContainer
                    position="top-center"
                    autoClose={2000}
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnVisibilityChange
                    draggable
                    pauseOnHover
                />
                <Hero />
                <ProductBanner1 />
                <ProductsSection />
                <ProductBanner2 />
                <AppSection />
                <CommingSoonSection />
                <Footer />
            </div>
    )}
}
export default LandingPage;