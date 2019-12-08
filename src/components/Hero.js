import React from "react";


const Nav = () => {

    return (
        <div className="container px-0" id="navbar">
            <nav className="navbar navbar-expand-lg px-0">
                <a className="navbar-brand" href="#">Kosset</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                        <a className="nav-item nav-link" href="#">About <span className="sr-only">(current)</span></a>
                        <a className="nav-item nav-link" href="#">Products</a>
                        <a className="nav-item nav-link" href="#">App</a>
                        <a className="nav-item nav-link" href="#"> <img src="/static/img/accounticon.svg" ></img></a>
                        <a className="nav-item nav-link" href="#"> <img src="/static/img/carticon.svg" ></img></a>
                        <a className="nav-item nav-link nav-btn px-lg-4 ml-xl-2" href="#">Buy Now</a>
                    </div>
                </div>
            </nav>
        </div>)
}

const Hero = () => {
    return (
        <div className="hero">
            <Nav />
            {/* <div className="wrapper  "> */}
            {/* <div className=""> */}
            <div className="container wrapper d-flex flex-column justify-content-center  px-0">
                <p className="heroLeadLine mb-0">Kosset is on a simple mission of making every Woman’s Period a Pain-free,<br />Convenient,<br />
                    Seamless and most importantly,
            </p>
                <h2 className="heroNatural">A Natural Experience</h2>
                <p className="heroPara">so that she, or the environment <br />don’t
                        have to compromise. We are doing so by offering a range of alternative products and services under one platform to take care of all menstruation, sexual health and sanitation related needs.</p>

            </div>
        </div>
        // </div>

        // </div>
    )
}

export default Hero;