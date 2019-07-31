import React from 'react';
import PropTypes from 'prop-types';
import { polar4 } from '../colors';

export default function NavArrows({
  onLeftClick,
  onRightClick,
  isPrev,
  children
}) {
  return (
    <div className="sf-nav-arrows">
      <div
        className="sf-nav-arrows--arrow-container sf-nav-arrows--left-arrow-container"
        onClick={onLeftClick}
      >
        {isPrev ? null : <div className="sf-nav-arrows--arrow">L</div>}
      </div>
      {children}
      <div
        className="sf-nav-arrows--arrow-container sf-nav-arrows--right-arrow-container"
        onClick={onRightClick}
      >
        <div className="sf-nav-arrows--arrow">R</div>
      </div>
      <style jsx>{`
        .sf-nav-arrows {
          display: flex;
        }
        .sf-nav-arrows--arrow-container {
          display: flex;
          justify-content: center;
          min-height: 100%;
          min-width: 20px;
        }
        .sf-nav-arrows--arrow-container:hover {
          cursor: pointer;
        }
        .sf-nav-arrows--arrow-container:active {
          background: ${polar4};
        }
        .sf-nav-arrows--arrow-container.sf-nav-arrows--left-arrow-container:hover
          .arrow {
          transform: translateX(-3px);
        }
        .sf-nav-arrows--arrow-container.sf-nav-arrows--right-arrow-container:hover
          .arrow {
          transform: translateX(3px);
        }
        .sf-nav-arrows--arrow {
          align-self: center;
        }
        .sf-nav-arrows--arrow-container.sf-nav-arrows--left-arrow-container {
          visibility: ${isPrev ? 'hidden' : 'visible'};
        }
      `}</style>
    </div>
  );
}

NavArrows.propTypes = {
  onLeftClick: PropTypes.func,
  onRightClick: PropTypes.func,
  isPrev: PropTypes.bool,
  children: PropTypes.node
};
