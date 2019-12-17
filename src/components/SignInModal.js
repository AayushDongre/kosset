import React from 'react';
import * as app from 'firebase'
import $ from 'jquery';
import { connect } from 'react-redux';
import { authenticate, unauthenticate } from '../actions/cart';






class SignInModal extends React.Component {

    signUp(e) {
        e.preventDefault();
        console.log(e.target.email.value)
        const email = e.target.email.value
        const password = e.target.pass.value
        const name = e.target.name.value
        const phone = e.target.phone.value
        const Cpassword = e.target.Cpass.value
        let uid = "";
        const url = "https://us-central1-kosset-69420.cloudfunctions.net/createUser"

        if (Cpassword == password) {
            app.auth().createUserWithEmailAndPassword(email, password)
                .then((userObject) => {
                    uid = userObject.user.uid;
                    $('#signInModal').modal('toggle')
                    fetch(url + $.param({
                        uid,
                        name,
                        email,
                        phone
                    })).catch((err)=>{
                        console.log(err)
                    })
                })
                .catch((err) => {
                    console.log(err)
                })
        }
      

    }
    submit(e) {
        e.preventDefault()
        console.log("wooot")
    }

    signout(e) {
        e.preventDefault()
        app.auth().signOut()
    }

    state = {
        login: true
    }

    render() {
        $("#signInModal").on("hidden.bs.modal", (e) => { this.setState(() => ({ login: true })) })


        return (
            <div>
                <button onClick={this.signout}>sign out</button>

                <div className="modal fade" id="signInModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Login</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">


                                {this.state.login &&
                                    <form onSubmit={this.submit}>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Email address</label>
                                            <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1">Password</label>
                                            <input name="pass" type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                                        </div>
                                        <button className="btn btn-primary">Submit</button>

                                        {
                                            !this.props.authenticated &&
                                            <div>
                                                <p>or</p>
                                                <button onClick={() => { this.setState(() => ({ login: false })) }}> Sign Up</button>
                                            </div>
                                        }
                                    </form>
                                }
                                {
                                    !this.state.login &&
                                    <form onSubmit={this.signUp}>
                                        <div className="form-group">
                                            <label htmlFor="name">Name</label>
                                            <input name="name" type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter email"></input>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Email address</label>
                                            <input name="email" type="email" className="form-control" id="exampleInputsdfmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="phone">Phone Number</label>
                                            <input name="phone" type="number" className="form-control" id="exampladseInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1">Password</label>
                                            <input name="pass" type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1">Confirm Password</label>
                                            <input name="Cpass" type="password" className="form-control" id="exampleInputPasswofrd1" placeholder="Password"></input>
                                        </div>
                                        <button className="btn btn-primary">Submit</button>
                                    </form>
                                }

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
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
        authenticated: state.authenticated
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        authenticate: () => { dispatch(authenticate()) },
        unauthenticate: () => { dispatch(unauthenticate()) },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInModal)