import React from 'react';

const Footer = () => {
    return (
        <div className="footer row">
            <div className="col-md-4 getInTouch">
                <h3>Get in touch</h3>
                <p>xyz@kossetmail.xyz</p>
                <p>+91 9869420123</p>
            </div>
            <div className="col-md-4 footerKosset">
                <h3>KOSSET</h3>
                <ul>
                    <li><a>Kosset Closet</a></li>
                    <li><a>Account</a></li>
                    <li><a>Terms </a></li>
                    <li><a>Kosset Closet</a></li>
                </ul>
            </div>
            <div className="col-md-4 kossetCare">
                <h1><a>@kossetCare</a></h1>
                <div className="row">
                    <div className="col-md-2 offset-3">
                        <img src="./static/img/facebook.png" className="img-fluid"></img>
                    </div>
                    <div className="col-md-2">
                        <img src="./static/img/instagram.png" className="img-fluid"></img>
                    </div>

                    <div className="col-md-2">
                        <img src="./static/img/twitter.png" className="img-fluid"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Footer;