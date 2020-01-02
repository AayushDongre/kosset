import React from 'react';

const ComingSoonSection = () => {
    return (
        <div className="container comingSoon">
            <div className="row my-md-5 py-md-4">
                <div className="col-sm-8 offset-1">
                    <h4>Gynac in my Closet</h4>
                    <p className="py-md-3">Get all your period and sexual health related questions answered immediately by highly trained 
                        Gynecologists we have stuffed in the Closet. Book an appointment with Gynecologists near you. They are just 2 clicks away.
                    </p>
                </div>
                <div className="col-sm-2 mx-md-3">
                    <img className="img-fluid closet-icon" src="./static/img/closeticon.png"></img>
                </div>
            </div>

            <div className="row my-md-5 py-md-4">
            <div className="col-sm-8 offset-1">
                <h4>The Kosset Magazine</h4>
                <p className="py-md-3">
                A new-age, redefined, digital magazine for the woman who puts her health, passions, career and lifestyle first.
                </p>
            </div>
            <div className="col-sm-2 mx-md-3">
                <img className="img-fluid mag-icon" src="./static/img/magicon.png"></img>
            </div>
        </div>
        </div>
    )
}

export default ComingSoonSection;