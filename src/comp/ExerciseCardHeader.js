import React from 'react';
import PropTypes from 'prop-types';
import ChicletGroup from './ChicletGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';

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
    <div className="exercise-card-header" onClick={handleClick}>
      <div className="exercise-card-header--split-container">
        <h2>{exerciseName}</h2>

        <ChicletGroup />
      </div>
      <div className="exercise-card-header--details">
        <div className="exercise-card-header--equipment-container">
          <span>{equipment}</span>
          <span className="icon-container">
            <FontAwesomeIcon icon={faDumbbell} />
          </span>
        </div>
        <div className="exercise-card-header--variations-container">
          <span>{variations.join(', ')}</span>
        </div>
      </div>

      <style jsx>{`
        .exercise-card-header {
        }
        .exercise-card-header--split-container {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .exercise-card-header--variations-container,
        .exercise-card-header--equipment-container {
          display: inline-block;
        }
        .icon-container {
          padding: 0 10px;
        }
      `}</style>
    </div>
  );
}

ExerciseCardHeader.propTypes = {
  exerciseName: PropTypes.string,
  equipment: PropTypes.string,
  variations: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func
};
