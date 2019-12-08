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
            <div className="col-md-4 kossetCare"></div>
        </div>
    )
}

export default Footer;