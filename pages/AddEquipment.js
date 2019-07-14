import React from 'react';
import AddWorkout from '../src/comp/AddWorkout';

export default function AddEquipment() {
  return (
    <AddWorkout
      exerciseName={'Chest Press'}
      text={'Which equipment would you like to use?'}
      nextScreen={'/addVariations'}
      max={1}
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
