import React from 'react';
import PropTypes from 'prop-types';
import ChicletGroup from './ChicletGroup';
import ExerciseSpecs from './ExerciseSpecs';

export default function ExerciseCardHeader({
  exerciseName,
  equipment,
  variations,
  withChiclets,
  onClick
}) {
  const handleClick = () => {
    onClick();
  };
  return (
    <div className="exercise-card-header" onClick={handleClick}>
      <div className="exercise-card-header--split-container">
        <h2>{exerciseName}</h2>
        {withChiclets && <ChicletGroup />}
      </div>
      <ExerciseSpecs equipment={equipment} variations={variations} />
      <style jsx>{`
        .exercise-card-header {
        }
        .exercise-card-header h2 {
          margin: 10px 0;
        }
        .exercise-card-header--split-container {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      `}</style>
    </div>
  );
}

ExerciseCardHeader.propTypes = {
  exerciseName: PropTypes.string,
  equipment: PropTypes.string,
  variations: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func,
  withChiclets: PropTypes.bool
};
