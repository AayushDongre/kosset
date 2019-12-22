import React from "react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import $ from 'jquery'
import firebase from 'firebase/app'
import { resetState } from '../actions/cart'


class NavMain extends React.Component {

    signout = (e) => {
        e.preventDefault()
        firebase.auth().signOut()
        this.props.resetState()
    }
    deleteAccount = (e) => {
        e.preventDefault()
        //doesnt work when active subscriptions. (cloud API works fine) 
        fetch("https://us-central1-kosset-69420.cloudfunctions.net/api/deleteUser?uid=${this.props.currentUid",{ method: "post" })
        .then((res)=>{
            if(res.status==200){
                firebase.auth().currentUser.delete()
                this.props.resetState()
            }
            else{
                console.log(res)
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    render() {

        return (
            <div className={(!(this.props.id) && 'container') + ` fixed-top`} id={this.props.id}>

                <nav className={((this.props.id) && 'py-0') + ` navbar navbar-expand-lg pb-0`}>

                    <Link className="navbar-brand mt-1 mt-xl-0" to="/" id="navbar-heading">Kosset</Link>
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
                            <a className="nav-item nav-link d-md-none dropdown-toggle" data-toggle="dropdown">Account</a>
                            <Link className="nav-item nav-link d-md-none" to="/cart">Cart</Link>
                            <div className="dropdown ">
                                <a className="nav-item nav-link d-none d-md-inline-block dropdown-toggle" data-toggle="dropdown" href="#">
                                    <img src="/static/img/accounticon.svg" ></img>
                                </a>
                                <div className="dropdown-menu animated fadeInUp mt-xl-4" aria-labelledby="dropdownMenuButton">
                                <h6 className="dropdown-header">Account</h6>
                                    {!this.props.authenticated && <a className="dropdown-item" onClick={() => {
                                        $("#navbarSignInModal").modal("toggle")
                                        // $(".modal-backdrop").css("display", "none")
                                    }}>Sign In</a>}
                                    {this.props.authenticated && <a className="dropdown-item" onClick={this.signout}>Sign out</a>}
                                    {this.props.authenticated && <a className="dropdown-item" onClick={this.deleteAccount}>Delete Account</a>}
                                </div>
                            </div>

                            <Link className="nav-item nav-link d-none d-md-inline-block" to="/cart"> <img src={this.props.cart.length < 1 ? "/static/img/carticon.svg" : "/static/img/cartIcon-filled.svg"} ></img></Link>
                            <Link className="nav-item nav-link nav-btn px-xl-4 px-1  ml-xl-2 mx-5 mx-sm-0 mb-3 mb-lg-0 navBuy" to="/products">Buy Now</Link>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        authenticated: state.authenticated,
        cart: state.cart
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        resetState: () => { dispatch(resetState()) }
    }
}

const Nav = connect(mapStateToProps, mapDispatchToProps)(NavMain)
export { Nav }

const Hero = (props) => {
    return (
        <div className="hero pt-5">
            <Nav />
            <div className="container wrapper d-flex flex-column justify-content-center px-4 pt-5">
                <p className="heroPara mb-0">Kosset is on a simple mission of making every Woman’s Period a Pain-free,<br />Convenient,
                    Seamless and most importantly,
            </p>
                <h2 className="heroNatural mb-0 animated slideInDown">A Natural Experience</h2>
                <p className="heroPara animated slideInDown">so that she, or the environment don’t
                        have to compromise. We are doing so by offering a range of alternative products and services under one platform to take care of all menstruation, <br/> sexual health and sanitation related needs.</p>

            </div>

        </div>

    )
}



export default connect(mapStateToProps)(Hero)