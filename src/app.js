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
import SignInModal from './components/SignInModal'
import * as app from 'firebase'
const firebaseConfig = require("./firebase.config.json")
app.initializeApp(firebaseConfig)



const store = cartStore();
const jsx = (
    <Provider store={store}>
        <Router />
        <SignInModal id="navbarSignInModal" />
    </Provider>
);



ReactDOM.render(jsx, document.getElementById("app"))

//Change Navbar color on scroll
$(document).scroll((e) => {
    if ($(document).scrollTop() > $(".navbar").height() && (!!$(".hero").length || !!$("#faq-hero").length))
        $(".navbar").addClass("navbar-black")
    else
        $(".navbar").removeClass("navbar-black")
})
const isInViewport = function (that) {
    var elementTop = that.offset().top;
    var elementBottom = elementTop + that.outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop + $(window).height() / 2 && elementTop < viewportBottom - $(window).height() / 2;
};
const isInViewportPhone = function (that) {
    var elementTop = that.offset().top;
    var elementBottom = elementTop + that.outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
};
$(window).on("resize scroll", () => {
    if ($(location).attr('pathname') === '/') {
        const hover1 = $(".hover1")
        const hover2 = $(".hover2")
        const hover3 = $(".hover3")
        const hover4 = $(".hover4")
        const hover5 = $(".hover5")

        isInViewport(hover1) ? hover1.addClass("unhovered") : hover1.removeClass("unhovered")
        isInViewport(hover2) ? hover2.addClass("unhovered") : hover2.removeClass("unhovered")
        isInViewport(hover3) ? hover3.addClass("unhovered") : hover3.removeClass("unhovered")
        isInViewport(hover4) ? hover4.addClass("unhovered") : hover4.removeClass("unhovered")
        isInViewport(hover5) ? hover5.addClass("unhovered") : hover5.removeClass("unhovered")

        if (window.matchMedia("(max-width: 767px)").matches) {
            isInViewportPhone(hover1.parent()) ? hover1.siblings(".static").addClass("animated fadeInLeft") : hover1.siblings(".static").removeClass("fadeInLeft")
            isInViewportPhone(hover2.parent()) ? hover2.siblings(".static").addClass("animated fadeInRight") : hover2.siblings(".static").removeClass("fadeInRight")
            isInViewportPhone(hover3.parent()) ? hover3.siblings(".static").addClass("animated fadeInLeft") : hover3.siblings(".static").removeClass("fadeInLeft")
            isInViewportPhone(hover4.parent()) ? hover4.siblings(".static").addClass("animated fadeInRight") : hover4.siblings(".static").removeClass("fadeInRight")
            isInViewportPhone(hover5.parent()) ? hover5.siblings(".static").addClass("animated fadeInLeft") : hover5.siblings(".static").removeClass("fadeInLeft")
        }
    }
})


app.auth().onAuthStateChanged(function (user) {
    if (user) {
        var uid = user.uid;
        store.dispatch(authenticate())
        store.dispatch(setUid(uid))
    } else {
        store.dispatch(unauthenticate())
        store.dispatch(unSetUid())
    }
});

const saveToLocalStorage = (state) => {
    try {
        const stringState = JSON.stringify(state)
        sessionStorage.setItem('state', stringState)
    } catch (e) {
        console.log(e)
    }
}
store.subscribe(() => saveToLocalStorage(store.getState()))