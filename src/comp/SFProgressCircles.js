export default function SFProgressCircles({ wordStrength }) {
  const colors = ['orange', 'purple', 'red', 'turquoise', 'green'];

  function makeDots() {
    let dots = [];
    let color = colors[wordStrength - 1];
    for (let i = 0; i < 5; i++) {
      if (i < wordStrength) {
        dots.push(<ProgressCircle key={i} color={color} isFilled />);
      } else {
        dots.push(<ProgressCircle key={i} />);
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
          height: 9px;
          width: 9px;
          background: ${isFilled && color ? color : 'lightgrey'};
          border-radius: 50%;
          margin-left: 5px;
        }
      `}</style>
    </div>
  );
}
