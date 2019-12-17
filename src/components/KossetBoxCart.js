import React from 'react';
import { updateKossetBoxQuantity } from '../actions/cart';
import { connect } from 'react-redux';

class KossetBoxCart extends React.Component {
    state = {
        prevPrice: this.props.prevPrice? (this.props.prevPrice.quantity == 1? 250 : this.props.prevPrice.quantity == 2?400:1000): 250 
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-3">
                    <img src="./static/img/kossetBox-main.webp" className="img-fluid"></img>
                </div>
                <div className="col-md-9">
                    <h3>KOSSET BOX</h3>
                    <p>FREE HERBAL PERIOD CRAMPS RELEIF ROLL ON</p>

                    <div className="row">
                        <div className="col-sm-10">
                            <p>Heavy Flow and Overnight Pads(L)</p>
                        </div>
                        <div className="col-sm-2">
                            <span>{this.props.HFOP}</span>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-10">
                            <p>Light and Medium Flow Pad(M)</p>
                        </div>
                        <div className="col-sm-2">
                            <span>{this.props.LMFP}</span>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-sm-10">
                            <p>Panty Liners for  spotting and discharge</p>
                        </div>
                        <div className="col-sm-2">
                            <span>{this.props.PLSD}</span>
                        </div>
                    </div>

                </div>
                <p>Select a quantity to proceed:</p>

                <div className="row">

                    <div onClick={() => {
                        this.props.updateQuantity(1, this.state.prevPrice)
                        this.setState(() => ({ prevPrice: 250 }))
                    }} className="col-md-3">
                        <h3>1 BOX</h3>
                        <p>250</p>
                    </div>
                    <div onClick={() => {
                        this.props.updateQuantity(2, this.state.prevPrice)
                        this.setState(() => ({ prevPrice: 400 }))
                    }} className="col-md-3">
                        <h3>2 BOXES</h3>
                        <p>400</p>
                    </div>
                    <div onClick={() => {
                        this.props.updateQuantity(6, this.state.prevPrice)
                        this.setState(() => ({ prevPrice: 1000 }))
                    }} className="col-md-3">
                        <h3>6 BOXES</h3>
                        <p>1000</p>
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
        prevPrice:state.cart.find((item) => {
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