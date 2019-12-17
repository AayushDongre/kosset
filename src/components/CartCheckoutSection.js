import React from 'react';
import $ from 'jquery';
import { connect } from 'react-redux';
import SignInModal from './SignInModal';

class CartCheckoutSection extends React.Component {

    checkOutClick = (e) => {
        e.preventDefault();
        if(!this.props.authenticated){
           $("#signInModal").modal("toggle")
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
                            0
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-9">
                            TOTAL
                        </div>
                        <div className="col-sm-3">
                            {this.props.total + 50}
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <p>Have a coupon code?</p>
                    <p> COUPON CODE</p>
                    <input></input>
                    <button>APPLY</button>
                </div>
                <button type="button" className="btn btn-primary" onClick={this.checkOutClick}>
                CHECKOUT
                </button>
                < SignInModal />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authenticated:state.authenticated,
        total: state.total
    }
}

export default connect(mapStateToProps)(CartCheckoutSection)