// your Bomb code here!
import React, { Component } from 'react';

class Bomb extends Component {

    constructor(props) { //props taht the componenet gets from its parent
        super() //required in react componenets if we are to use this in the contructor
        this.state = {
            secondsLeft: props.initialCount
            //someKey: props.someValue
        }
    }

    render() {

        if (this.state.secondsLeft === 0) {
            return <div>Boom!</div>
        } else {
        return <div>{this.state.secondsLeft} seconds left before I go boom!</div>
        }
    }
}

export default Bomb
