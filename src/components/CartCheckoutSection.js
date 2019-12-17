import React from 'react';
import $ from 'jquery';
import { connect } from 'react-redux';
import SignInModal from './SignInModal';
import { applyDiscount } from '../actions/cart'

class CartCheckoutSection extends React.Component {

    checkOutClick = (e) => {
        e.preventDefault();
        if(!this.props.authenticated){
           $("#signInModal").modal("toggle")
        }
        else{
            this.props.history.push("/summary")
        }
    }
    applyCoupon = (e)=>{
        const coupon = document.getElementById("couponInput").value
        if(coupon=="nigger"){
            this.props.dispatch(applyDiscount(this.props.total*0.3))
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    ORDER SUMARY
                </div>
                <div className="col-md-4">
                    <div className="row">
                        <div className="col-sm-9">
                            SUBTOTAL
                        </div>
                        <div className="col-sm-3">
                            {this.props.total}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-9">
                            SHIPPING CHARGES
                        </div>
                        <div className="col-sm-3">
                            50
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-9">
                            DISCOUNT
                        </div>
                        <div className="col-sm-3">
                            -{this.props.discount}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-9">
                            TOTAL
                        </div>
                        <div className="col-sm-3">
                            {this.props.total + 50 - this.props.discount}
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <p>Have a coupon code?</p>
                    <p> COUPON CODE</p>
                    <input name="coupon" id="couponInput"></input>
                    <button onClick={this.applyCoupon}>APPLY</button>
                </div>
                <button type="button" className="btn btn-primary" onClick={this.checkOutClick}>
                CHECKOUT
                </button>
                < SignInModal history={this.props.history}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authenticated:state.authenticated,
        total: state.total,
        discount:state.discount
    }
}

export default connect(mapStateToProps)(CartCheckoutSection)