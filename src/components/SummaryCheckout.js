import React from 'react';
import { connect } from 'react-redux'
import $ from 'jquery';
import { Redirect } from 'react-router-dom';

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
    componentWillUpdate() {
        $("#paytm").submit()
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
        const url = "https://us-central1-kosset-69420.cloudfunctions.net/api/pay?"
        const params = {
            uid: this.state.user.uid,
            phone: this.state.user.phone,
            email: this.state.user.email,
            timestamp: new Date().getTime(),
            // price:this.props.total + this.props.shipping - this.props.discount*0.01*this.props.total
            price: 1
        }
        fetch(url + $.param(params), { method: "post" })
            .then((res) => {
                res.json().then((json) => {
                    console.log(json)
                    const formData = new FormData()
                    formData.append("MID", json.MID)
                    formData.append("WEBSITE", json.WEBSITE)
                    formData.append("ORDER_ID", json.ORDER_ID)
                    formData.append("CUST_ID", json.CUST_ID)
                    formData.append("MOBILE_NO", json.MOBILE_NO)
                    formData.append("EMAIL", json.EMAIL)
                    formData.append("INDUSTRY_TYPE_ID", json.INDUSTRY_TYPE_ID)
                    formData.append("CHANNEL_ID", json.CHANNEL_ID)
                    formData.append("TXN_AMOUNT", json.TXN_AMOUNT)
                    formData.append("CALLBACK_URL", json.CALLBACK_URL)
                    formData.append("CHECKSUMHASH", json.CHECKSUMHASH)
                    console.log("https://securegw-stage.paytm.in/order/process?" + $.param(json))
                    
                    var link = document.createElement('a');
                    link.href = "https://securegw-stage.paytm.in/order/process?" + $.param(json)+"PAYMENT_TYPE_ID=PPI&PAYMENT_MODE_ONLY=YES";
                    document.body.appendChild(link);
                    link.click();
                    // fetch("https://securegw-stage.paytm.in/order/process?"+$.param(json),
                    // {   
                    //     method:"post",
                    //     body:formData
                    // }).then((res)=>{
                    //     res.text().then((html)=>{

                    //     })
                    // })
                    // const paytm = <div>
                    //     <center>
                    //         <h1>Please do not refresh this page...</h1>
                    //     </center>
                    //     <form method="post" action="https://securegw-stage.paytm.in/order/process" id="paytm" name="paytm">
                    //         <table border="1">
                    //             <tbody>
                    //                 <tr>
                    //                     <td>
                    //                         <input type="hidden" name="MID" value={json.MID}></input>
                    //                         <input type="hidden" name="WEBSITE" value={json.WEBSITE}></input>
                    //                         <input type="hidden" name="ORDER_ID" value={json.ORDER_ID}></input>
                    //                         <input type="hidden" name="CUST_ID" value={json.CUST_ID}></input>
                    //                         <input type="hidden" name="MOBILE_NO" value={json.MOBILE_NO}></input>
                    //                         <input type="hidden" name="EMAIL" value={json.EMAIL}></input>
                    //                         <input type="hidden" name="INDUSTRY_TYPE_ID" value={json.INDUSTRY_TYPE_ID}></input>
                    //                         <input type="hidden" name="CHANNEL_ID" value={json.CHANNELID}></input>
                    //                         <input type="hidden" name="TXN_AMOUNT" value={json.TXN_AMOUNT}></input>
                    //                         <input type="hidden" name="CALLBACK_URL" value={json.CALLBACK_URL}></input>
                    //                         <input type="hidden" name="CHECKSUMHASH" value={json.CHECKSUMHASH}></input>
                    //                     </td>
                    //                 </tr>
                    //             </tbody>
                    //         </table>
                    //     </form>
                    // </div>
                    // this.setState(() => ({ paytm }))
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
                        <button type="button" className="btn checkoutButton mt-xl-4 px-xl-4" onClick={this.pay}>
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
        uid: state.currentUid,
        shipping: state.shipping
    }
}
export default connect(mapStateToProps)(SummaryCheckout)


