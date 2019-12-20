import React from 'react';
import firebase from 'firebase/app'
import $ from 'jquery';
import { connect } from 'react-redux';
import { authenticate, unauthenticate, resetState } from '../actions/cart';



class SignInModal extends React.Component {

    state = {
        error: "",
        login: true
    }

    signUp = (e) => {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.pass.value
        const name = e.target.name.value
        const phone = e.target.phone.value
        const Cpassword = e.target.Cpass.value
        const address = e.target.address.value

        let uid = "";
        const url = "https://us-central1-kosset-69420.cloudfunctions.net/api/createUser?"
        if (!!email && !!password && !!name && !!phone && !!address) {

            if (Cpassword == password) {

                if (password.length <= 6) {
                    this.setState(() => ({ error: "Please enter a longer password" }))
                    return;
                }
                this.setState(() => ({ error: "" }))

                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then((userObject) => {
                        uid = userObject.user.uid;
                        $('#signInModal').modal('toggle')

                        fetch(url + $.param({
                            uid,
                            name,
                            email,
                            phone,
                            address: JSON.stringify([address])
                        }), { method: "post" })
                            .then((value) => {
                                $("#"+this.props.id).modal('toggle')

                            })
                            .catch((err) => {
                                console.log(err)
                            })
                    })
                    .catch((err) => {
                        if (err.code == "auth/email-already-in-use") {
                            this.setState(() => ({ error: "Email adress already in use" }))
                        }
                    })
            } else {
                this.setState(() => ({ error: "Passwords dont match. Please try again" }))
                e.target.pass.value = ""
                e.target.Cpass.value = ""
            }

        } else {
            this.setState(() => ({ error: "Please make sure all fields are filled." }))
        }

    }

    submit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.pass.value

        if (!!email && !!password) {
            this.setState(() => ({ error: "" }))
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then((value) => {
                    $("#"+this.props.id).modal('toggle')
                })
                .catch((err) => {
                    switch (err.code) {
                        case "auth/wrong-password":
                            this.setState(() => ({ error: "Wrong password!" }))
                            break
                        case "auth/user-not-found":
                            this.setState(() => ({ error: "Invalid email" }))
                            break
                        default:
                            console.log(err)
                    }
                })
        }
        else {
            this.setState(() => ({ error: "Please enter email and password" }))
        }

    }

    render() {
        $("#"+this.props.id).on("hidden.bs.modal", (e) => { this.setState(() => ({ login: true })) })
        return (
            <div>
                <div className="modal fade" id={this.props.id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title ml-auto" id="exampleModalLabel">Sign In to continue</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body px-xl-5 pb-lg-5">

                                {this.state.login &&
                                    <form onSubmit={this.submit}>
                                        <div className="form-group">
                                            <label htmlFor="inputEmail1">Email/Phone</label>
                                            <input name="email" type="email" className="form-control" id="inputEmail1" aria-describedby="emailHelp" placeholder="Enter email address"></input>
                                        </div>
                                        <div className="form-group mb-xl-4">
                                            <label htmlFor="inputPassword1">Password</label>
                                            <input name="pass" type="password" className="form-control" id="inputPassword1" placeholder="Password"></input>
                                            <p className="error-text pt-2">{this.state.error}</p>
                                        </div>
                                        <button className="btn btn-primary">Submit</button>

                                        {
                                            !this.props.authenticated &&
                                            <div className="d-inline-block">
                                                <span className="mx-3">or</span>
                                                <button className="btn signup-btn" onClick={() => { this.setState(() => ({ login: false })) }}> Sign Up</button>
                                            </div>
                                        }
                                    </form>
                                }
                                {
                                    !this.state.login &&
                                    <form onSubmit={this.signUp}>
                                        <div className="form-group">
                                            <label htmlFor="name">*Name</label>
                                            <input name="name" type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter Name"></input>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="signUpemail">*Email address</label>
                                            <input name="email" type="email" className="form-control" id="signUpemail" aria-describedby="emailHelp" placeholder="Enter email"></input>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="signUpPhone">*Phone Number</label>
                                            <input name="phone" type="number" className="form-control" id="signUpPhone" aria-describedby="emailHelp" placeholder="Enter Phone"></input>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="address">*Address</label>
                                            <input name="address" type="text" className="form-control" id="address" aria-describedby="emailHelp" placeholder="Enter delivery addresss"></input>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="signUpPassword">*Password</label>
                                            <input name="pass" type="password" className="form-control" id="signUpPassword" placeholder="Password"></input>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="confirmPass">*Confirm Password</label>
                                            <input name="Cpass" type="password" className="form-control" id="confirmPass" placeholder="Password"></input>
                                            <p className="error-text pt-2">{this.state.error}</p>

                                        </div>
                                        <button className="btn btn-primary">Submit</button>
                                    </form>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authenticated: state.authenticated,
        currentUid:state.currentUid
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        authenticate: () => { dispatch(authenticate()) },
        unauthenticate: () => { dispatch(unauthenticate()) },
        resetState: () => { dispatch(resetState()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInModal)