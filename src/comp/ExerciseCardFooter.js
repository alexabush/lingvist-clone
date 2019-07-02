import React from 'react';
import T from 'prop-types';
import RepsScroller from './RepsScroller';

export default function ExerciseCardFooter({ exerciseWeight }) {
  return (
    <div className="ExerciseCardFooter">
      <RepsScroller />
      <div className="ExerciseCardFooter--weightContainer">
        {exerciseWeight}
      </div>
      <style jsx>{`
        .ExerciseCardFooter {
          display: flex;
          max-width: 100%;
          border: 1px solid green;
        }
        .ExerciseCardFooter--weightContainer {
          font-size: 2rem;
          display: flex;
          justify-content: center;
          padding: 10px;
          width: 40px;
          border: 1px solid purple;
          //   overflow: hidden;
        }
      `}</style>
    </div>
  );
}

ExerciseCardFooter.T = {
  exerciseWeight: T.number
};
