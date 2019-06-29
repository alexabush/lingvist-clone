import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SFProgressCircles from './SFProgressCircles';
import { polar2 } from '../colors';

export default function SFProgressInfo({ wordStrength }) {
  return (
    <div className="SFLanguageCard--ProgressInfo-container">
      <div className="SFLanguageCard--ProgressCircles-container">
        <SFProgressCircles wordStrength={wordStrength} />
      </div>
      <div className="SFLanguageCard--ProgressInfo">
        {wordStrength === 1 && 'New Word '}
        <span className="SFLanguageCard--ProgressInfo--text">
          {wordStrength !== 1 && 'This word needs more practice. '}
          Find out more
        </span>
      </div>
      <style jsx>{`
        .SFLanguageCard--ProgressInfo-container {
          display: flex;
          align-items: center;
          border-radius: 5px;
        }
        .SFLanguageCard--ProgressInfo-container:hover {
          cursor: pointer;
          background: ${polar2};
          transition: background 300ms, opacity 300ms;
        }
        .SFLanguageCard--ProgressInfo-container:hover
          .SFLanguageCard--ProgressInfo--text {
          opacity: 1;
        }
        .SFLanguageCard--ProgressInfo {
          font-size: 0.8rem;
          padding-left: 10px;
          padding-right: 3px;
        }
        .SFLanguageCard--ProgressInfo--text {
          opacity: 0;
        }
        .SFLanguageCard--ProgressInfo span {
          font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        }
      `}</style>
    </div>
  );
}

SFProgressInfo.propTypes = {
  wordStrength: PropTypes.number
};
