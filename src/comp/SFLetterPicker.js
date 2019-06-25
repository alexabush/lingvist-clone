import React from 'react';
import PropTypes from 'prop-types';
import { frost3, frost4 } from '../colors';

export default function SFLetterPicker() {
  return (
    <div className="SFLetterPicker">
      <AdditionalLetter letter={'a'} num={1} />
      <AdditionalLetter letter={'e'} num={2} />
      <AdditionalLetter letter={'i'} num={3} />
      <AdditionalLetter letter={'o'} num={4} />
      <AdditionalLetter letter={'u'} num={5} />
      <AdditionalLetter letter={'u'} num={6} />
      <AdditionalLetter letter={'n'} num={7} />
      <style jsx>{`
        .SFLetterPicker {
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
        .SFLetterPicker::after {
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

function AdditionalLetter({ letter, num }) {
  return (
    <div className="AdditionalLetter">
      <div className="AdditionalLetter--letter">{letter}</div>
      <div className="AdditionalLetter--number">{num}</div>
      <style jsx>{`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;
        border-radius: 5px;

        .AdditionalLetter {
          padding: 5px 15px;
          align-self: center;
        }
        .AdditionalLetter:hover {
          background: ${frost3};
        }
        .AdditionalLetter--letter {
          font-size: 1.25rem;
          margin-bottom: 10px;
        }
        .AdditionalLetter--number {
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
