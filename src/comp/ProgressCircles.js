import React from 'react';
import PropTypes from 'prop-types';

export default function ProgressCircles({ wordStrength }) {
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
    <div className="sf-progress-circles">
      {makeDots()}
      <style jsx>{`
        .sf-progress-circles {
          display: flex;
          align-items: center;
        }
      `}</style>
    </div>
  );
}

ProgressCircles.propTypes = {
  wordStrength: PropTypes.number
};

export function ProgressCircle({ color, isFilled }) {
  return (
    <div className="sf-progress-circle">
      <style jsx>{`
        .sf-progress-circle {
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

ProgressCircle.propTypes = {
  color: PropTypes.string,
  isFilled: PropTypes.bool
};
