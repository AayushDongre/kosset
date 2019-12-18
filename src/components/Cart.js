import React from 'react';
import { connect } from 'react-redux';
import { Nav } from './Hero';
import { authenticate, unauthenticate } from '../actions/cart';
import KossetBoxCart from './KossetBoxCart';
import TrialBoxCart from './TrialBoxCart'
import Footer from './Footer'
import CartCheckoutSection from './CartCheckoutSection';


class Cart extends React.Component {

    render() {
        return (
            <div className="cart">
                <Nav id="purpleNav" />
                <div className="row my-4 pt-5">
                    <div className="container">
                        <div className="row mb-4 cartHeadingRow">
                            <div className="col-12">
                                <h1>Cart</h1>
                            </div>
                        </div>

                        {(this.props.products.length == 0) &&
                            <div style={{height:"50vh"}}>
                                <p>Your cart is empty!</p>
                            </div>
                        }
                        {
                            this.props.products.map((item) => {
                                if (item.id.slice(-2) == "KB") {
                                    return <KossetBoxCart id={item.id} HFOP={item.HFOP} LMFP={item.LMFP} PLSD={item.PLSD} key={item.id} />
                                }
                                else if (item.id.slice(-2) == "TB") {
                                    return <TrialBoxCart id={item.id} key={item.id} />
                                }
                            })
                        }
                        {
                            this.props.total > 0 && <CartCheckoutSection history={this.props.history} />
                        }

                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}





const mapStateToProps = (state) => {
    return {
        products: state.cart,
        authenticated: state.authenticated,
        total: state.total
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        authenticate: () => { dispatch(authenticate()) },
        unauthenticate: () => { dispatch(unauthenticate()) },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)