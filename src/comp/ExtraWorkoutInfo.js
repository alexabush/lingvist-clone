import React from 'react';
import T from 'prop-types';

export default function ExtraWorkoutInfo() {
  return (
    <div className="ExtraWorkoutInfo">
      <p>Extra Information Goes Here</p>
      <p>Equipment Selection w/Weight Calculator</p>
      <p>Variation Selection</p>
      <p>History</p>
      <p>Rest Timer Config</p>
      <p>Difficulty</p>
      <style jsx>{`
        .ExtraWorkoutInfo {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
}

ExtraWorkoutInfo.T = {
  exerciseWeight: T.number
};
