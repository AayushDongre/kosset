import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from "../components/LandingPage";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={LandingPage} />         
        </Switch>
    </BrowserRouter>
)

export default Router;