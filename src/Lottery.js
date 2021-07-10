import React, { Component } from 'react'
import LotteryBall from './LotteryBall'
import './Lottery.css'

class Lottery extends Component {
    static defaultProps = {
        title: 'Lotto',
        maxBalls: 6,
        maxNum: 40
    }
    state = {
        nums: [1, 1, 1, 1]
    }
    generate = () => {
        let newNums = []
        for (let x = 0; x < this.props.numBalls; x++) {
            newNums.push(Math.floor(Math.random(this.props.maxNum) * 10) + 1)
        }
        this.setState({ nums: newNums })
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