// your ImageSlider code here!
import React, { Component } from 'react';

class ImageSlider extends Component {

    //we use the constructor to set the INITIAL STATE
    constructor() {
        super()
        this.state = {
            currentSlideIndex: 0
        }
    }

    render() {
        return (
        <h2>I am on slide {this.state.currentSlideIndex}</h2>
        )
    }
}

export default ImageSlider
