import React from 'react';

const TrialBoxCart = (props) => {
    return (
        <div className="row">
            <div className="col-md-3">
                <img src="./static/img/kossetBox-main.webp" className="img-fluid"></img>
            </div>
            <div className="col-md-9">
                <h3>KOSSET TRIAL BOX</h3>
                <p>3 Sanitary Pads with Individual Disposal Packets</p>

                <div className="row">
                    <div className="col-sm-10">
                        <p>1 Heavy Flow and Oernight Pad(L)</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-10">
                        <p>1 Light and Medium Flow Pad(M)</p>
                    </div>
                </div>


                <div className="row">
                    <div className="col-sm-10">
                        <p>1 Panty Liners for light spotting and discharge</p>
                    </div>
                </div>

            </div>

            <hr></hr>
        </div>
    )
}

export default TrialBoxCart;