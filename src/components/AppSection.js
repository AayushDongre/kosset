import React from 'react'

const AppSection = () => {
    return (
        <div className="appSection p-md-5 " id="AppSection">
            <div className="container mt-xl-3">
                <h1>For the Complete Kosset Experience</h1>
                <p className="tryTheApp">Try the <strong>KOSSET CLOSET</strong> App (Coming Soon)</p>
                <p className="just mt-3">Just like your closet at home, it's a one-stop digital closet
             that stores all your menstruatuion, sexual health and sanitation related needs.</p>
                <img className="py-2 mx-2 mx-lg-4 img-fluid play-store-icon" src="/static/img/playstore.png"></img>
                <img className="py-2 mx-2 mx-lg-4 img-fluid play-store-icon" src="/static/img/appstore.png"></img>
                
            </div>
            <img src="/static/img/phone.webp" className="phone img-fluid mt-3 mb-3"></img>
            <div className="container">
                <div className="row py-lg-5">
                    <div className="col-sm-3">
                        <img src="./static/img/CalenderIcon.png" className="img-fluid cal-icon my-3 my-md-0"></img>
                        <p className="icon-title">Period Calender</p>
                    </div>
                    <div className="col-sm-9">
                        <p className="track">
                            Tracks your period, fertility and ovulation so you don't have to stress about remembering dates.
                        </p>
                    </div>
                </div>
                <div className="row py-lg-1">
                    <div className="col-sm-3">
                        <img src="./static/img/subscriptionIcon.png" className="img-fluid pt-md-2 sub-icon my-3 my-md-0"></img>
                        <p className="icon-title">One time subscription</p>
                    </div>
                    <div className="col-sm-9">
                        <p className="track px-lg-0 px-1">
                            Never, ever again will you have last minute troubles. Set up your one time Kosset subscription and the
                            Closet will deliver your Custom Kosset box to you as per your period cycle and chosen frequency. You
                            can skip or pause your subscription whenever you want.
                        </p>
                    </div>
                    <p className="dont px-4 px-xl-5 mt-lg-5 py-4 py-md-0">Don't wish to subscribe yet? The Closet lets you buy your Custom Kosset box on the go in under a minute.</p>
                </div>
            </div>
        </div>
    )
}

export default AppSection;