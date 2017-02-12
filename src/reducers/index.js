import { combineReducers } from 'redux';
import countries from './countries';
import loading from './loading';

const olympicsApp = combineReducers({
  loading,
  countries,
});

export default olympicsApp;
