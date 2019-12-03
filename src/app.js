import React from "react";
import ReactDOM from "react-dom";
import Router from "./routers/Router";
import { Provider } from 'react-redux';
import "normalize.css/normalize.css";
import 'jquery'
import 'popper.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import "./styles/styles.scss";


const jsx = (
        <Router />
);


ReactDOM.render(jsx, document.getElementById("app"))