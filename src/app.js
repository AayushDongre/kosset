import React from "react";
import ReactDOM from "react-dom";
import Router from "./routers/Router";
import { Provider } from 'react-redux';
import cartStore from './store/configureStore';
import "normalize.css/normalize.css";
import 'popper.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "./styles/styles.scss";
import 'animate.css'
import { authenticate, unauthenticate, setUid, unSetUid } from './actions/cart';
import $ from 'jquery'
import * as app from 'firebase'
const firebaseConfig = require("./firebase.config.json")
app.initializeApp(firebaseConfig)



const store = cartStore();
const jsx = (
    <Provider store={store}>
        <Router />
    </Provider>
);



ReactDOM.render(jsx, document.getElementById("app"))


$(document).scroll((e)=>{
    if($(document).scrollTop() > $(".navbar").height() && !!$(".hero").length)
        $(".navbar").addClass("navbar-black")
    else
        $(".navbar").removeClass("navbar-black")
})


app.auth().onAuthStateChanged(function (user) {
    if (user) {
        var email = user.email;
        var emailVerified = user.emailVerified;
        var uid = user.uid;
        store.dispatch(authenticate())
        store.dispatch(setUid(uid))
        console.log("yeee")

    } else {
        store.dispatch(unauthenticate())
        store.dispatch(unSetUid())
        console.log("peepoopoo")
    }
});

const saveToLocalStorage = (state) => {
    try {
        state.discount = 0
        const stringState = JSON.stringify(state)
        localStorage.setItem('state', stringState)
    } catch(e){
        console.log(e)
    }
}
store.subscribe(() => saveToLocalStorage(store.getState()) )