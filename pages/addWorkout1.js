import React from 'react';
import PropTypes from 'prop-types';
import AddWorkout from '../src/comp/AddWorkout';

// can either pass in props or add functionality to query mobx
export default function AddWorkout1({
  exerciseName = 'Chest Press',
  text = 'Which equipment would you like to use?',
  options = [
    {
      label: 'Barbell',
      value: 1
    },
    {
      label: 'Dumbell',
      value: 2
    },
    {
      label: 'Cables',
      value: 3
    },
    {
      label: 'Machine',
      value: 4
    },
    {
      label: 'Bodyweight',
      value: 5
    }
  ]
}) {
  return (
    <AddWorkout
      exerciseName={exerciseName}
      text={text}
      nextScreen={'/addWorkout2'}
      max={1}
      options={options}
    />
  );
}
