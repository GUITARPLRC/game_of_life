export default function life(state = {}, action) {
	let life = [];

	switch(action.type) {

		case 'CHANGE_TIME':
			let newTime = state.time;
			newTime++;
			let modifiedState = { life: advanceAndCheck(state.life), time: newTime }
			return modifiedState;

		case 'TOGGLE_LIFE':
			life = state.life.map(each => {
				if (each.id === action.id) {
					return { id: each.id, alive: action.alive, coords: each.coords, neighbors: each.neighbors }
				}
				return each;
			})
			return { life, time: state.time };

		case 'CLEAR_BOARD':
			life = state.life.map(each => {
				return { id: each.id, alive: false, coords: each.coords, neighbors: each.neighbors }
			})
			return {life, time: 0}

		case 'RANDOM':
			life = state.life.map(each => {
				let number = Math.random();
				if (number > 0.7) {
					return { id: each.id, alive: true, coords: each.coords, neighbors: each.neighbors }
				} else  {
					return { id: each.id, alive: false, coords: each.coords, neighbors: each.neighbors }
				}
			})
			return {life, time: 0};

		default: return state;

	}

}

// CHANGE_TIME helper

function advanceAndCheck(state) {
	var stateCopy = JSON.parse(JSON.stringify(state));

	// iterate through state array to get neighbors
	for (let i = 0, stateLength = state.length; i < stateLength; i++) {
		// reset neighborsAlive
		let neighborsAlive = 0;
		// set neighbors array
		let neighbors = state[i].neighbors;

		// iterate throught neighbors
		for (let j = 0, neighborsLength = neighbors.length; j < neighborsLength; j++) {

			// iterate through state
			for (let h = 0; h < stateLength; h++) {

				if (neighbors[j].x === state[h].coords.x && neighbors[j].y === state[h].coords.y) {
					if (state[h].alive) {
						neighborsAlive++;
						break;
					} else {
						break;
					}
				}

			}
		}
		// check game of life rules
		if (neighborsAlive < 2 && state[i].alive) {
			stateCopy[i].alive = false;
		} else if (neighborsAlive === 2 && state[i].alive) {
			stateCopy[i].alive = true;
		} else if (neighborsAlive === 3) {
			stateCopy[i].alive = true;
		} else {
			stateCopy[i].alive = false;
		}
	}

	return stateCopy;
}
