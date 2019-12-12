import React from "react";
import ReactDOM from "react-dom";
import Router from "./routers/Router";
import { Provider } from 'react-redux';
import "normalize.css/normalize.css";
import 'jquery';
import 'popper.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import "./styles/styles.scss";
import 'animate.css'

const jsx = (
        <Router />
);




ReactDOM.render(jsx, document.getElementById("app"))

// Navbar color change on scroll
const nav = document.querySelector(".navbar");
const navHeight = document.querySelector('.navbar').clientHeight;
window.onscroll = function () {
    if (document.body.scrollTop >= navHeight || document.documentElement.scrollTop >= navHeight) {
        nav.classList.add("navbar-black");
} else {
        nav.classList.remove("navbar-black");
    }
};

//animate on scroll

// const 

