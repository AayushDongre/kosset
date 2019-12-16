import React from 'react';
import { connect } from 'react-redux';
import { Nav } from "./Hero";
import { addTrialBox, addKossetBox } from '../actions/cart';
import Footer from './Footer';

class EcommercePage extends React.Component {

    state = {
        num1:6,
        num2:7,
        num3:2, 
    };

    KossetBoxCart = () =>{
        if(this.state.num1+this.state.num2+this.state.num3 == 15)
            this.props.addKossetBox(this.state.num1,this.state.num2,this.state.num3)
    }


    render() {
        return (
            <div>
                <Nav id="purpleNav" />  

                <div className="row">
                    <div className="col-md-6">
                        <img src="./static/img/kossetBox-main.webp" className="img-fluid"></img>
                    </div>
                    <div className="col-md-6">
                        <h1>KOSSET BOX</h1>
                        <p>15 Sanitary Pads with Individual Disposal Packets</p>
                        <p>FREE HERBAL CRAMPS RELIEF ROLL ON</p>
                        <p>(You can choose to bu the Standard Box OR Choose between the 3 sizes to create your Custom Box of 15 pads</p>
                        <h2>Contents of Standard Kosset Box</h2>


                        <div className="row">
                            <div className="col-md-8">
                                Heavy Flow and Overnight Pads(L)
                            </div>
                            <div className="col-md-4">
                                <div className="input-group">
                                    <span className="input-group-btn">
                                        <button type="button" className="btn btn-default btn-number" onClick={() => { this.setState(() => ({ num1: (this.state.num1 > 0)?this.state.num1 - 1:this.state.num1 })) }}>
                                            <span className="glyphicon glyphicon-minus">-</span>
                                        </button>
                                    </span>
                                    <button type="button" className="btn btn-default btn-number" disabled="disabled">
                                        <span>{this.state.num1}</span>
                                    </button>                                   
                                     <span className="input-group-btn">
                                        <button type="button" className="btn btn-default btn-number" onClick={() => { this.setState(() => ({ num1: (this.state.num1+this.state.num2+this.state.num3 < 15)? this.state.num1 + 1:this.state.num1 })) }}>
                                            <span className="glyphicon glyphicon-plus">+</span>
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-md-8">
                            Light and Medium Flow Pad(M)
                            </div>
                            <div className="col-md-4">
                                <div className="input-group">
                                    <span className="input-group-btn">
                                        <button type="button" className="btn btn-default btn-number"  onClick={() => { this.setState(() => ({ num2: (this.state.num2 > 0)?this.state.num2 - 1:this.state.num2 })) }}>
                                            <span className="glyphicon glyphicon-minus">-</span>
                                        </button>
                                    </span>
                                    <button type="button" className="btn btn-default btn-number" disabled="disabled">
                                        <span>{this.state.num2}</span>
                                    </button>                                    <span className="input-group-btn">
                                        <button type="button" className="btn btn-default btn-number" onClick={() => { this.setState(() => ({ num2: (this.state.num1+this.state.num2+this.state.num3 < 15)? this.state.num2 + 1:this.state.num2 })) }}>
                                            <span className="glyphicon glyphicon-plus">+</span>
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-md-8">
                            Panty Liners for  spotting and discharge
                            </div>
                            <div className="col-md-4">
                                <div className="input-group">
                                    <span className="input-group-btn">
                                        <button type="button" className="btn btn-default btn-number"   onClick={() => { this.setState(() => ({ num3: (this.state.num3 > 0)?this.state.num3 - 1:this.state.num3 })) }}>
                                            <span className="glyphicon glyphicon-minus">-</span>
                                        </button>
                                    </span>
                                    <button type="button" className="btn btn-default btn-number" disabled="disabled">
                                        <span>{this.state.num3}</span>
                                    </button>                                    
                                    <span className="input-group-btn">
                                        <button type="button" className="btn btn-default btn-number" onClick={() => { this.setState(() => ({ num3: (this.state.num1+this.state.num2+this.state.num3 < 15)? this.state.num3 + 1:this.state.num3 })) }}>
                                            <span className="glyphicon glyphicon-plus">+</span>
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>


                        <div className="row">
                            <button> Buy Now</button>
                            <button onClick={this.KossetBoxCart}> ADD TO CART</button>
                            <span>Total:{this.state.num1+this.state.num2+this.state.num3}/15</span>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <img src="./static/img/kossetBox-trial.webp" className="img-fluid"></img>

                    </div>
                    <div className="col-md-6">
                        <h1>KOSSET TRIAL BOX</h1>
                        <p>3 Sanitary Pads with Individual Disposal Packets</p>
                        <div>
                            <p>1 Heavy Flow and Oernight Pad(L)</p>
                            <p>1 Light and Medium Flow Pad(M)</p>
                            <p>1 Panty Liners for light spotting and discharge</p>
                        </div>

                        <div className="row">
                            <button> Buy Now</button>
                            <button> ADD TO CART</button>
                            <span>Total:11/15</span>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        );
    }

}

const mapStateToProps = (state)=>{
    return{
        products: state,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addTrialBox:() => {dispatch(addTrialBox())},
        addKossetBox:(HFOP, LMFP, PLSD) => {dispatch(addKossetBox(HFOP, LMFP, PLSD))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(EcommercePage);