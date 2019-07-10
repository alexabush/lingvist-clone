import React from 'react';
import PropTypes from 'prop-types';
import { frost3, frost4 } from '../colors';

export default function LetterPicker({ letters }) {
  return (
    <div className="letter-picker">
      {letters.map(({ letter, num }, i) => {
        return <AdditionalLetter key={i} letter={letter} num={num} />;
      })}
      <style jsx>{`
        .letter-picker {
          display: flex;
          justify-content: space-between;
          width: 560px;
          height: 75px;
          padding: 0 150px;
          box-sizing: border-box;
          background: ${frost4};
          border-radius: 5px;
          position: absolute;
          left: 0px;
          top: calc(100% + 25px);
          z-index: 1;
        }
        .letter-picker::after {
          content: '';
          border-style: solid;
          border-width: 0px 14px 16px 14px;
          border-color: transparent transparent ${frost4} transparent;
          position: absolute;
          top: -15px;
          right: calc(25px);
        }
      `}</style>
    </div>
  );
}

LetterPicker.propTypes = {
  letters: PropTypes.arrayOf(
    PropTypes.shape({
      letter: PropTypes.string,
      num: PropTypes.number
    })
  )
};

export function AdditionalLetter({ letter, num }) {
  return (
    <div className="additional-letter">
      <div className="additional-letter--letter">{letter}</div>
      <div className="additional-letter--number">{num}</div>
      <style jsx>{`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;
        border-radius: 5px;

        .additional-letter {
          padding: 5px 15px;
          align-self: center;
        }
        .additional-letter:hover {
          background: ${frost3};
        }
        .additional-letter--letter {
          font-size: 1.25rem;
          margin-bottom: 10px;
        }
        .additional-letter--number {
          font-size: 0.5rem;
        }
      `}</style>
    </div>
  );
}

AdditionalLetter.propTypes = {
  letter: PropTypes.string,
  num: PropTypes.number
};
