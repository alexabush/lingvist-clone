import React from 'react';
import PropTypes from 'prop-types';
import { polar4 } from '../colors';

export default function SFNavArrows({
  onLeftClick,
  onRightClick,
  isPrev,
  children
}) {
  return (
    <div className="SFNavArrows">
      <div
        className="SFNavArrows--arrowContainer SFNavArrows--leftArrowContainer"
        onClick={onLeftClick}
      >
        {isPrev ? null : <div className="SFNavArrows--arrow">L</div>}
      </div>
      {children}
      <div
        className="SFNavArrows--arrowContainer SFNavArrows--rightArrowContainer"
        onClick={onRightClick}
      >
        <div className="SFNavArrows--arrow">R</div>
      </div>
      <style jsx>{`
        .SFNavArrows {
          display: flex;
        }
        .SFNavArrows--arrowContainer {
          display: flex;
          justify-content: center;
          min-height: 100%;
          min-width: 20px;
        }
        .SFNavArrows--arrowContainer:hover {
          cursor: pointer;
        }
        .SFNavArrows--arrowContainer:active {
          background: ${polar4};
        }
        .SFNavArrows--arrowContainer.SFNavArrows--leftArrowContainer:hover
          .arrow {
          transform: translateX(-3px);
        }
        .SFNavArrows--arrowContainer.SFNavArrows--rightArrowContainer:hover
          .arrow {
          transform: translateX(3px);
        }
        .SFNavArrows--arrow {
          align-self: center;
        }
        .SFNavArrows--arrowContainer.SFNavArrows--leftArrowContainer {
          visibility: ${isPrev ? 'hidden' : 'visible'};
        }
      `}</style>
    </div>
  );
}

SFNavArrows.propTypes = {
  onLeftClick: PropTypes.func,
  onRightClick: PropTypes.func,
  isPrev: PropTypes.bool,
  children: PropTypes.node
};
