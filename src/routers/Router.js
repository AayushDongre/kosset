import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from "../components/LandingPage";
import FAQPage from "../components/FAQPage";
import EcommercePage from "../components/EcommercePage";
import SignInModal from '../components/SignInModal';
import Cart from '../components/Cart';
import Summary from '../components/Summary';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/"  exact={true} component={LandingPage} />         
            <Route path="/faq" component={FAQPage} />   
            <Route path="/products" component={EcommercePage} />  
            <Route path="/cart" component={Cart} />  
            <Route path="/test" component={SignInModal} />  
            <Route path="/summary" component={Summary} />
        </Switch>
    </BrowserRouter>
)

export default Router;