import React from 'react';
import T from 'prop-types';
import ChicletGroup from './ChicletGroup';

export default function ExerciseCardHeader({
  exerciseName,
  equipment,
  variations,
  onClick
}) {
  const handleClick = () => {
    onClick();
  };
  return (
    <div className="ExerciseCardHeader" onClick={handleClick}>
      <div className="ExerciseCardHeader--splitContainer">
        <h2>{exerciseName}</h2>
        <ChicletGroup />
      </div>
      <div className="ExerciseCardHeader--details">
        <div className="ExerciseCardHeader--equipmentContainer">
          <span>{equipment}</span>
          <span>*</span>
        </div>
        <div className="ExerciseCardHeader--variationsContainer">
          <span>{variations.join(', ')}</span>
        </div>
      </div>

      <style jsx>{`
        .ExerciseCardHeader {
        }
        .ExerciseCardHeader--splitContainer {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .ExerciseCardHeader--variationsContainer,
        .ExerciseCardHeader--equipmentContainer {
          display: inline-block;
        }
      `}</style>
    </div>
  );
}

ExerciseCardHeader.T = {
  exerciseName: T.string,
  equipment: T.string,
  variations: T.arrayOf(T.string),
  onClick: T.func
};
