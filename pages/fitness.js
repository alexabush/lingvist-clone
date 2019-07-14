import React from 'react';
import ExerciseCard from '../src/comp/ExerciseCard';
import { polar2 } from '../src/colors';

export default function FitnessPage() {
  return (
    <div>
      <ExerciseCard
        exerciseWeight={180}
        exerciseName={'Bench Press'}
        equipment={'Bench Press'}
        variations={['15 deg Incline', '45 deg Incline']}
      />
      <style jsx>{`
        padding: 30px;
        background: ${polar2};
      `}</style>
    </div>
  );
}
