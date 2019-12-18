import React from 'react';
import { connect } from 'react-redux';
import { updateTrialBoxQuantity } from '../actions/cart';
import $ from 'jquery';

class TrialBoxCart extends React.Component {

    state = {
        prevPrice: this.props.prevPrice ? (this.props.prevPrice.quantity == 1 ? 30 : 50) : 30
    }

    render() {
        return (
            <div className="row mt-xl-4 trialBoxCart">
                <div className="col-md-3 align-self-center">
                    <img src="./static/img/trialBox_cartimg.webp" className="img-fluid px-0"></img>
                </div>
                <div className="col-md-9 px-5">
                    <h1>KOSSET TRIAL BOX</h1>
                    <p className="sub-heading">3 Sanitary Pads with Individual Disposal Packets</p>

                    <div className="content-rows">
                        <div className="row content-row-text">
                            <div className="col-sm-10">
                                <p>1 Heavy Flow and Oernight Pad(L)</p>
                            </div>
                        </div>

                        <div className="row content-row-text">
                            <div className="col-sm-10">
                                <p>1 Light and Medium Flow Pad(M)</p>
                            </div>
                        </div>

                        <div className="row content-row-text">
                            <div className="col-sm-10">
                                <p>1 Panty Liners for light spotting and discharge</p>
                            </div>
                        </div>

                    </div>
                </div>
                <p className="selectQuantity col-12 mt-4">Select a quantity to proceed:</p>

                <div className="row m-4 quantitySelectionRowTrial">

                    <div onClick={() => {
                        this.props.updateQuantity(1, this.state.prevPrice)
                        this.setState(() => ({ prevPrice: 30 }))
                        $(".qb4").addClass("borderedqb")
                        $(".qb5").removeClass("borderedqb")
                    }} className="col-md-3 quantityBox qb4 borderedqb">
                        <h3>1 BOX</h3>
                        <p>
                            <span>&#8377;</span>
                            30
                        </p>
                    </div>
                    <div onClick={() => {
                        this.props.updateQuantity(2, this.state.prevPrice)
                        this.setState(() => ({ prevPrice: 50 }))
                        $(".qb4").removeClass("borderedqb")
                        $(".qb5").addClass("borderedqb")
                    }} className="col-md-3 quantityBox qb5">
                        <h3>2 BOXES</h3>
                        <p>
                            <span>&#8377;</span>
                            50
                        </p>
                        <p className="perBox">
                            <span>&#8377;</span>
                            25 per box
                        </p>
                    </div>

                </div>
                <hr></hr>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.cart,
        authenticated: state.authenticated,
        prevPrice: state.cart.find((item) => {
            return item.id.slice(-2) == "TB"
        })
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateQuantity: (quantity, prevQuantity) => { dispatch(updateTrialBoxQuantity(quantity, prevQuantity)) },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TrialBoxCart);