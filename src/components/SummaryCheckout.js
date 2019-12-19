import React from 'react';
import { connect } from 'react-redux'
import $ from 'jquery';

class SummaryCheckout extends React.Component {

    state = {
        user: {},
        addAddress: false,
        selectedAddress:""
    }
    componentDidMount() {
        this.updateUser()
    }

    addAddress = () => {
        this.setState(() => ({ addAddress: true }))
    }
    addressSubmit = () => {
        const address = document.getElementById("addressId").value
        const uid = this.props.uid;
        const url = "https://us-central1-kosset-69420.cloudfunctions.net/api/addAddress?"
        const params = {
            uid,
            address
        }

        fetch(url + $.param(params), { method: "post" })
            .then((res) => {
                this.setState(() => ({ addAddress: false }))
                this.updateUser()
            })
            .catch((err) => {
                console.log(err)
            })
    }

    updateUser() {
        const uid = this.props.uid;
        const url = "https://us-central1-kosset-69420.cloudfunctions.net/api/fetchUser?"
        const params = {
            uid
        }

        fetch(url + $.param(params), { method: "get" })
            .then((res) => {
                res.json().then((json) => {
                    this.setState(() => ({ user: json }))
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        return (
            <div className="summaryCheckout container">
                <h2>DELIVERY INFORMATION</h2>
                <div className="row">
                    <div className="col-md-8">
                        {
                            this.state.user.address &&
                            this.state.user.address.map((address) => {
                                return (
                                    <div className="row m-4 addressRow px-3 content-row" key={address} >
                                        <div className="addressText content-row-text" onClick={(e) => {
                                            var add = e.target.innerHTML
                                            this.setState(() => ({ selectedAddress: add }))
                                            $(".borderedab").toggleClass("borderedab")
                                            $(e.target).parent().addClass("borderedab")
                                        }}>{address}</div>
                                    </div>
                                )
                            })
                        }
                        <div className="addAddress row m-4" onClick={this.addAddress}>Add Deliver Address</div>

                        {
                            this.state.addAddress &&
                            <div className="input-group">
                                <textarea className="form-control" aria-label="With textarea" id="addressId"></textarea>
                                <div className="input-group-append">
                                    <div onClick={this.addressSubmit} className="btn checkoutButton mt-xl-4 px-xl-4">
                                        Continue
                                </div>
                                </div>
                            </div>

                        }

                    </div>
                    <div className="col-md-4 payCol">
                        <button type="button" className="btn checkoutButton mt-xl-4 px-xl-4">
                            PROCEED TO PAY
                         </button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authenticated: state.authenticated,
        total: state.total,
        discount: state.discount,
        uid: state.currentUid
    }
}
export default connect(mapStateToProps)(SummaryCheckout)