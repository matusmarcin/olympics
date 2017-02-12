/* eslint-env jest, browser */
import React from 'react';
import renderer from 'react-test-renderer';
import Medal from '../../src/components/Medal';

it('renders correctly', () => {
  const tree = renderer.create(
    <Medal athlete="Matus Marcin" medal="Gold" event="test writing" sex="Men" />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly female', () => {
  const tree = renderer.create(
    <Medal athlete="Some Lady" medal="Gold" event="olympic games attendance" sex="Women" />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
