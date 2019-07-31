import React from 'react';
import PropTypes from 'prop-types';
import { polar1, night4 } from '../colors';

// TODO bug in multiline display
export default function Tooltip({ display, direction = 'bottom', children }) {
  return (
    <span className={`sf-tooltip--container sf-tooltip--${direction}`}>
      <span className="sf-tooltip" data-display={display} />
      {children}
      <style jsx>{`
        .sf-tooltip--container {
          position: relative;
        }
        .sf-tooltip--container:hover .sf-tooltip::before {
          display: block;
        }
        .sf-tooltip--container:hover .sf-tooltip::after {
          display: block;
        }
        .sf-tooltip::before {
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
        .sf-tooltip::after {
          display: none;
          content: '';
          border-style: solid;
          position: absolute;
        }

        .sf-tooltip--top .sf-tooltip::before {
          left: 50%;
          transform: translate(-50%, -150%);
        }
        .sf-tooltip--top .sf-tooltip::after {
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

Tooltip.propTypes = {
  display: PropTypes.string,
  direction: PropTypes.string,
  width: PropTypes.number,
  children: PropTypes.node
};
