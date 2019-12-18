import React from 'react';
import { connect } from 'react-redux';
import { Nav } from "./Hero";
import { addTrialBox, addKossetBox } from '../actions/cart';
import Footer from './Footer';

class EcommercePage extends React.Component {

    state = {
        num1: 6,
        num2: 7,
        num3: 2,
    };

    KossetBoxCart = () => {
        if (this.state.num1 + this.state.num2 + this.state.num3 == 15) {
            this.props.addKossetBox(this.state.num1, this.state.num2, this.state.num3)
        }
    }
    TrialBoxCart = () => {
        this.props.addTrialBox()
    }
    KossetBoxCartBuy = () => {
        if (this.state.num1 + this.state.num2 + this.state.num3 == 15) {
            this.props.addKossetBox(this.state.num1, this.state.num2, this.state.num3)
            this.props.history.push("/cart")
        }
    }
    TrialBoxCartBuy = () => {
        this.props.addTrialBox()
        this.props.history.push("/cart")
    }
    render() {
        return (
            <div className="ecommercePage">
                <Nav id="purpleNav" />

                <div className="row m-2 px-5 pt-5">
                    <div className="col-md-6 p-5">
                        <img src="./static/img/kossetBox-main.webp" className="img-fluid"></img>
                    </div>
                    <div className="col-md-6 p-5">
                        <h1>KOSSET BOX</h1>
                        <p className="sub-heading">15 Sanitary Pads with Individual Disposal Packets</p>
                        <p className="free">FREE HERBAL CRAMPS RELIEF ROLL ON</p>
                        <p className="choose">(You can choose to buy the Standard Box OR Choose between the 3 sizes to create your Custom Box of 15 pads)</p>
                        <h2 className="contents">Contents of Standard Kosset Box</h2>

                        <div className="content-rows">
                            <div className="row content-row">
                                <div className="col-md-8 content-row-text">
                                    Heavy Flow and Overnight Pads(L)
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
                                    Light and Medium Flow Pad(M)
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
                                    Panty Liners for  spotting and discharge
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
                            <div className="col-md-8 mt-4">
                                <button onClick={this.KossetBoxCartBuy} className="buyButton btn mt-4 mr-4 px-xl-4"> Buy Now</button>
                                <button onClick={this.KossetBoxCart} className="addToCartButton btn mt-4 px-xl-3"> ADD TO CART</button>
                            </div>
                            <div className="col-md-4 mt-4">
                                <span className="mt-4 total-15">Total:{this.state.num1 + this.state.num2 + this.state.num3}/15</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mx-2 mb-5 my-2 px-5 pt-5">
                    <div className="col-md-6 px-5">
                        <img src="./static/img/kossetBox-trial.webp" className="img-fluid"></img>
                    </div>
                    <div className="col-md-6 px-5">
                        <h1>KOSSET TRIAL BOX</h1>
                        <p className="sub-heading">3 Sanitary Pads with Individual Disposal Packets</p>
                        <div className="content-rows">
                            <div className="content-row-text">1 Heavy Flow and Oernight Pad(L)</div>
                            <div className="content-row-text">1 Light and Medium Flow Pad(M)</div>
                            <div className="content-row-text">1 Panty Liners for light spotting and discharge</div>
                        </div>

                        <div className="row mt-4">
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
        addKossetBox: (HFOP, LMFP, PLSD) => { dispatch(addKossetBox(HFOP, LMFP, PLSD)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EcommercePage);