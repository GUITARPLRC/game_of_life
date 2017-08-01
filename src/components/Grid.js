import React, { Component } from 'react';

import '../styles/Grid.css';

import Cell from './Cell';

class Grid extends Component {
	constructor(props) {
		super(props);
		this.state = {
			intervalCheck: false,
			interval: null
		}
	}

	componentWillUnmount() {
		clearInterval(this.state.interval);
	}

	autoRun() {
		if (this.state.intervalCheck === true) {
			return
		}
		this.setState({intervalCheck: true})

		let interval = setInterval(this.props.changeTime, 80)
		this.setState({interval})
	}

	pause() {
		if (this.state.intervalcheck === false) {
			return
		}
		this.setState({intervalCheck: false})

		clearInterval(this.state.interval)

	}

	clearBoard() {
		this.setState({intervalCheck: false})
		clearInterval(this.state.interval)
		this.props.clearBoard();
	}

	randomReset() {
		this.props.random();
	}

  render() {
    return (
			<div className='board'>
				<p>Life Cycle: {this.props.time}</p>
				<div className='grid'>
					{this.props.life.map((each) => <Cell key={each.id} id={each.id} alive={each.alive} toggleLife={this.props.toggleLife} />)}
				</div>
				<button onClick={this.props.changeTime}>Next Life Cycle</button>
				<button onClick={this.autoRun.bind(this)}>Start</button>
				<button onClick={this.pause.bind(this)}>Pause</button>
				<button onClick={this.clearBoard.bind(this)}>Clear</button>
				<button onClick={this.randomReset.bind(this)}>Random Reset</button>
			</div>
    );
  }
}

export default Grid;
