import React from 'react';
import Footer from './Footer.js';
import { Nav } from './Hero.js';
import FAQheader from './FAQheader.js';

const TnC = () => {
    return (
        <div>
            <Nav />
            <FAQheader title={'Terms & Conditions'} subtitle={''} />
            <div className="container">
                <h2>Terms of Use</h2>
                <p>The following terms and conditions govern your use of kossetcare.com (hereinafter referred to as “Site”) owned by "NAME HERE" Limited (hereinafter referred to as “we”, “us” or “our”).
                By using the Site, you accept and agree to the terms and conditions under these Terms of Use.
                </p>
                <p>This Terms of Use was updated on "SITE RELEASE DATE"></p>
            </div>
            <Footer />
        </div>
    )
}

export default TnC;