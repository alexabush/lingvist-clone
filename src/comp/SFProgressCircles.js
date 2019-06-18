export default function SFProgressCircles({ strength = 2, color = 'turquoise' }) {
  function makeDots() {
    let dots = [];
    for (let i = 0; i < 5; i++) {
      if (i < strength) {
        dots.push(<ProgressCircle color={color} isFilled />);
      } else {
        dots.push(<ProgressCircle />);
      }
    }
    return dots;
  }
  return (
    <div className="SFProgressCircles">
      {makeDots()}
      <style jsx>{`
        .SFProgressCircles {
          display: flex;
          align-items: center;
        }
      `}</style>
    </div>
  );
}

function ProgressCircle({ color, isFilled }) {
  return (
    <div className="ProgressCircle">
      <style jsx>{`
        .ProgressCircle {
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
