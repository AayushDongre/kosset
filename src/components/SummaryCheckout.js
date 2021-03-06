import React from 'react';
import { connect } from 'react-redux'
import $ from 'jquery';
import { Redirect, Link } from 'react-router-dom';
import { addAddress } from '../actions/cart'
import { ToastContainer, toast } from 'react-toastify';

class SummaryCheckout extends React.Component {

    state = {
        user: {},
        addAddress: false,
        selectedAddress: "",
        paytm: null
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
        if (!!address) {
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

    pay = (e) => {
        e.preventDefault()
        this.props.dispatch(addAddress(this.state.selectedAddress))
        if (!!this.state.selectedAddress) {
            const url = "https://us-central1-kosset-69420.cloudfunctions.net/api/pay?"
            const params = {
                uid: this.state.user.uid,
                phone: this.state.user.phone,
                email: this.state.user.email,
                timestamp: new Date().getTime(),
                // price:this.props.total + this.props.shipping - this.props.discount*0.01*this.props.total
                price: this.props.total + this.props.shipping - this.props.discountPercent * 0.01 * this.props.total - this.props.discountValue
            }
            console.log(url + $.param(params))
            fetch(url + $.param(params), { method: "post" })
                .then((res) => {
                    res.json().then((json) => {
                        const form = $(`<div> <center> <h1>Please do not refresh this page...</h1> </center> <form method="post" action="https://securegw.paytm.in/order/process" id="paytm" name="paytm"> <table border="1"> <tbody> <tr> <td> <input type="hidden" name="MID" value=${json.MID}></input> <input type="hidden" name="WEBSITE" value=${json.WEBSITE}></input> <input type="hidden" name="ORDER_ID" value=${json.ORDER_ID}></input> <input type="hidden" name="CUST_ID" value=${json.CUST_ID}></input> <input type="hidden" name="MOBILE_NO" value=${json.MOBILE_NO}></input> <input type="hidden" name="EMAIL" value=${json.EMAIL}></input> <input type="hidden" name="INDUSTRY_TYPE_ID" value=${json.INDUSTRY_TYPE_ID}></input> <input type="hidden" name="CHANNEL_ID" value=${json.CHANNEL_ID}></input> <input type="hidden" name="TXN_AMOUNT" value=${json.TXN_AMOUNT}></input> <input type="hidden" name="CALLBACK_URL" value=${json.CALLBACK_URL}></input> <input type="hidden" name="CHECKSUMHASH" value=${json.CHECKSUMHASH}></input> <input type="hidden" name="PAYMENTMODE" value=PPI></input></td> </tr> </tbody> </table> </form> </div>`)
                        form.hide().appendTo('body');
                        form.submit();
                        document.getElementById("paytm").submit()
                    })
                })
                .catch((err) => {
                    console.log(err)
                })
        }else{
            toast.warn(' Please select an Address!',{
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                className: "toastCustom",
                toastId: 'KboxCart'
            });
        }
    }


    render() {
        return (
            <div className="summaryCheckout container">
            <ToastContainer
            position="bottom-right"
            autoClose={2000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnVisibilityChange
            draggable
            pauseOnHover
        />
                <h2 className="px-3 px-md-0">DELIVERY INFORMATION</h2>
                <p className="px-3 px-md-0">Select an address</p>
                <div className="row">
                    <div className="col-md-8">
                        {
                            this.state.user.address &&
                            this.state.user.address.map((address, index) => {
                                return (
                                    <div className="row mx-md-0 my-2 my-md-4 mx-3 addressRow px-2 content-row" key={address} >
                                        <div className="addressText content-row-text" onClick={(e) => {

                                            this.setState(() => ({ selectedAddress: this.state.user.address[index] }))

                                            $(".borderedab").toggleClass("borderedab")
                                            $(e.target).parent().addClass("borderedab")
                                        }}>{address}
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => {
                                                var newAddresses = this.state.user.address.filter((addressNew) => {
                                                    return address != addressNew
                                                })
                                                const url = `https://us-central1-kosset-69420.cloudfunctions.net/api/updateUser?uid=${this.props.uid}&address=${JSON.stringify(newAddresses)}`
                                                fetch(url, { method: "post" })
                                                    .then(() => {
                                                        this.updateUser()
                                                    })
                                                    .catch((err) => {
                                                        console.log(err)
                                                    })
                                            }}>
                                                <span aria-hidden="true" className="cartCross">&times;</span>
                                            </button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        <div className="addAddress row mx-xl-0 my-xl-4 my-2 mx-3" onClick={this.addAddress}>Add Delivery Address</div>

                        {
                            this.state.addAddress &&
                            <div className="input-group px-3 px-md-0">
                                <textarea className="form-control" aria-label="With textarea" id="addressId" style={{ resize: 'none' }}></textarea>
                                <div className="input-group-append">
                                    <div onClick={this.addressSubmit} className="btn checkoutButton mt-xl-4 px-xl-4">
                                        Continue
                                </div>
                                </div>
                            </div>

                        }

                    </div>
                    <div className="col-md-4">
                        <div className="col-md-12 payCol">
                            <button type="button" className="btn checkoutButton px-xl-4 mt-4" onClick={this.pay}>
                                PAY ONLINE
                             </button>
                        </div>
                        <div className="col-md-12 payCol mt-2">
        
        {/* <Link type="button" className="btn checkoutButton px-xl-4 mt-4" to='/status?mode=COD&success=true' onClick={() => this.props.dispatch(addAddress(this.state.selectedAddress))}>
                                PAY CASH ON DELIVERY
                            </Link> */}
                            <p className="text-center">Due to the Covid-19 Lockdown, Cash on delivery is currently unavailable.</p>
                        </div>
                    </div>

                </div>
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authenticated: state.authenticated,
        total: state.total,
        discountValue: state.discountValue,
        discountPercent:state.discountPercent,
        uid: state.currentUid,
        shipping: state.shipping
    }
}
export default connect(mapStateToProps)(SummaryCheckout)


