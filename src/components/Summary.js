import React from 'react';
import { connect } from 'react-redux';
import Footer from './Footer';
import { Nav } from './Hero';
import KossetBoxSummary from './KossetBoxSummary';
import TrialBoxSummary from './TrialBoxSummary';
import SummaryCheckout from './SummaryCheckout';

class Summary extends React.Component {

    render() {
        if (this.props.authenticated)
            return (
                <div className="summary">
                    <Nav id="purpleNav" />
                    <div className="row my-xl-4 my-lg-3 my-4 pt-xl-5 pt-lg-3 pt-4 px-4 px-md-2">
                        <div className="container">
                            <div className="row mb-xl-4 mb-md-2 pt-3 headingRow">
                                <div className="col-12">
                                    <h1>ORDER SUMMARY</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    {
                                        this.props.products.map((item) => {
                                            if (item.id.slice(-2) == "KB") {
                                                return <KossetBoxSummary ID={item.id} HFOP={item.HFOP} LMFP={item.LMFP} PLSD={item.PLSD} key={item.id} quantity={item.quantity}/>
                                            }
                                            else if (item.id.slice(-2) == "TB") {
                                                return <TrialBoxSummary ID={item.id} key={item.id} quantity={item.quantity}/>
                                            }
                                        })
                                    }
                                </div>
                                <div className="col-md-6 summaryCol">
                                    <div className="summaryBox p-4">
                                        <div className="row summaryBoxRow">
                                            <span className="summaryBoxText">SUBTOTAL</span><span className="summaryBoxNum"><span>&#8377;</span>{this.props.total}</span>
                                        </div>
                                        <div className="row summaryBoxRow">
                                            <span className="summaryBoxText">SHIPPING CHARGES</span><span className="summaryBoxNum"><span>&#8377;</span>{this.props.shipping}</span>
                                        </div>
                                        <div className="row summaryBoxRow discount">
                                            <span className="summaryBoxText">DISCOUNT</span><span className="summaryBoxNum">-<span>&#8377;</span>{this.props.discount*0.01*this.props.total}</span>
                                        </div>
                                        <div className="row summaryBoxRow">
                                            <span className="final summaryBoxText">TOTAL</span><span className="final summaryBoxNum"><span>&#8377;</span>{this.props.total + this.props.shipping - this.props.discount*0.01*this.props.total}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <SummaryCheckout />
                    <Footer />
                </div>
            )
        else
            return <div>
                404 not found
        </div>
    }

}

const mapStateToProps = (state) => {
    return {
        products: state.cart,
        authenticated: state.authenticated,
        total: state.total,
        discount: state.discount,
        shipping: state.shipping
    }
}
export default connect(mapStateToProps)(Summary)