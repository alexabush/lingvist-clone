import react from 'react';
import { frost1, frost2, frost3, frost4, polar1, polar2, polar3, polar4, green, night4 } from '../colors';

export default function Tooltip({ display = 'hello world', direction = 'bottom', width = 100, children }) {
  return (
    <div className={`Tooltip-container Tooltip-${direction}`}>
      <div className="Tooltip" data-display={display} />
      {children}
      <style jsx>{`
        .Tooltip-container {
          position: relative;
        }
        .Tooltip-container:hover .Tooltip::before {
          display: block;
        }
        .Tooltip-container:hover .Tooltip::after {
          display: block;
        }
        .Tooltip::before {
          display: none;
          width: ${width}px;
          content: attr(data-display);
          background: ${polar1};
          color: ${night4};
          padding: 5px 20px;
          border-radius: 5px;
          position: absolute;
          box-shadow: 3px 3px 3px 1px ${night4};
        }
        .Tooltip::after {
          display: none;
          content: '';
          border-style: solid;
          position: absolute;
        }

        .Tooltip-top .Tooltip::before {
          top: -40px;
          left: calc(-${width / 2}px);
        }
        .Tooltip-top .Tooltip::after {
          border-width: 8px 6px 0px 6px;
          border-color: ${polar1} transparent transparent transparent;
          top: -12px;
          left: calc(-50%);
        }
      `}</style>
    </div>
  );
}
