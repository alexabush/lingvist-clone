import { polar4 } from '../colors';

export default function NavArrows({ onLeftClick, onRightClick, isPrev, children }) {
  return (
    <div className="NavArrows">
      <div className="NavArrows--arrow-container arrow-left" onClick={onLeftClick}>
        <div className="arrow">L</div>
      </div>
      {children}
      <div className="NavArrows--arrow-container arrow-right" onClick={onRightClick}>
        <div className="arrow">R</div>
      </div>
      <style jsx>{`
        .NavArrows {
          display: flex;
        }
        .NavArrows--arrow-container {
          display: flex;
          justify-content: center;
          min-height: 100%;
          min-width: 20px;
        }
        .NavArrows--arrow-container:hover {
          cursor: pointer;
        }
        .NavArrows--arrow-container:active {
          background: ${polar4};
        }
        .NavArrows--arrow-container.arrow-left:hover .arrow {
          transform: translateX(-3px);
        }
        .NavArrows--arrow-container.arrow-right:hover .arrow {
          transform: translateX(3px);
        }
        .arrow {
          align-self: center;
        }
        .NavArrows--arrow-container.arrow-left {
          visibility: ${isPrev ? 'hidden' : 'visible'};
        }
      `}</style>
    </div>
  );
}
