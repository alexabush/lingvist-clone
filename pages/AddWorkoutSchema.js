import React from 'react';
import AddWorkout from '../src/comp/AddWorkout';

export default function AddWorkoutSchema() {
  return (
    <AddWorkout
      exerciseName="Chest Press"
      text={'What is your commitment?'}
      max={null}
      equipment={'Nice Equipment'}
      variations={['Variation 1', 'Variation 2']}
      nextScreen={'/fitness'}
    />
  );
}
