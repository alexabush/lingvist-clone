import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';

export default function ExerciseSpecs({ equipment, variations }) {
  return (
    <div className="exercise-card-header--details">
      {equipment && (
        <div className="exercise-card-header--equipment-container">
          <span>{equipment}</span>
          <span className="icon-container">
            <FontAwesomeIcon icon={faDumbbell} />
          </span>
        </div>
      )}
      {variations && (
        <div className="exercise-card-header--variations-container">
          <span>{variations.join(', ')}</span>
        </div>
      )}
      <style jsx>{`
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

ExerciseSpecs.propTypes = {
  equipment: PropTypes.string,
  variations: PropTypes.arrayOf(PropTypes.string)
};
