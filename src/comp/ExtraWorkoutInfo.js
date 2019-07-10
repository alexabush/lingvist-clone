import React from 'react';
import PropTypes from 'prop-types';

export default function ExtraWorkoutInfo() {
  return (
    <div className="extra-workout-info">
      <p>Extra Information Goes Here</p>
      <p>Equipment Selection w/Weight Calculator</p>
      <p>Variation Selection</p>
      <p>History</p>
      <p>Rest Timer Config</p>
      <p>Difficulty</p>
      <style jsx>{`
        .extra-workout-info {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
}

ExtraWorkoutInfo.propTypes = {
  exerciseWeight: PropTypes.number
};
