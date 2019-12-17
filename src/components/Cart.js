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
            <div>
                <Nav id="purpleNav" />
                <div className="container">
                    <h1>Cart</h1>
                    <hr></hr>
                    {(this.props.products.length == 0) &&
                        <div>
                            <p>Your cart is empty!</p>
                        </div>
                    }
                    {
                        this.props.products.map((item) => {
                            if (item.id.slice(-2) == "KB") {
                                return <KossetBoxCart HFOP={item.HFOP} LMFP={item.LMFP} PLSD={item.PLSD} key={item.id} />
                            }
                            else if (item.id.slice(-2) == "TB") {
                                return <TrialBoxCart key={item.id} />
                            }
                        })
                    }
                    {
                        this.props.total > 0 && <CartCheckoutSection />
                    }

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