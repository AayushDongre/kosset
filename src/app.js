import React from "react";
import ReactDOM from "react-dom";
import Router from "./routers/Router";
import { Provider } from 'react-redux';
import cartStore from './store/configureStore';
import "normalize.css/normalize.css";
import 'popper.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import "./styles/styles.scss";
import 'animate.css'
import { authenticate, unauthenticate, setUid, unSetUid } from './actions/cart';

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

// Navbar color change on scroll
const nav = document.querySelector(".navbar");
const navHeight = document.querySelector('.navbar').clientHeight;
const landing = document.getElementById("purpleNav")
window.onscroll = function () {
    if (document.body.scrollTop >= navHeight || document.documentElement.scrollTop >= navHeight) {
        if(!landing){
            nav.classList.add("navbar-black");
        }
        
    } else {
        nav.classList.remove("navbar-black");
    }
};

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