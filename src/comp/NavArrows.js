export default function NavArrows({ onLeftClick, onRightClick, children }) {
  return (
    <div className="NavArrows">
      <div className="arrow arrow-left" onClick={onLeftClick}>
        L
      </div>
      {children}
      <div className="arrow arrow-right" onClick={onRightClick}>
        R
      </div>
      <style jsx>{`
        .NavArrows {
          display: flex;
          width: 600px;
          justify-content: space-between;
        }
        .arrow {
          align-self: center;
        }
      `}</style>
    </div>
  );
}
