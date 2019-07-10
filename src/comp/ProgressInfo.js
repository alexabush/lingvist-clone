import React from 'react';
import PropTypes from 'prop-types';
import ProgressCircles from './ProgressCircles';
import { polar2 } from '../colors';

export default function ProgressInfo({ wordStrength }) {
  return (
    <div className="progress-info--container">
      <div className="progress-info--progress-circles-container">
        <ProgressCircles wordStrength={wordStrength} />
      </div>
      <div className="progress-info--text-container">
        {wordStrength === 1 && 'New Word '}
        <span className="progress-info--text">
          {wordStrength !== 1 && 'This word needs more practice. '}
          Find out more
        </span>
      </div>
      <style jsx>{`
        .progress-info--container {
          display: flex;
          align-items: center;
          border-radius: 5px;
        }
        .progress-info--container:hover {
          cursor: pointer;
          background: ${polar2};
          transition: background 300ms, opacity 300ms;
        }
        .progress-info--container:hover .progress-info--text {
          opacity: 1;
        }
        .progress-info--text-container {
          font-size: 0.8rem;
          padding-left: 10px;
          padding-right: 3px;
        }
        .progress-info--text {
          opacity: 0;
        }
        .progress-info--text-container span {
          font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        }
      `}</style>
    </div>
  );
}

ProgressInfo.propTypes = {
  wordStrength: PropTypes.number
};
