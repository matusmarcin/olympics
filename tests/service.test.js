/* eslint-env jest, browser */
import { medals, countries } from './TestHelper';
import { getMedalsByCountry } from '../src/service';

describe('data service', () => {
  it('processed data correctly', () => {
    expect(
      getMedalsByCountry(medals),
    ).toEqual(countries);
  });
});
