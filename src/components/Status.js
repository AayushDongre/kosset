import React from 'react'
import { connect } from 'react-redux'
import Footer from './Footer';
import $ from 'jquery'
import { Nav } from './Hero';
import quertString from 'query-string'

class Status extends React.Component {

    state = {
        queries: quertString.parse(this.props.location.search),
        user: {}
    }
    componentDidMount() {
        this.addOrder()
    }
    addOrder() {
        const uid = this.props.uid;
        const url = "https://us-central1-kosset-69420.cloudfunctions.net/api/fetchUser?"
        const params = {
            uid
        }

        fetch(url + $.param(params), { method: "get" })
            .then((res) => {
                res.json().then((json) => {
                    this.setState(() => ({ user: json }))
                    this.placeorder()
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }
    placeorder() {
        if (this.state.queries.success == "true") {
            const url = "https://us-central1-kosset-69420.cloudfunctions.net/api/addOrder?"
            const params = {
                uid: this.state.user.uid,
                email: this.state.user.email,
                phone: this.state.user.phone,
                timestamp: new Date().getTime(),
                products: JSON.stringify(this.props.cart),
                cost: this.props.total + this.props.shipping - this.props.discount * 0.01 * this.props.total,
                address: this.props.address,
            }
            fetch(url + $.param(params), { method: "post" })
                .then((res) => {
                    this.props.history.push("/")
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }


    render() {
        return (
            <div>
                <Nav id="purpleNav" />

                <Footer />
            </div>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        authenticated: state.authenticated,
        total: state.total,
        discount: state.discount,
        uid: state.currentUid,
        shipping: state.shipping,
        cart: state.cart,
        address: state.address
    }
}
export default connect(mapStateToProps)(Status)


