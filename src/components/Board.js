import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';

import Grid from './Grid';

function mapStateToProps(state) {
	return {
		life: state.life,
		time: state.time
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch)
}

const Board = connect(mapStateToProps, mapDispatchToProps)(Grid);

export default Board;
