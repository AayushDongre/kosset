import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from "../components/LandingPage";
import FAQPage from "../components/FAQPage";
import EcommercePage from "../components/EcommercePage";
import SignInModal from '../components/SignInModal';
import Cart from '../components/Cart';
import Summary from '../components/Summary';
import { AnimatedSwitch } from 'react-router-transition';
import { PureComponent } from "react";
import { withRouter } from "react-router-dom";

class ScrollIntoView extends PureComponent {
    componentWilldMount = () => window.scrollTo(0, 0);
    componentDidUpdate = prevProps => {
        if (this.props.location !== prevProps.location) window.scrollTo(0, 0);
    };
    render = () => this.props.children;
}
const Router = () => (
    <BrowserRouter>
        <Switch>
            <ScrollIntoView>
                <AnimatedSwitch
                    atEnter={{ opacity: 0 }}
                    atLeave={{ opacity: 0 }}
                    atActive={{ opacity: 1 }}
                >
                    <Route path="/" exact={true} component={LandingPage} />
                    <Route path="/faq" component={FAQPage} />
                    <Route path="/products" component={EcommercePage} />
                    <Route path="/cart" component={Cart} />
                    <Route path="/test" component={SignInModal} />
                    <Route path="/summary" component={Summary} />
                </ AnimatedSwitch>
            </ScrollIntoView>
        </Switch>
    </BrowserRouter>
)

export default Router;