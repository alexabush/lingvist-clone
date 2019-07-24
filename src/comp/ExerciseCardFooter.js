import React from 'react';
import PropTypes from 'prop-types';
import RepsScroller from './RepsScroller';

export default function ExerciseCardFooter({ exerciseWeight }) {
  return (
    <div className="exercise-card-footer">
      <RepsScroller />
      <div className="exercise-card-footer--weight-container">
        {exerciseWeight}
      </div>
      <style jsx>{`
        .exercise-card-footer {
          display: flex;
        }
        .exercise-card-footer--weight-container {
          font-size: 2rem;
          display: flex;
          justify-content: center;
          padding: 10px;
          width: 40px;
          margin-left: 20px;
        }
      `}</style>
    </div>
  );
}

ExerciseCardFooter.propTypes = {
  exerciseWeight: PropTypes.number
};
