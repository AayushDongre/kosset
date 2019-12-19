import React from "react";
import { Link } from 'react-router-dom';

export const Nav = (props) => {

    return (
        <div className={(!(props.id) && 'container') + ` fixed-top`} id={props.id}>
            <nav className={((props.id) && 'py-0') + ` navbar navbar-expand-lg pb-0`}>
                <Link className="navbar-brand mt-1 mt-xl-0" to="/">Kosset</Link>
                <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="icon-bar top-bar"></span>
                    <span className="icon-bar middle-bar"></span>
                    <span className="icon-bar bottom-bar"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                        <Link className="nav-item nav-link" to="/">About <span className="sr-only">(current)</span></Link>
                        <Link className="nav-item nav-link" to="/products">Products</Link>
                        <Link className="nav-item nav-link" to="/">App</Link>
                        <Link className="nav-item nav-link d-md-none" to="#">Account</Link>
                        <Link className="nav-item nav-link d-md-none" to="/cart">Cart</Link>
                        <a className="nav-item nav-link d-none d-md-inline-block" href="#"> <img src="/static/img/accounticon.svg" ></img></a>
                        <Link className="nav-item nav-link d-none d-md-inline-block" to="/cart"> <img src="/static/img/carticon.svg" ></img></Link>
                        <Link className="nav-item nav-link nav-btn px-xl-4 px-1  ml-xl-2 mx-5 mx-sm-0 mb-3 mb-lg-0" to="/products">Buy Now</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

const Hero = () => {
    return (
        <div className="hero pt-5">
            <Nav />
            <div className="container wrapper d-flex flex-column justify-content-center px-4 pt-5">
                <p className="heroLeadLine mb-0">Kosset is on a simple mission of making every Woman’s Period a Pain-free,<br />Convenient,<br />
                    Seamless and most importantly,
            </p>
                <h2 className="heroNatural animated slideInDown">A Natural Experience</h2>
                <p className="heroPara animated slideInDown">so that she, or the environment <br />don’t
                        have to compromise. We are doing so by offering a range of alternative products and services under one platform to take care of all menstruation, sexual health and sanitation related needs.</p>

            </div>
        </div>

    )
}


export default Hero;