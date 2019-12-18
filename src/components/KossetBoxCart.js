import React from 'react';
import { updateKossetBoxQuantity } from '../actions/cart';
import { connect } from 'react-redux';

class KossetBoxCart extends React.Component {
    state = {
        prevPrice: this.props.prevPrice ? (this.props.prevPrice.quantity == 1 ? 250 : this.props.prevPrice.quantity == 2 ? 400 : 1000) : 250
    }

    render() {
   
        return (
            <div className="row mt-5 kossetBoxCart">
                <div className="row">
                    <div className="col-md-3">
                        <img src="./static/img/kossetBox-main.webp" className="img-fluid"></img>
                    </div>
                    <div className="col-md-9 px-5">
                        <h1>KOSSET BOX</h1>
                        <p className="free">FREE HERBAL PERIOD CRAMPS RELEIF ROLL ON</p>

                        <div className="content-rows">
                            <div className="row content-row-text">
                                <div className="col-sm-11 ">
                                    Heavy Flow and Overnight Pads(L)
                                </div>
                                <div className="col-sm-1">
                                    <span>{this.props.HFOP}</span>
                                </div>
                            </div>

                            <div className="row content-row-text">
                                <div className="col-sm-11">
                                    Light and Medium Flow Pad(M)
                                 </div>
                                <div className="col-sm-1">
                                    <span>{this.props.LMFP}</span>
                                </div>
                            </div>


                            <div className="row content-row-text">
                                <div className="col-sm-11">
                                    Panty Liners for  spotting and discharge
                                </div>
                                <div className="col-sm-1">
                                    <span>{this.props.PLSD}</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="selectQuantity row">Select a quantity to proceed:</div>

                <div className="row m-5 quantitySelectionRow">

                    <div onClick={() => {
                        this.props.updateQuantity(1, this.state.prevPrice)
                        this.setState(() => ({ prevPrice: 250 }))
                    }} className="col-md-3 quantityBox">
                        <h3>1 BOX</h3>
                        <p>
                            <span>&#8377;</span>
                            250
                        </p>
                    </div>
                    <div onClick={() => {
                        this.props.updateQuantity(2, this.state.prevPrice)
                        this.setState(() => ({ prevPrice: 400 }))
                    }} className="col-md-3 quantityBox">
                        <h3>2 BOXES</h3>
                        <p>
                            <span>&#8377;</span>
                            400
                        </p>
                        <p className="perBox">
                            <span>&#8377;</span>
                            200 per box
                        </p>
                    </div>
                    <div onClick={() => {
                        this.props.updateQuantity(6, this.state.prevPrice)
                        this.setState(() => ({ prevPrice: 1000 }))
                    }} className="col-md-3 quantityBox">
                        <h3>6 BOXES</h3>
                        <p>
                            <span>&#8377;</span>
                            1000
                        </p>
                        <p className="perBox">
                            <span>&#8377;</span>
                            166 per box
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        products: state.cart,
        authenticated: state.authenticated,
        prevPrice: state.cart.find((item) => {
            return item.id.slice(-2) == "KB"
        })
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateQuantity: (quantity, prevPrice) => { dispatch(updateKossetBoxQuantity(quantity, prevPrice)) },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(KossetBoxCart);