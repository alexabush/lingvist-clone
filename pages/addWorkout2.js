import React from 'react';
import PropTypes from 'prop-types';
import AddWorkout from '../src/comp/AddWorkout';

export default function AddWorkout2({ exerciseName }) {
  return (
    <AddWorkout
      exerciseName="Chest Press"
      text={'Which variations would you like to do?'}
      max={null}
      equipment={'Nice Equipment'}
      nextScreen={'/addWorkout3'}
      isSelect
      options={[
        {
          label: 'Standard',
          value: 1
        },
        {
          label: 'Incline',
          value: 2
        },
        {
          label: 'Decline',
          value: 3
        },
        {
          label: 'Pause Sets',
          value: 4
        },
        {
          label: 'Drop Sets',
          value: 5
        },
        {
          label: 'Single Arm',
          value: 6
        }
      ]}
    />
  );
}
