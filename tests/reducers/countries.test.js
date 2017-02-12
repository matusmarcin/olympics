/* eslint-env jest, browser */
import countriesReducer from '../../src/reducers/countries';

const data = 'These are my data.';

describe('countries reducer', () => {
  it('should return the initial state', () => {
    expect(
      countriesReducer(undefined, {}),
    ).toEqual([]);
  });

  it('should handle GET_OLYMPICS_DATA_RECEIVED', () => {
    expect(
      countriesReducer([], {
        type: 'GET_OLYMPICS_DATA_RECEIVED',
        data,
      }),
    ).toEqual(data);
  });
});
