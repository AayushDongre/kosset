import React from "react";


const Nav = () => {
    return (<nav class="navbar navbar-expand-lg">
        <a class="navbar-brand" href="#">Kosset</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <a class="nav-item nav-link" href="#">About <span class="sr-only">(current)</span></a>
                <a class="nav-item nav-link" href="#">Products</a>
                <a class="nav-item nav-link" href="#">App</a>
                <a class="nav-item nav-link" href="#">Buy Now</a>
            </div>
        </div>
    </nav>)
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