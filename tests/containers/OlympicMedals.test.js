/* eslint-env jest, browser */
import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { countries, shuffledCountries } from '../TestHelper';
import OlympicMedals from '../../src/containers/OlympicMedals';
import CountryList from '../../src/components/CountryList';

const mockStore = configureMockStore([thunk]);

describe('olympic medals', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      countries: shuffledCountries,
      loading: false,
    });
  });

  it('renders', () => {
    const wrapper = mount(
      <Provider store={store}>
        <OlympicMedals />
      </Provider>,
        );

    const olympicMedalsComp = wrapper.find(OlympicMedals);
    const countryListComp = olympicMedalsComp.find(CountryList);
    expect(olympicMedalsComp.length).toBeTruthy();
    expect(countryListComp.length).toBeTruthy();
    expect(countryListComp.node.props.countries[0].code).toEqual(countries[0].code);
    expect(countryListComp.node.props.countries[1].code).toEqual(countries[1].code);
    expect(countryListComp.node.props.countries[2].code).toEqual(countries[2].code);
    expect(countryListComp.node.props.countries[3].code).toEqual(countries[3].code);
  });
});
