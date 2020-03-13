import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from "../components/LandingPage";
import FAQPage from "../components/FAQPage";
import EcommercePage from "../components/EcommercePage";
import SignInModal from '../components/SignInModal';
import Cart from '../components/Cart';
import Summary from '../components/Summary';
import TnC from '../components/TnC';
import PrivacyPolicy from '../components/PrivacyPolicy';
import Status from '../components/Status'
import { AnimatedSwitch } from 'react-router-transition';
import { PureComponent } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { ToastRedirect } from '../components/EcommercePage'

class ScrollIntoView extends PureComponent {
    componentWilldMount = () => window.scrollTo(0, 0);
    componentDidUpdate = prevProps => {
        if (this.props.location !== prevProps.location) window.scrollTo(0, 0);
    };
    componentDidMount = () => toast.warn(<ToastRedirect title={`Women's day offer! Get 50% off on Kosset Box. \n Use code KOSSET50`} btn="Go to Products" link="/products" />, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        className: "offerToast",
    });
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
                    <Route path="/tnc" component={TnC} />
                    <Route path="/privacyPolicy" component={PrivacyPolicy} />
                    <Route path="/status" component={Status} />
                </AnimatedSwitch>
            </ScrollIntoView>
        </Switch>
    </BrowserRouter>
)

export default Router;