import React from 'react';
import * as app from 'firebase'
const firebaseConfig = require("../firebase.config.json")
app.initializeApp(firebaseConfig)




app.auth().onAuthStateChanged(function(user) {
    if (user) {
      var email = user.email;
      var emailVerified = user.emailVerified;
      alert("siggned in")
    } else {
        console.log("peepoopoo")
    }
  });
export default class SignInModal extends React.Component {

    submit(e) {
        e.preventDefault();
        console.log(e.target.email.value)
        const mail = e.target.email.value
        const password = e.target.pass.value
        app.auth().createUserWithEmailAndPassword(mail,password).catch((err)=>{
            console.log(err)
        })
    }

    signout(e){
        e.preventDefault()
        app.auth().signOut()
    }


    render() {
        return (
            <div>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    Launch demo modal
                </button>

                <button onClick={this.signout}>sign out</button>

                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">



                                <form onSubmit={this.submit}>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                        <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Password</label>
                                        <input name="pass" type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>



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