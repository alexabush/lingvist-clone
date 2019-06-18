function ProgressDot({ color, isFilled }) {
  return (
    <div className="ProgressDot">
      <style jsx>{`
        .ProgressDot {
          height: 10px;
          width: 10px;
          background: ${isFilled && color ? color : 'lightgrey'};
          border-radius: 50%;
          margin-left: 5px;
        }
      `}</style>
    </div>
  );
}

export default function SFProgressCircles({ strength = 2, color = 'turquoise', toggleModal }) {
  function makeDots() {
    let dots = [];
    for (let i = 0; i < 5; i++) {
      if (i < strength) {
        dots.push(<ProgressDot color={color} isFilled />);
      } else {
        dots.push(<ProgressDot />);
      }
    }
    return dots;
  }
  return (
    <div onClick={toggleModal} className="ProgressDots">
      {makeDots()}
      <ProgressInfo />
      <style jsx>{`
        .ProgressDots {
          display: flex;
          margin: 0 10px;
          padding: 5px 0;
          align-items: center;
        }
        .ProgressDots:hover .ProgressInfo {
          display: block;
        }
        .ProgressDots:hover {
          cursor: pointer;
          background: tan;
        }

        .ProgressInfo span {
          font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        }
      `}</style>
    </div>
  );
}
function ProgressInfo() {
  return (
    <div className="ProgressInfo">
      This work needs more practice <span>Find out more</span>
      <style jsx>{`
        .ProgressInfo {
          font-size: 0.8rem;
          // display: none;
          margin: 0 10px;
        }
        .ProgressDots:hover .ProgressInfo {
          display: block;
        }
      `}</style>
    </div>
  );
}
