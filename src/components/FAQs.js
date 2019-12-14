import React from 'react';

const FAQs = () => {
    return (
        <div className="container" >
            <h3 className="faq-topic mt-3 mt-xl-5 pb-2 ml-4 ">Sanitary Pads</h3>
            <div className="accordion" id="accordionExample">
                <div className="card">
                    <div className="card-header" id="headingOne">
                        <h2 className="mb-0">
                            <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                What are Kosset Pads made of?
                            </button>
                        </h2>
                    </div>

                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div className="card-body">
                            Kosset Sanitary Pads are made of Cotton and organic (SAP) Superabsorbent Polymer. No harmful synthetics or chemicals have been used, making Kosset Pads a better alternative for you and the earth.                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" id="headingTwo">
                        <h2 className="mb-0">
                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                How do I use the Heavy Flow and Overnight(L), and Medium and Light Flow(M) pads and Panty Liners?
                            </button>
                        </h2>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div className="card-body">
                            Heavy Flow and Overnight Pads (L) are 290mm in length making them ideal for your heavy flow days and overnight use.
                            Light and Medium Flow Pads (M) are 240mm in length making them a comfortable choice for your days of light and medium flow.
                            Panty Liners are specially designed for light spotting, discharge and your days of period uncertainty, to keep you clean and comfortable without having to wear a full sized sanitary pad.
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" id="headingThree">
                        <h2 className="mb-0">
                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                How often do I change a Kosset Pad?
                            </button>
                        </h2>
                    </div>
                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                        <div className="card-body">
                        Like any other sanitary pad, a Kosset pad is advised to be changed every 6 hours to maintain proper hygiene and comfort.                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" id="headingFour">
                        <h2 className="mb-0">
                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                How do I dispose off my pads after use?
                            </button>
                        </h2>
                    </div>
                    <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                        <div className="card-body">
                        Kosset Sanitary pads come in individual disposal packets. Dispose pads in these eco-friendly, resealable packets after use.
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" id="headingFive">
                        <h2 className="mb-0">
                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                How do Kosset pads minimize irritation, rashes and leakage?
                                </button>
                        </h2>
                    </div>
                    <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                        <div className="card-body">
                        Unlike traditional sanitary pads, Kosset pads are free of chemicals and other synthetic materials. Moreover they are not bleached or scented, to ensure a period free of rashes and irritation. The soft cotton top sheet and (SAP) Superabsorbent Polymer, and the wider back on the Heavy Flow and Overnight Pads(L) make Kosset pads a leak proof choice.
                        </div>
                    </div>
                </div>
            </div>
            <h3 className="faq-topic mt-4 pb-2 ml-4">Order Cancellation, Delivery and Shipping</h3>
            <div className="accordion mb-4" id="accordionExample">
                <div className="card">
                    <div className="card-header" id="headingSix">
                        <h2 className="mb-0">
                            <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                                I placed an order by mistake. How do I cancel my order and get a refund?
                            </button>
                        </h2>
                    </div>

                    <div id="collapseSix" className="collapse show" aria-labelledby="headingSix" data-parent="#accordionExample">
                        <div className="card-body">
                        If you want to cancel your order, you just need to drop an email to support@kossetcare.com within 24 hours of placing the order. You will receive an email confirming the cancellation of your order in 24-48 business hours. The money will be refunded as per the payment mode within 6-8 working days of the confirmation. 
                        Please note that orders that have already been shipped from our side cannot be cancelled.                    
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" id="headingSeven">
                        <h2 className="mb-0">
                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                I cancelled my order but did not receive the refund. What should I do?
                             </button>
                        </h2>
                    </div>
                    <div id="collapseSeven" className="collapse" aria-labelledby="headingSeven" data-parent="#accordionExample">
                        <div className="card-body">
                        The refund takes about 6-8 working days to be credited to your bank account, from the date of cancellation of the order.
                         If you still have not received it, please drop an email at support@kossetcare.com.                     
                         </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" id="headingEight">
                        <h2 className="mb-0">
                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                How do I return my order?
                            </button>
                        </h2>
                    </div>
                    <div id="collapseEight" className="collapse" aria-labelledby="headingEight" data-parent="#accordionExample">
                        <div className="card-body">
                        Given that sanitary pads are a hygiene product and very intimate in the nature of use, we do not accept returns.
                         However, should you be facing any issue with the product, we would be glad to assist you with it.                        
                         </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" id="headingNine">
                        <h2 className="mb-0">
                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                What should I do if I find that the product is damaged during delivery?
                            </button>
                        </h2>
                    </div>
                    <div id="collapseNine" className="collapse" aria-labelledby="headingNine" data-parent="#accordionExample">
                        <div className="card-body">
                        If you find your order to be damaged because of any reason, please drop an email at support@kossetcare.com along with the pictures of the damage, 
                        within 24hours of receiving the order. We will replace the product in 6-8 working days after verifying the damage.                         </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" id="headingTen">
                        <h2 className="mb-0">
                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                My order has not been delivered. What should I do?
                            </button>
                        </h2>
                    </div>
                    <div id="collapseTen" className="collapse" aria-labelledby="headingTen" data-parent="#accordionExample">
                        <div className="card-body">
                        Any order takes about 5-7 working days to get delivered from the date of placing the order. 
                        If your supply has still not been delivered in the stipulated time, please drop an email at support@kossetcare.com and we will sort it out.                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" id="headingEleven">
                        <h2 className="mb-0">
                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                                Are there any shipping charges?
                            </button>
                        </h2>
                    </div>
                    <div id="collapseEleven" className="collapse" aria-labelledby="headingEleven" data-parent="#accordionExample">
                        <div className="card-body">
                        Shipping charges of INR 50 are applicable for orders below INR 500 value.                         
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" id="headingTwelve">
                        <h2 className="mb-0">
                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
                                What locations can Kosset products be delivered to?
                            </button>
                        </h2>
                    </div>
                    <div id="collapseTwelve" className="collapse" aria-labelledby="headingTwelve" data-parent="#accordionExample">
                        <div className="card-body">
                        We deliver all over India.                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQs;