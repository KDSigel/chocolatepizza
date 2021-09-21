import React, { Component } from 'react'

export default class ImageSection extends Component {
    render() {
        return (
            <>
                <div className="sub-head">
                    <div className="left-side">
                        <div className='art-title'>Chocolate Pizza</div>
                        <div className= "date">posted on 15 dec 2013 / desserts</div>
                    </div>
                    <div className="right-side">
                        <img className='printer' src="printicon.png" alt="print icon"/>PRINT
                    </div>
                </div>
                <img src='chocopizza.png' alt="chocolate pizza" />
            </>
        )
    }
}
