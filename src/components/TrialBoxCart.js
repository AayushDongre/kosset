import React from 'react';
import { connect } from 'react-redux';
import { updateTrialBoxQuantity } from '../actions/cart';

class TrialBoxCart extends React.Component {

    state = {
        prevPrice: this.props.prevPrice ? (this.props.prevPrice.quantity == 1 ? 30 : 50) : 30
    }

    render() {
        return (
            <div className="row mt-5 trialBoxCart">
                <div className="col-md-3">
                    <img src="./static/img/kossetBox-main.webp" className="img-fluid"></img>
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
                <p className="selectQuantity row">Select a quantity to proceed:</p>

                <div className="row m-5 quantitySelectionRowTrial">

                    <div onClick={() => {
                        this.props.updateQuantity(1, this.state.prevPrice)
                        this.setState(() => ({ prevPrice: 30 }))
                    }} className="col-md-3 quantityBox">
                        <h3>1 BOX</h3>
                        <p>
                            <span>&#8377;</span>
                            30
                        </p>
                    </div>
                    <div onClick={() => {
                        this.props.updateQuantity(2, this.state.prevPrice)
                        this.setState(() => ({ prevPrice: 50 }))
                    }} className="col-md-3 quantityBox">
                        <h3>2 BOXES</h3>
                        <p>
                            <span>&#8377;</span>
                            50
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