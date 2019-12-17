import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Footer from './Footer';
import { Nav } from './Hero';


class Summary extends React.Component {

    componentDidMount() {
        if (!this.props.authenticated) {
            <Redirect to="/cart" />
        }
    }

    render() {
        return (
            <div>
                <Nav id="purpleNav" />
                <div className="container">
                    <h1>SUMMARY</h1>
                    <hr></hr>

                    
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
export default connect(mapStateToProps)(Summary)