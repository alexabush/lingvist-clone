import React from 'react';
import PropTypes from 'prop-types';
import AddWorkout from '../src/comp/AddWorkout';

export default function AddWorkout1({ exerciseName }) {
  return (
    <AddWorkout
      exerciseName="Chest Press"
      text={'Which equipment would you like to use?'}
      nextScreen={'/addWorkout2'}
      max={1}
      isSelect
      options={[
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
      ]}
    />
  );
}
