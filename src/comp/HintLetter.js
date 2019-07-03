import React from 'react';
import T from 'prop-types';

export default function HintLetter({ letter, isCorrect }) {
  return (
    <span
      className={`sf-HintLetter ${
        isCorrect ? 'sf-HintLetter--correct' : 'sf-HintLetter--incorrect'
      }`}
    >
      {letter}
      <style jsx>{`
        .sf-HintLetter--correct {
          color: green;
        }
        .sf-HintLetter--incorrect {
          color: red;
        }
      `}</style>
    </span>
  );
}

HintLetter.T = {
  letter: T.string,
  isCorrect: T.bool
};
