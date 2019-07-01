import React from 'react';
import PropTypes from 'prop-types';
import { frost2, polar4, green } from '../colors';

export default function ProgressBar({ num }) {
  return (
    <div className="sf-ProgressBar">
      <div className="sf-ProgressBar--num">
        {num < 10 ? '0' + num : '' + num}
      </div>
      <div className="sf-ProgressBar--bar">
        <div className="sf-ProgressBar--bar---fill" />
      </div>
      <div className="sf-ProgressBar--num">100</div>
      <style jsx>{`
        .sf-ProgressBar {
          display: flex;
        }
        .sf-ProgressBar--num {
          padding: 0 5px;
          color: ${frost2};
        }
        .sf-ProgressBar--bar {
          position: relative;
          align-self: center;
          width: 500px;
          height: 10px;
          border-radius: 5px;
          background: ${polar4};
        }
        .sf-ProgressBar--bar---fill {
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
