import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from "../components/LandingPage";
import FAQPage from "../components/FAQPage";
import EcommercePage from "../components/EcommercePage";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/"  exact={true} component={LandingPage} />         
            <Route path="/faq" component={FAQPage} />   
            <Route path="/products" component={EcommercePage} />  
        </Switch>
    </BrowserRouter>
)

export default Router;