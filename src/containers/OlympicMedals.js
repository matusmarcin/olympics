import { connect } from 'react-redux';
import CountryList from '../components/CountryList';

const order = (countries, desc = true) => {
  const compareByMedalCount = function compareByMedalCount(a, b) {
    if (a.totalCount < b.totalCount) { return desc ? 1 : -1; }
    if (a.totalCount > b.totalCount) { return desc ? -1 : 1; }
    if (a.goldCount < b.goldCount) { return desc ? 1 : -1; }
    if (a.goldCount > b.goldCount) { return desc ? -1 : 1; }
    if (a.silverCount < b.silverCount) { return desc ? 1 : -1; }
    if (a.silverCount > b.silverCount) { return desc ? -1 : 1; }
    return 0;
  };
  return countries.sort(compareByMedalCount);
};

const mapStateToProps = state => ({
  countries: order(state.countries),
  loading: state.loading,
});

const OlympicMedals = connect(mapStateToProps)(CountryList);

export default OlympicMedals;
