import React from 'react';


export default class UpDownCounter extends React.Component {
    
    state = {
        num:this.props.num
    };
    
    render() {
        return (
            <div className="input-group">
                <span className="input-group-btn">
                    <button type="button" className="btn btn-default btn-number" data-type="minus" data-field="quant[1]">
                        <span className="glyphicon glyphicon-minus">-</span>
                    </button>
                </span>
                <button type="button" className="btn btn-default btn-number" disabled="disabled">
                    <span>{this.state.num}</span>
                </button>                                    <span className="input-group-btn">
                    <button type="button" className="btn btn-default btn-number" onClick={() => {this.setState(()=>({num:this.state.num+1}))}}>
                        <span className="glyphicon glyphicon-plus">+</span>
                    </button>
                </span>
            </div>
        )
    }

}

