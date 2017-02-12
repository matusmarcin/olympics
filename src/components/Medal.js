import React, { PropTypes } from 'react';

const medalIcon = {
  gold: '🥇',
  silver: '🥈',
  bronze: '🥉',
};

const Medal = ({ athlete, event, medal, sex }) => (
  <li>
    {sex === 'Men' ? '🏃' : '🏃‍♀️'}
    {athlete} - {event} - <span>{medalIcon[medal.toLowerCase()]}</span>
  </li>
);

Medal.propTypes = {
  athlete: PropTypes.string.isRequired,
  sex: PropTypes.string.isRequired,
  event: PropTypes.string.isRequired,
  medal: PropTypes.string.isRequired,
};

export default Medal;
