import React from 'react';
import { connect } from 'react-redux';
import { Nav } from './Hero';
import { authenticate, unauthenticate } from '../actions/cart';
import KossetBoxCart from './KossetBoxCart';
import TrialBoxCart from './TrialBoxCart'
import Footer from './Footer'


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
                                return <KossetBoxCart />
                            }
                            else if (item.id.slice(-2) == "TB") {
                                return <TrialBoxCart />
                            }
                        })
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
        authenticated: state.authenticated
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        authenticate: () => { dispatch(authenticate()) },
        unauthenticate: () => { dispatch(unauthenticate()) },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)