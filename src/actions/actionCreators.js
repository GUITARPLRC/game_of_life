// change time
export function changeTime() {
	return {
		type: 'CHANGE_TIME'
	}
}

// toggleLife
export function toggleLife(id, alive) {
	return {
		type: 'TOGGLE_LIFE',
		id,
		alive
	}
}

// clearBoard
export function clearBoard() {
	return {
		type: 'CLEAR_BOARD'
	}
}

// random reset
export function random() {
	return {
		type: 'RANDOM'
	}
}
