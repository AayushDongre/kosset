import React from "react";


const Nav = () => {

    return (
        <div className="container px-md-0 px-4 fixed-top" id="navbar">
            <nav className="navbar navbar-expand-lg px-0 pb-0 ">
                <a className="navbar-brand" href="#">Kosset</a>
                <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="icon-bar top-bar"></span>
                    <span class="icon-bar middle-bar"></span>
                    <span class="icon-bar bottom-bar"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav py-md-0 py-5 ml-auto">
                        <a className="nav-item nav-link" href="#">About <span className="sr-only">(current)</span></a>
                        <a className="nav-item nav-link" href="#">Products</a>
                        <a className="nav-item nav-link" href="#">App</a>
                        <a className="nav-item nav-link d-md-none" href="#">Account</a>
                        <a className="nav-item nav-link d-md-none" href="#">Cart</a>
                        <a className="nav-item nav-link d-none d-md-inline-block" href="#"> <img src="/static/img/accounticon.svg" ></img></a>
                        <a className="nav-item nav-link d-none d-md-inline-block" href="#"> <img src="/static/img/carticon.svg" ></img></a>
                        <a className="nav-item nav-link nav-btn px-lg-4 ml-xl-2 mx-5 mx-sm-0" href="#">Buy Now</a>
                    </div>
                </div>
            </nav>
        </div>)
}

const Hero = () => {
    return (
        <div className="hero pt-5">
            <Nav />
            <div className="container wrapper d-flex flex-column justify-content-center px-4 px-md-0 pt-5">
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