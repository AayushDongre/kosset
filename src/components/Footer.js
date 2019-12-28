import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink as Hlink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <div className="footer row">
            <div className="col-md-4 getInTouch p-4 p-md-0">
                <h3>Get in touch</h3>
                <p>support@kossetcare.com</p>
                <p>customer@kossetcare.com</p>
            </div>
            <div className="col-md-4 footerKosset py-lg-5 p-4 p-md-0">
                <h3 className="mt-lg-5">KOSSET<span>™️</span></h3>
                <ul>
                    <Hlink className="d-block my-1 mv-lg-3" to="/#AppSection">Kosset Closet</Hlink>
                    <Link className="d-block my-1 mb-lg-3" to="/faq">FAQs</Link>
                    <Link className="d-block my-1 mb-lg-3" to="/tnc">Terms & Conditions</Link>
                    <Link className="d-block my-1" to="/privacyPolicy">Privacy Policy</Link>
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
                <span ><a className="sudodevs px-4 " href="https://www.sudodevs.com">made by sudodevs</a></span>
            </div>
        </div>

    )
}



export default Footer;