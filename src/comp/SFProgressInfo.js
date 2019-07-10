import React from 'react';
import PropTypes from 'prop-types';
import SFProgressCircles from './SFProgressCircles';
import { polar2 } from '../colors';

export default function SFProgressInfo({ wordStrength }) {
  return (
    <div className="SFProgressInfo--container">
      <div className="SFProgressInfo--ProgressCirclesContainer">
        <SFProgressCircles wordStrength={wordStrength} />
      </div>
      <div className="SFProgressInfo--textContainer">
        {wordStrength === 1 && 'New Word '}
        <span className="SFProgressInfo--text">
          {wordStrength !== 1 && 'This word needs more practice. '}
          Find out more
        </span>
      </div>
      <style jsx>{`
        .SFProgressInfo--container {
          display: flex;
          align-items: center;
          border-radius: 5px;
        }
        .SFProgressInfo--container:hover {
          cursor: pointer;
          background: ${polar2};
          transition: background 300ms, opacity 300ms;
        }
        .SFProgressInfo--container:hover .SFProgressInfo--text {
          opacity: 1;
        }
        .SFProgressInfo--textContainer {
          font-size: 0.8rem;
          padding-left: 10px;
          padding-right: 3px;
        }
        .SFProgressInfo--text {
          opacity: 0;
        }
        .SFProgressInfo--textContainer span {
          font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        }
      `}</style>
    </div>
  );
}

SFProgressInfo.propTypes = {
  wordStrength: PropTypes.number
};
