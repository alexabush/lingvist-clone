import React from 'react';
import ExerciseCard from '../src/comp/ExerciseCard';
import { polar2 } from '../src/colors';

export default function FitnessPage() {
  return (
    <div>
      <ExerciseCard />
      <style jsx>{`
        padding: 30px;
        background: ${polar2};
      `}</style>
    </div>
  );
}
