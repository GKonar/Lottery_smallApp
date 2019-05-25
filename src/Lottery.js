import React, { Component } from 'react';
import './Lottery.css';
import LottoBall from './LottoBall';

//statefull component
class Lottery extends Component {
	static defaultProps = {
		title: 'Lotto',
		numBalls: 6,
		maxNum: 40
	};

	constructor(props) {
		super(props);
		this.state = {
			numbers: Array.from({ length: this.props.numBalls })
		};
		this.handleClick = this.handleClick.bind(this);
	}

	generateNumbers() {
		let winningNumbers = [];
		for (let i = 0; i < this.props.numBalls; i++) {
			let lotteryNum = Math.floor(Math.random() * this.props.maxNum) + 1;
			if (winningNumbers.indexOf(lotteryNum) === -1) winningNumbers.push(lotteryNum);
		}

		if (winningNumbers.length === this.props.numBalls) {
			this.setState({ numbers: winningNumbers });
		} else {
			// if array length is not equal props.numBalls call function again till U gonna get array with different random numbers
			this.generateNumbers();
		}
	}
	// second solution with repetitive numbers
	// this.setState(curState => ({
	// 	numbers: curState.numbers.map(n => Math.floor(Math.random() * this.props.maxNum) + 1)
	// }));

	handleClick() {
		this.generateNumbers();
	}

	render() {
		return (
			<div className="Lottery">
				<h1>{this.props.title}</h1>
				<div className="Lottery-box">
					{this.state.numbers.map(number => (
						<LottoBall num={number} />
					))}
				</div>
				<button className="Lottery-btn" onClick={this.handleClick}>
					Generate
				</button>
			</div>
		);
	}
}
export default Lottery;
