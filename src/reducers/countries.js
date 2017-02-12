// const medal = (state, action) => {
// 	return state
// }

const countries = (state = [], action) => {
	switch (action.type) {
		case 'GET_OLYMPICS_DATA_RECEIVED':
			return action.data
		default:
			return state
	}
}

export default countries