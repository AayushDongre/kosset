import React from 'react';
import { updateKossetBoxQuantity, removeProduct } from '../actions/cart';
import { connect } from 'react-redux';
import $ from 'jquery';

class KossetBoxCart extends React.Component {
    state = {
        prevPrice: this.props.prevPrice ? (this.props.prevPrice.quantity == 1 ? 250 : this.props.prevPrice.quantity == 2 ? 400 : 1000) : 250
    }

    render() {
        return (
            <div className="row mt-xl-4 kossetBoxCart">
                <div className="row flex-grow-1 mx-1">
                    <div className="col-md-4">
                        <img src="./static/img/kossetBox_cartimg.png" className="img-fluid px-0 "></img>
                    </div>
                    <div className="col-md-8">
                        <h1>KOSSET BOX
                            <button type="button" onClick={() => {
                                this.props.remove(this.props.ID)
                            }} className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </h1>
                        <p className="free pb-2">FREE HERBAL PERIOD CRAMPS RELEIF ROLL ON</p>

                        <div className="content-rows">
                            <div className="row content-row-text">
                                <div className="col-sm-11 ">
                                    <p>Heavy Flow and Overnight Pads(L) </p>
                                </div>
                                <div className="col-sm-1">
                                    <span>{this.props.HFOP}</span>
                                </div>
                            </div>

                            <div className="row content-row-text">
                                <div className="col-sm-11">
                                    <p>Light and Medium Flow Pad(M)</p>
                                </div>
                                <div className="col-sm-1">
                                    <span>{this.props.LMFP}</span>
                                </div>
                            </div>


                            <div className="row content-row-text">
                                <div className="col-sm-11">
                                    <p>Panty Liners for  spotting and discharge</p>
                                </div>
                                <div className="col-sm-1">
                                    <span>{this.props.PLSD}</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="selectQuantity col-12 mt-xl-5">Select a quantity to proceed:</div>

                <div className="row m-5 quantitySelectionRow">

                    <div onClick={() => {
                        this.props.updateQuantity(1, this.state.prevPrice)
                        this.setState(() => ({ prevPrice: 250 }))
                        $(".qb1").addClass("borderedqb")
                        $(".qb2").removeClass("borderedqb")
                        $(".qb3").removeClass("borderedqb")
                    }} className={this.props.prevPrice.quantity == 1 ? "col-md-3 quantityBox qb1 borderedqb" : "col-md-3 quantityBox qb1"}>
                        <h3>1 BOX</h3>
                        <p>
                            <span>&#8377;</span>
                            250
                        </p>
                    </div>
                    <div onClick={() => {
                        this.props.updateQuantity(2, this.state.prevPrice)
                        this.setState(() => ({ prevPrice: 400 }))
                        $(".qb1").removeClass("borderedqb")
                        $(".qb2").addClass("borderedqb")
                        $(".qb3").removeClass("borderedqb")
                    }} className={this.props.prevPrice.quantity == 2 ? "col-md-3 quantityBox qb2 borderedqb" : "col-md-3 quantityBox qb2"}>
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
                        $(".qb1").removeClass("borderedqb")
                        $(".qb2").removeClass("borderedqb")
                        $(".qb3").addClass("borderedqb")
                    }} className={this.props.prevPrice.quantity == 6 ? "col-md-3 quantityBox qb3 borderedqb" : "col-md-3 quantityBox qb3"}>
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
        remove: (id) => { dispatch(removeProduct(id)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(KossetBoxCart);