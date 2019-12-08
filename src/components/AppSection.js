import React from 'react'

const AppSection = () => {
    return (
        <div className="appSection p-md-5">
            <div className="container">
                <h1>For the Complete Kosset Experience</h1>
                <p className="tryTheApp">Try the App</p>
                <img src="/static/img/playstore.webp"></img>
                <p className="just mt-3">Just like your closet at home, it's a one-stop digital closet
             that stores all your menstruatuion, sexual health and sanitation related needs.</p>
            </div>
            <img src="/static/img/phone.webp" className="phone img-fluid mt-3"></img>
            <h2 className="companion">Companion</h2>
            <div className="container">
                <div className="row">
                    <div className="col-sm-3">
                        <img src="./static/img/CalenderIcon.png" className="img-fluid"></img>
                    </div>
                    <div className="col-sm-9">
                        <p className="track">
                            Tracks your period, fertility and ovulation so you dont have to stress about remembering dates
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <img src="./static/img/subscriptionIcon.png" className="img-fluid"></img>
                    </div>
                    <div className="col-sm-9">
                        <p className="track">
                            Never,ever again will you have last minute trobles. Set up your one time Kosset subscriptiopn and the
                            Closet will deliver your custom Cosset box to your as per your period cycle and chosen frequency. You
                            can skip or pause your subscription whenever you want.
                        </p>
                    </div>
                    <p className="dont">Dont wish to subscribe yet? The closet you buy your custom Cosset box on the go in under a minute</p>
                </div>
            </div>
        </div>
    )
}

export default AppSection;