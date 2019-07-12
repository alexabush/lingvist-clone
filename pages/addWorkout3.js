import React from 'react';
import PropTypes from 'prop-types';
import AddWorkout from '../src/comp/AddWorkout';
import Madlib from '../src/comp/Madlib';

export default function AddWorkout3() {
  return (
    <Madlib>
      <Madlib.Input />
      <Madlib.Text>sets of</Madlib.Text>
      <Madlib.Input />
      <Madlib.Text>reps at</Madlib.Text>
      <Madlib.Input />
      <Madlib.Text>kg</Madlib.Text>
    </Madlib>
    // <AddWorkout
    //   exerciseName="Chest Press"
    //   text={'Which variations would you like to do?'}
    //   max={null}
    //   equipment={'Nice Equipment'}
    //   nextScreen={'/fitness'}
    // />
  );
}
