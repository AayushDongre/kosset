import React from 'react';
import { connect } from 'react-redux';
import { updateTrialBoxQuantity } from '../actions/cart';

class TrialBoxCart extends React.Component {

    state = {
        prevPrice: this.props.prevPrice ? (this.props.prevPrice.quantity == 1 ? 30 : 50) : 30
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-3">
                    <img src="./static/img/kossetBox-main.webp" className="img-fluid"></img>
                </div>
                <div className="col-md-9">
                    <h3>KOSSET TRIAL BOX</h3>
                    <p>3 Sanitary Pads with Individual Disposal Packets</p>

                    <div className="row">
                        <div className="col-sm-10">
                            <p>1 Heavy Flow and Oernight Pad(L)</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-10">
                            <p>1 Light and Medium Flow Pad(M)</p>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-sm-10">
                            <p>1 Panty Liners for light spotting and discharge</p>
                        </div>
                    </div>

                </div>
                <p>Select a quantity to proceed:</p>

                <div className="row">

                    <div onClick={() => {
                        this.props.updateQuantity(1, this.state.prevPrice)
                        this.setState(() => ({ prevPrice: 30 }))
                    }} className="col-md-3">
                        <h3>1 BOX</h3>
                        <p>30</p>
                    </div>
                    <div onClick={() => {
                        this.props.updateQuantity(2, this.state.prevPrice)
                        this.setState(() => ({ prevPrice: 50 }))
                    }} className="col-md-3">
                        <h3>2 BOXES</h3>
                        <p>50</p>
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