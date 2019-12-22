import React from 'react';
import { connect } from 'react-redux';

const KossetBoxSummary = (props) => {
    return (
        <div className="kossetBoxSummary">
            <h1>{props.customised ? "CUSTOMISED" : "KOSSET"} BOX</h1>
            <div className="content-rows">
                <div className="row content-row-text">
                    <p>Heavy Flow and Overnight Pads(L) : </p>
                    <span>{props.HFOP}</span>
                </div>

                <div className="row content-row-text">
                    <p>Light and Medium Flow Pad(M) : </p>
                    <span>{props.LMFP}</span>
                </div>


                <div className="row content-row-text">
                    <p>Panty Liners for  spotting and discharge : </p>
                    <span>{props.PLSD}</span>
                </div>
                <p className="free">+ FREE HERBAL PERIOD CRAMPS RELEIF ROLL ON</p>
                <p className="quantityRow mt-4"><span className="quantity">QUANTITY:</span>    {props.quantity} {props.quantity == 1 ? "BOX" : "BOXES"}</p>
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
export default connect(mapStateToProps)(KossetBoxSummary)