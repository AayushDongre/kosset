import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from "../components/LandingPage";
import FAQPage from "../components/FAQPage";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/"  exact={true} component={LandingPage} />         
            <Route path="/faq" component={FAQPage} />         
        </Switch>
    </BrowserRouter>
)

export default Router;