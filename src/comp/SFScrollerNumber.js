import React from 'react';
import PropTypes from 'prop-types';

export default function SFScrollerNumber({ number, modifier, handleClick }) {
  return (
    <div className="sf-scroller--number" onClick={() => handleClick(number)}>
      {number}
      <div>{modifier}</div>
      <style jsx>{`
        .sf-scroller--number {
          padding: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 50px;
          height: 50px;
          font-size: 32px;
          position: relative;
        }
      `}</style>
    </div>
  );
}

SFScrollerNumber.propTypes = {
  number: PropTypes.number,
  modifier: PropTypes.element,
  handleClick: PropTypes.func
};
