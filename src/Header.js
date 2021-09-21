import React, { Component } from 'react'
import ButtonList from './ButtonList.js'

export default class Header extends Component {
    render() {
        return (
            <>
            <div className="top-left">
            <img src={this.props.img} alt="logo" />
            <div className="title-head"> 
            <div className="delicious">Delicious</div>
            <div className="best-food">the best food blog on the web.</div>
            </div></div>
            <div></div>
            <nav>
                <ButtonList />
            </nav>
            </>
        )
    }
}
