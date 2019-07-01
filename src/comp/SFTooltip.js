import React from 'react';
import PropTypes from 'prop-types';
import { polar1, night4 } from '../colors';

// TODO bug in multiline display
export default function SFTooltip({
  display,
  direction = 'bottom',
  width = 100,
  children
}) {
  return (
    <div className={`SFTooltip--container SFTooltip--${direction}`}>
      <div className="SFTooltip" data-display={display} />
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
          width: ${width}px;
          content: attr(data-display);
          background: ${polar1};
          color: ${night4};
          padding: 5px 20px;
          border-radius: 3px;
          position: absolute;
          box-shadow: 3px 3px 5px -3px ${night4};
        }
        .SFTooltip::after {
          display: none;
          content: '';
          border-style: solid;
          position: absolute;
        }

        .SFTooltip--top .SFTooltip::before {
          top: -40px;
          left: calc(-${width / 2}px);
        }
        .SFTooltip--top .SFTooltip::after {
          border-width: 8px 6px 0px 6px;
          border-color: ${polar1} transparent transparent transparent;
          top: -12px;
          left: calc(-50%);
        }
      `}</style>
    </div>
  );
}

SFTooltip.propTypes = {
  display: PropTypes.string,
  direction: PropTypes.string,
  width: PropTypes.number,
  children: PropTypes.node
};
