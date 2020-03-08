import React from 'react';
import { connect } from 'react-redux';
import { Nav } from "./Hero";
import { addTrialBox, addKossetBox } from '../actions/cart';
import Footer from './Footer';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';

export const ToastRedirect = (props) => (
    <div>
        <p>{props.title}</p>
        <button className="toCartBtn px-2 py-1"><Link to={props.link}> {props.btn}</Link> </button>
    </div>
)


class EcommercePage extends React.Component {

    state = {
        num1: 6,
        num2: 7,
        num3: 2
    };


    KossetBoxCart = () => {
        let customised = false
        if (this.state.num1 + this.state.num2 + this.state.num3 == 15) {
            if (this.state.num1 != 6 || this.state.num2 != 7 || this.state.num3 != 2)
                customised = true
            else
                customised = false
            this.props.addKossetBox(this.state.num1, this.state.num2, this.state.num3, 1, customised)
            toast.warn(<ToastRedirect title="Added to cart" link="/cart" btn="Go to cart"/>, {
                position: "bottom-right",
                autoClose: 200000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                className: "toastCustom",
                toastId: 'KboxCart'
            });
        } else {
            if (!toast.isActive('15Warning')) {
                toast.warn('Total Should be 15', {
                    position: "bottom-right",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    className: "toastCustom",
                    toastId: '15Warning'
                });
            }

        }
    }
    TrialBoxCart = () => {
        this.props.addTrialBox()
        toast.warn(<ToastRedirect title="Added to cart" link="/cart" btn="Go to cart"/>, {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            className: "toastCustom",
            toastId: 'TboxCart'
        });
    }
    KossetBoxCartBuy = () => {
        var customised
        if (this.state.num1 + this.state.num2 + this.state.num3 == 15) {
            if (this.state.num1 != 6 || this.state.num2 != 7 || this.state.num3 != 2)
                customised = true
            else
                customised = false
            this.props.addKossetBox(this.state.num1, this.state.num2, this.state.num3, 1, customised)
            this.props.history.push("/cart")
        } else {
            if (!toast.isActive(this.toastId)) {
                toast.warn('Total Should be 15', {
                    position: "bottom-right",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    className: "toastCustom",
                    toastId: '15Warning'
                });
            }


        }
    }
    TrialBoxCartBuy = () => {
        this.props.addTrialBox()
        this.props.history.push("/cart")
    }
    render() {
        return (
            <div className="ecommercePage container-fluid">
                <Nav id="purpleNav" />

                <ToastContainer
                    position="bottom-right"
                    autoClose={2000}
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnVisibilityChange
                    draggable
                    pauseOnHover
                />
                <div className="row m-2 px-xl-5 px-lg-4 pt-5">
                    <div className="col-md-6 p-xl-5 p-lg-4 p-1">
                        <img src="./static/img/kossetBox-main.png" className="img-fluid"></img>
                    </div>
                    <div className="col-md-6 p-xl-5 p-lg-3">
                        <h1>KOSSET BOX</h1>
                        <p className="sub-heading">15 Sanitary Pads with Individual Disposal Packets</p>
                        <p className="free m-0">FREE HERBAL CRAMPS RELIEF ROLL ON</p>
                        <p className="choose">You can choose to buy the Standard Box OR Choose between the 3 sizes to create your Custom Box of 15 pads </p>
                        <h2 className="contents">{(this.state.num1==6 && this.state.num2 == 7 && this.state.num3 == 2)?"Contents of Standard Kosset":"Custom"} Box</h2>

                        <div className="content-rows">
                            <div className="row content-row">
                                <div className="col-md-8 content-row-text">
                                    <p>Heavy Flow and Overnight Pads(L)</p>
                                </div>
                                <div className="col-md-4">
                                    <div className="input-group">
                                        <span className="input-group-btn">
                                            <button type="button" className="btn btn-default btn-number button1" onClick={() => { this.setState(() => ({ num1: (this.state.num1 > 0) ? this.state.num1 - 1 : this.state.num1 })) }}>
                                                <span>-</span>
                                            </button>
                                        </span>
                                        <button type="button" className="btn btn-default btn-number button1-mid" disabled="disabled">
                                            <span>{this.state.num1}</span>
                                        </button>
                                        <span className="input-group-btn">
                                            <button type="button" className="btn btn-default btn-number button1" onClick={() => { this.setState(() => ({ num1: (this.state.num1 + this.state.num2 + this.state.num3 < 15) ? this.state.num1 + 1 : this.state.num1 })) }}>
                                                <span >+</span>
                                            </button>
                                        </span>
                                    </div>
                                </div>
                            </div>


                            <div className="row content-row">
                                <div className="col-md-8 content-row-text">
                                    <p>Light and Medium Flow Pads(M)</p>
                                </div>
                                <div className="col-md-4">
                                    <div className="input-group">
                                        <span className="input-group-btn">
                                            <button type="button" className="btn btn-default btn-number button2" onClick={() => { this.setState(() => ({ num2: (this.state.num2 > 0) ? this.state.num2 - 1 : this.state.num2 })) }}>
                                                <span>-</span>
                                            </button>
                                        </span>
                                        <button type="button" className="btn btn-default btn-number button2-mid" disabled="disabled">
                                            <span>{this.state.num2}</span>
                                        </button>
                                        <span className="input-group-btn">
                                            <button type="button" className="btn btn-default btn-number button2" onClick={() => { this.setState(() => ({ num2: (this.state.num1 + this.state.num2 + this.state.num3 < 15) ? this.state.num2 + 1 : this.state.num2 })) }}>
                                                <span >+</span>
                                            </button>
                                        </span>
                                    </div>
                                </div>
                            </div>


                            <div className="row content-row">
                                <div className="col-md-8 content-row-text">
                                    <p>Panty Liners for  spotting and discharge</p>
                                </div>
                                <div className="col-md-4">
                                    <div className="input-group">
                                        <span className="input-group-btn">
                                            <button type="button" className="btn btn-default btn-number button3" onClick={() => { this.setState(() => ({ num3: (this.state.num3 > 0) ? this.state.num3 - 1 : this.state.num3 })) }}>
                                                <span >-</span>
                                            </button>
                                        </span>
                                        <button type="button" className="btn btn-default btn-number button3-mid" disabled="disabled">
                                            <span>{this.state.num3}</span>
                                        </button>
                                        <span className="input-group-btn">
                                            <button type="button" className="btn btn-default btn-number button3" onClick={() => { this.setState(() => ({ num3: (this.state.num1 + this.state.num2 + this.state.num3 < 15) ? this.state.num3 + 1 : this.state.num3 })) }}>
                                                <span>+</span>
                                            </button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row buttons-row">
                            <div className="col-md-8 mt-xl-4 mt-lg-3 order-2 order-lg-2">
                                <button onClick={this.KossetBoxCartBuy} className="buyButton btn mt-lg-4 mt-2 mr-4 px-xl-4"> Buy Now</button>
                                <button onClick={this.KossetBoxCart} className="addToCartButton btn mt-lg-4 mt-2 px-xl-3"> ADD TO CART</button>
                            </div>
                            <div className="col-md-4 mt-xl-4 order-1 order-lg-1">
                                <span className="mt-xl-4 total-15">Total:{this.state.num1 + this.state.num2 + this.state.num3}/15</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mx-2 mb-5 mt-5 mt-lg-0 p-xl-5 p-lg-3">
                    <div className="col-md-6 px-xl-5 px-lg-3">
                        <LazyLoad height="100%" once={true}>
                            <img src="./static/img/kossetBox-trial.png" className="img-fluid"></img>
                        </LazyLoad>
                    </div>
                    <div className="col-md-6 px-xl-5 px-lg-3">
                        <h1>KOSSET TRIAL BOX</h1>
                        <p className="sub-heading">3 Sanitary Pads with Individual Disposal Packets</p>
                        <div className="content-rows">
                            <div className="content-row-text py-3 py-lg-0"><p>1 Heavy Flow and Overnight Pad(L)</p></div>
                            <div className="content-row-text pb-3 pb-lg-0"><p>1 Light and Medium Flow Pad(M)</p></div>
                            <div className="content-row-text"><p>1 Panty Liner for light spotting and discharge</p></div>
                        </div>

                        <div className="row mt-lg-4">
                            <div className="col-md-8 mt-4">
                                <button onClick={this.TrialBoxCartBuy} className="btn buyButton mr-4 px-xl-4"> Buy Now</button>
                                <button onClick={this.TrialBoxCart} className="btn addToCartButton"> ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        products: state,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addTrialBox: () => { dispatch(addTrialBox()) },
        addKossetBox: (HFOP, LMFP, PLSD, quantity, customised) => { dispatch(addKossetBox(HFOP, LMFP, PLSD, quantity, customised)) }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(EcommercePage);