import React from 'react'
import { connect } from 'react-redux'
import Footer from './Footer';
import $ from 'jquery'
import { Nav } from './Hero';
import quertString from 'query-string'
import { Link } from 'react-router-dom';
// {
//     TXNID: "20191224111212800110168030901121029"
// BANKTXNID: "27961335"
// ORDERID: "bFPAPY5VGMNKH0UUb6BCIa9FwZ921577173970947"
// TXNAMOUNT: "85.00"
// STATUS: "TXN_SUCCESS"
// TXNTYPE: "SALE"
// GATEWAYNAME: "WALLET"
// RESPCODE: "01"
// RESPMSG: "Txn Success"
// BANKNAME: "WALLET"
// MID: "fIPGtY85595319389729"
// PAYMENTMODE: "PPI"
// REFUNDAMT: "0.00"
// TXNDATE: "2019-12-24 13:22:52.0"
// }
class Status extends React.Component {

    state = {
        queries: quertString.parse(this.props.location.search),
        user: {},
        message: "Order placed! Redirecting to home page"
    }
    componentDidMount() {
        console.log(this.state.queries.checksumhash)
        if (!!this.props.address) {
            // this.addOrder()
            const url = "https://securegw-stage.paytm.in/order/status"
            const params = {
                MID: "fIPGtY85595319389729",
                ORDER_ID: this.state.queries.orderid,
                CHECKSUMHASH: this.state.queries.checksumhash,
            }
            fetch(url, { method: "post", body: JSON.stringify(params) })
                .then(res => res.json())
                .then((res) => {
                    if (res.RESPMSG == "TXN_SUCCESS") {
                        this.addOrder()
                    }
                    else if (res.RESPMSG == "TXN_FAILURE") {
                        this.setState(() => ({ message: "Error placing order!" }))
                    }
                })

        }
        else {
            this.props.history.goBack()
        }
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
        else {
            this.setState(() => ({ message: "Error placing order!" }))
        }
    }


    render() {
        return (
            <div>
                <Nav id="purpleNav" />
                <div className="statusPage mt-5">
                    <div className="container p-2">
                        <h1 className="content-row-text m-5">{this.state.message}</h1>
                        {
                            this.state.message === "Error placing order!" &&
                            <Link to="/cart" className="btn checkoutButton m-5">Go Back</Link>
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

