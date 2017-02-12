import {
	combineReducers
} from 'redux'
import countries from './countries'
import loading from './loading'
// import visibilityFilter from './visibilityFilter'

const olympicsApp = combineReducers({
	loading,
	countries//,
	// visibilityFilter
})

export default olympicsApp