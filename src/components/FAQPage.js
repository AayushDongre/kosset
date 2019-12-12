import React from "react";
import FAQheader from './FAQheader.js'
import FAQs from './FAQs.js'
import Footer from './Footer.js'

//make child components alag files me, import and add inside the div

const FAQPage = () => {
    return (
        <div>
       <FAQheader/>
       <FAQs/>
       <Footer/>
       </div>
    )
}

export default FAQPage;