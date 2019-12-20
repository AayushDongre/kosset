import React from 'react';
import { connect } from 'react-redux';

const TrialBoxSummary = (props) => {
    return (
        <div className="trialBoxSummary">
            <h1>TRIAL BOX</h1>
            <div className="content-rows">
                <div className="row content-row-text">
                    <p>Heavy Flow and Overnight Pads(L)</p>
                </div>

                <div className="row content-row-text">
                    <p>Light and Medium Flow Pad(M)</p>
                </div>


                <div className="row content-row-text">
                    <p>Panty Liners for  spotting and discharge</p>
                </div>
                <p className="quantityRow mt-xl-1 mb-0"><span className="quantity">QUANTITY:</span>    {props.quantity} {props.quantity==1?"BOX":"BOXES"}</p>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        products: state.cart,
        authenticated: state.authenticated,
        total: state.total
    }
}
export default connect(mapStateToProps)(TrialBoxSummary)