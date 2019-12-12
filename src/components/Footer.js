import React from 'react';

const Footer = () => {
    return (
        <div className="footer row">
            <div className="col-md-4 getInTouch p-4 p-md-0">
                <h3>Get in touch</h3>
                <p>xyz@kossetmail.xyz</p>
                <p>+91 9869420123</p>
            </div>
            <div className="col-md-4 footerKosset py-lg-5 p-4 p-md-0">
                <h3 className="mt-lg-5">KOSSET<span>™️</span></h3>
                <ul>
                    <li><a>Kosset Closet</a></li>
                    <li><a>Account</a></li>
                    <li><a>Terms </a></li>
                    <li><a>Kosset Closet</a></li>
                </ul>
            </div>
            <div className="col-md-4 kossetCare p-3">
                <h1><a>@kossetcare</a></h1>
                <div className="container">
                    <div className="d-flex flex-row justify-content-center align-items-center">
                        <a href="#">
                            <img src="./static/img/facebook.png" className="img-fluid mx-3"></img>
                        </a>
                        <a href="#">
                            <img src="./static/img/instagram.png" className="img-fluid mx-3"></img>
                        </a>
                        <a href="#">
                            <img src="./static/img/twitter.png" className="img-fluid mx-3"></img>
                        </a>
                    </div>
                </div>
            </div>
            <div className="end-footer container-fluid d-inline py-2">
                <span> © KOSSET 2019</span>
                <span className="sudodevs px-4 ">made by sudodevs</span>
            </div>
        </div>

    )
}



export default Footer;