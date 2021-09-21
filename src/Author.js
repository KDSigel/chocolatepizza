import React, { Component } from 'react'

export default class Author extends Component {
    render() {
        return (
            <div className="author">
                <div>
                    <img src="vanpic.png" alt="Vanessa Stevenson"/>
                </div>
                <div>
                    <h5>Vanessa Stevenson</h5>
                    <p>Food enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am.</p>
                </div>
                <div>
                    <button className="share">share recipe</button>
                </div>
            </div>
        )
    }
}
