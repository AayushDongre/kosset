import React from "react";


const Nav = () => {

    return (
        <div className="container px-xl-1">
        <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="#">Kosset</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto">
                    <a className="nav-item nav-link" href="#">About <span className="sr-only">(current)</span></a>
                    <a className="nav-item nav-link" href="#">Products</a>
                    <a className="nav-item nav-link" href="#">App</a>
                    <a className="nav-item nav-link" href="#">Buy Now</a>
                </div>
            </div>
        </nav>
        </div>)
}

const Hero = () => {
    return (
        <div className="hero">
            <Nav />
            <div className="container">
                <p className="heroLeadLine">Kosset is on a simple mission of making every Woman’s Period a Pain-free, Convenient,
                Seamless and most importantly,
            </p>
                <h2 className="heroNatural">A Natural Experience</h2>
                <p className="heroPara">so that she, or the environment don’t
                have to compromise. We are doing so by offering a range of alternative products and services under one platform to take care of all menstruation, sexual health and sanitation related needs.so that she, or the environment don’t
have to compromise. We are doing so by offering a range of alternative products and services under one platform to take care of all menstruation, sexual health and sanitation related needs.</p>

            </div>
        </div>
    )
}

export default Hero;