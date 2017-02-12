/* eslint-env jest, browser */
import React from 'react';
import renderer from 'react-test-renderer';
import { countries } from '../TestHelper';
import Country from '../../src/components/Country';

const countryData = countries[0];

it('renders correctly', () => {
  const tree = renderer.create(
    <Country {...countryData} />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('expands on click', () => {
  const tree = renderer.create(
    <Country {...countryData} />,
  ).toJSON();
  tree.children[0].props.onClick();
  expect(tree).toMatchSnapshot();
});
