import {
	connect
} from 'react-redux';
import CountryList from '../components/CountryList';

// const getVisible = (medals, filter) => {
// 	const getter = `${filter.replace('SHOW_', '').toLowerCase()}Count`;
// 	return medals.filter((country) => { return country[getter] > 0 })
// }
// 
const order = (countries, desc = true) => {
	const compareByMedalCount = function(a,b) {
	  if (a.totalCount < b.totalCount)
	    return desc ? 1 : -1;
	  if (a.totalCount > b.totalCount)
	    return desc ? -1 : 1;
	  if (a.goldCount < b.goldCount)
	  	return desc ? 1 : -1;
	  if (a.goldCount > b.goldCount)
	  	return desc ? -1 : 1;
	  if (a.silverCount < b.silverCount)
	  	return desc ? 1 : -1;
	  if (a.silverCount > b.silverCount)
	  	return desc ? -1 : 1;
	  return 0;
	}

	return countries.sort(compareByMedalCount);
}

const mapStateToProps = (state) => {
	return {
		// countries: getVisible(getMedalsByCountry(state.medals), state.visibilityFilter),
		countries: order(state.countries),
		loading: state.loading
	}
}

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		onFilterClick: (medal) => {
// 			dispatch(filter(medal))
// 		}
// 	}
// }

const OlympicMedals = connect(
	mapStateToProps,
	// mapDispatchToProps
)(CountryList)

export default OlympicMedals