/* eslint-env jest, browser */
import React from 'react';
import renderer from 'react-test-renderer';
import CountryList from '../../src/components/CountryList';

const countries = [
  {
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
  },
  {
    medals: [
      {
        athlete: 'MALACHOWSKI, Piotr',
        country: 'POL',
        sex: 'Men',
        event: 'discus throw',
        medal: 'Silver',
        id: 122,
      },
      {
        athlete: 'MAJEWSKI, Tomasz',
        country: 'POL',
        sex: 'Men',
        event: 'shot put',
        medal: 'Gold',
        id: 166,
      },
    ],
    goldCount: 1,
    silverCount: 1,
    bronzeCount: 0,
    totalCount: 2,
    code: 'POL',
    name: 'Poland',
    emoji: '🇵🇱',
  },
];

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
