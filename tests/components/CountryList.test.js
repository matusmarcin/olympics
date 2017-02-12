/* eslint-env jest, browser */
import React from 'react';
import renderer from 'react-test-renderer';
import { countries } from '../TestHelper';
import CountryList from '../../src/components/CountryList';


it('renders correctly', () => {
  const tree = renderer.create(
    <CountryList countries={countries} loading={false} />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders loading message', () => {
  const tree = renderer.create(
    <CountryList countries={[]} loading />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
