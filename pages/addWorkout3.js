import React from 'react';
import PropTypes from 'prop-types';
import AddWorkout from '../src/comp/AddWorkout';

export default function AddWorkout3() {
  return (
    <AddWorkout
      exerciseName="Chest Press"
      text={'Which variations would you like to do?'}
      max={null}
      equipment={'Nice Equipment'}
      nextScreen={'/fitness'}
    />
  );
}
