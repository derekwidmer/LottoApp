import React, { Component } from 'react'
import LotteryBall from './LotteryBall'
import './Lottery.css'

class Lottery extends Component {
    static defaultProps = {
        title: 'Lotto',
        numBalls: 6,
        maxNum: 40
    }
    constructor(props) {
        super(props)
        this.state = { nums: Array.from({ length: this.props.numBalls }) }
        this.generate = this.generate.bind(this)
    }

    generate() {
        this.setState(currentState => ({
            nums: currentState.nums.map(
                n => Math.floor(Math.random() * this.props.maxNum) + 1
            )
        }));
    }

    render() {
        return (
            <div className="Lottery">
                <h1>{this.props.title}</h1>
                <div className="Lottery-balls">
                    {this.state.nums.map(n => <LotteryBall num={n} />)}
                </div>
                <button onClick={this.generate}>Generate</button>
            </div>
        )
    }
}

export default Lottery;