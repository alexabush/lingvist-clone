import React from 'react';
import PropTypes from 'prop-types';
import { frost2, polar4, green } from '../colors';

export default function ProgressBar({ num }) {
  return (
    <div className="sf-progress-bar">
      <div className="sf-progress-bar--num">
        {num < 10 ? '0' + num : '' + num}
      </div>
      <div className="sf-progress-bar--bar">
        <div className="sf-progress-bar--bar---fill" />
      </div>
      <div className="sf-progress-bar--num">100</div>
      <style jsx>{`
        .sf-progress-bar {
          display: flex;
        }
        .sf-progress-bar--num {
          padding: 0 5px;
          color: ${frost2};
        }
        .sf-progress-bar--bar {
          position: relative;
          align-self: center;
          width: 500px;
          height: 10px;
          border-radius: 5px;
          background: ${polar4};
        }
        .sf-progress-bar--bar---fill {
          position: absolute;
          height: 10px;
          background: ${green};
          border-radius: 5px;
          width: calc(1% * ${num});
        }
      `}</style>
    </div>
  );
}

ProgressBar.propTypes = {
  num: PropTypes.number
};
