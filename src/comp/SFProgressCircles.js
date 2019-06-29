import React from 'react';
import PropTypes from 'prop-types';

export default function SFProgressCircles({ wordStrength }) {
  const colors = ['orange', 'purple', 'red', 'turquoise', 'green'];

  function makeDots() {
    let dots = [];
    let color = colors[wordStrength - 1];
    for (let i = 0; i < 5; i++) {
      if (i < wordStrength) {
        dots.push(<SFProgressCircle key={i} color={color} isFilled />);
      } else {
        dots.push(<SFProgressCircle key={i} />);
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

SFProgressCircles.propTypes = {
  wordStrength: PropTypes.number
};

export function SFProgressCircle({ color, isFilled }) {
  return (
    <div className="SFProgressCircle">
      <style jsx>{`
        .SFProgressCircle {
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

SFProgressCircle.propTypes = {
  color: PropTypes.string,
  isFilled: PropTypes.bool
};
