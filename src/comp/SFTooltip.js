import React from 'react';
import PropTypes from 'prop-types';
import { polar1, night4 } from '../colors';

// TODO bug in multiline display
export default function SFTooltip({ display, direction = 'bottom', children }) {
  return (
    <span className={`SFTooltip--container SFTooltip--${direction}`}>
      <span className="SFTooltip" data-display={display} />
      {children}
      <style jsx>{`
        .SFTooltip--container {
          position: relative;
        }
        .SFTooltip--container:hover .SFTooltip::before {
          display: block;
        }
        .SFTooltip--container:hover .SFTooltip::after {
          display: block;
        }
        .SFTooltip::before {
          display: none;
          font-size: 0.5rem;
          content: attr(data-display);
          background: ${polar1};
          color: ${night4};
          padding: 5px 15px;
          border-radius: 3px;
          box-shadow: 3px 3px 5px -3px ${night4};
          position: absolute;
          white-space: nowrap;
        }
        .SFTooltip::after {
          display: none;
          content: '';
          border-style: solid;
          position: absolute;
        }

        .SFTooltip--top .SFTooltip::before {
          left: 50%;
          transform: translate(-50%, -150%);
        }
        .SFTooltip--top .SFTooltip::after {
          border-width: 7px 7px 0px 7px;
          border-color: ${polar1} transparent transparent transparent;
          top: -12px;
          transform: translateX(-50%);
          left: 50%;
        }
      `}</style>
    </span>
  );
}

SFTooltip.propTypes = {
  display: PropTypes.string,
  direction: PropTypes.string,
  width: PropTypes.number,
  children: PropTypes.node
};
