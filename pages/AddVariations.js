import React from 'react';
import AddWorkout from '../src/comp/AddWorkout';

export default function AddVariations() {
  return (
    <AddWorkout
      exerciseName="Chest Press"
      text={'Which variations would you like to do?'}
      max={null}
      equipment={'Nice Equipment'}
      nextScreen={'/addWorkoutSchema'}
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
