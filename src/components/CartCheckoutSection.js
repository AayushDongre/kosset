import React from 'react';
import $ from 'jquery';
import { connect } from 'react-redux';
import SignInModal from './SignInModal';
import { applyDiscount } from '../actions/cart'
import firebase from 'firebase/app';
import 'firebase/firestore';


class CartCheckoutSection extends React.Component {

    checkOutClick = (e) => {
        e.preventDefault();
        if (!this.props.authenticated) {
            $("#signInModal").modal("toggle")
        }
        else {
            this.props.history.push("/summary")
        }
    }
    applyCoupon = (e) => {
        const coupon = document.getElementById("couponInput").value
        const db = firebase.firestore();
        db.collection('coupons').get()
            .then((snapshot) => {
                snapshot.forEach((doc) => {
                    const payload = doc.data();
                    if (payload.name === coupon) {
                        this.props.dispatch(applyDiscount(payload.discount))
                    }
                })
            })
    }

    render() {
        return (
            <div className="row mt-xl-3 mt-4 mt-md-2">
                <div className="col-md-4 orderSummary">
                    ORDER SUMMARY
                </div>
                <div className="col-md-5 px-xl-5 checkout-rows align-self-center">
                    <div className="row checkout-row">
                        <div className="col-9">
                            SUBTOTAL
                        </div>
                        <div className="col-3">
                            <span>&#8377;</span>
                            {this.props.actualTotal}
                        </div>
                    </div>
                    <div className="row checkout-row">
                        <div className="col-9">
                            SHIPPING CHARGES
                        </div>
                        <div className="col-3">
                            <span>&#8377;</span>
                            {this.props.shipping}
                        </div>
                    </div>
                    <div className="row checkout-row">
                        <div className="col-9">
                            DISCOUNT
                        </div>
                        <div className="col-3">
                            -
                             <span>&#8377;</span>
                            {this.props.discountPercent * 0.01 * this.props.total + this.props.discountValue + (this.props.actualTotal - this.props.total)}
                        </div>
                    </div>
                    <div className="row checkout-row checkout-total">
                        <div className="col-9">
                            TOTAL<br></br>
                            <span>(inclusive of all taxes)</span>
                        </div>
                        <div className="col-3">
                            <span>&#8377;</span>
                            {this.props.total + this.props.shipping - this.props.discountPercent * 0.01 * this.props.total - this.props.discountValue} 
                        </div>
                    </div>
                </div>
                <div className="col-md-3 align-self-center px-lg-3">
                    <p className="haveCoupon">Have a coupon code?</p>
                    <p className="couponCode"> COUPON CODE</p>
                    <input name="coupon" id="couponInput"></input><br></br>
                    <button className="btn mt-3 couponApply" onClick={this.applyCoupon}>APPLY</button>
                </div>
                <div className="col-12 mt-3 checkoutButtonRow">
                    <button type="button" className="btn checkoutButton mt-xl-4 px-xl-4" onClick={this.checkOutClick}>
                        CHECKOUT
                    </button>
                </div>
                < SignInModal history={this.props.history} id="signInModal" />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authenticated: state.authenticated,
        total: state.total,
        discountValue: state.discountValue,
        discountPercent:state.discountPercent,
        shipping: state.shipping,
        actualTotal: state.actualTotal
    }
}

export default connect(mapStateToProps)(CartCheckoutSection)