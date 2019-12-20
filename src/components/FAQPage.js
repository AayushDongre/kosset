import React from "react";
import FAQheader from './FAQheader.js'
import FAQs from './FAQs.js'
import Footer from './Footer.js'
import { Nav } from './Hero.js'


const FAQPage = () => {
    return (
        <div>
            <Nav />
            <FAQheader title={'Frequently Asked Questions'}
                subtitle={'You can browse the questions below to find what you are looking for.'}
            />
            <FAQs />
            <Footer />
        </div>
    )
}

export default FAQPage;