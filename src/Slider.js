import React, { Component } from 'react'

export class Slider extends Component {
    render() {
        return (
            <div className="slider-container">
                <input type="range" className="slider" />
            </div>
        )
    }
}

export default Slider
