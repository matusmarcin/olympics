/* eslint-env jest, browser */
import React from 'react';
import renderer from 'react-test-renderer';
import Country from '../../src/components/Country';

const countryData = {
  medals: [
    {
      athlete: 'MCLELLAN, Sally',
      country: 'AUS',
      sex: 'Women',
      event: '100m hurdles',
      medal: 'Silver',
      id: 14,
    },
    {
      athlete: 'TALLENT, Jared',
      country: 'AUS',
      sex: 'Men',
      event: '20km walk',
      medal: 'Bronze',
      id: 33,
    },
    {
      athlete: 'TALLENT, Jared',
      country: 'AUS',
      sex: 'Men',
      event: '50km walk',
      medal: 'Silver',
      id: 110,
    },
    {
      athlete: 'HOOKER, Steve',
      country: 'AUS',
      sex: 'Men',
      event: 'pole vault',
      medal: 'Gold',
      id: 160,
    },
  ],
  goldCount: 1,
  silverCount: 2,
  bronzeCount: 1,
  totalCount: 4,
  code: 'AUS',
  name: 'Australia',
  emoji: '🇦🇺',
};

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
