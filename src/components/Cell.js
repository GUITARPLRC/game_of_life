import React, { Component } from 'react';

import '../styles/Cell.css';

class Cell extends Component {

	changeLife() {
		let id = this.props.id;
		let alive = !this.props.alive;
		this.props.toggleLife(id, alive);
	}
  render() {
    return (
			<div className={this.props.alive ? 'cell alive' : 'cell'} onClick={this.changeLife.bind(this)}></div>
    );
  }
}

export default Cell;
