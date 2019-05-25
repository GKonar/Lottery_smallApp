import React, { Component } from 'react';
import './LottoBall.css';

// dumb Component, just generate ball
class LottoBall extends Component {
	render() {
		return (
			<div className="LottoBall">
				<h2 className="LottoBall-ball">{this.props.num}</h2>
			</div>
		);
	}
}

export default LottoBall;
