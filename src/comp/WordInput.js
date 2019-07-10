import React from 'react';
import PropTypes from 'prop-types';
import WordInputField from './WordInputField';

export default function WordInput({
  foreignWord = '',
  foreignPhrase = '',
  handleSuccess,
  isCorrect
}) {
  const [front, end] = foreignPhrase.split('*');
  return (
    <div className="word-input">
      <div className="word-input--article">
        <span>{front}</span>
        {isCorrect ? (
          <span className="word-input--correct-word">{foreignWord}</span>
        ) : (
          <WordInputField
            foreignWord={foreignWord}
            handleSuccess={handleSuccess}
          />
        )}
        <span>{end}</span>
      </div>
      <style jsx>{`
        .word-input {
          font-size: 1.5rem;
          display: inline-block;
          color: green;
        }
        .word-input--correct-word {
          color: lightgreen;
          border-bottom-width: 2px;
          border-bottom-style: solid;
        }
        .word-input--article {
          display: inline-block;
          margin-right: 5px;
        }
      `}</style>
    </div>
  );
}

WordInput.propTypes = {
  foreignWord: PropTypes.string,
  foreignPhrase: PropTypes.string,
  handleSuccess: PropTypes.func,
  isCorrect: PropTypes.bool
};
