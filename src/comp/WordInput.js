import React from 'react';
import PropTypes from 'prop-types';
import WordInputField from './WordInputField';

export default function WordInput({
  spanishWord = '',
  spanishPhrase = '',
  handleSuccess,
  isCorrect
}) {
  const [front, end] = spanishPhrase.split('*');
  return (
    <div className="sf-WordInput">
      <div className="sf-WordInput--article">
        <span>{front}</span>
        {isCorrect ? (
          <span className="sf-WordInput--correctWord">{spanishWord}</span>
        ) : (
          <WordInputField
            spanishWord={spanishWord}
            handleSuccess={handleSuccess}
          />
        )}
        <span>{end}</span>
      </div>
      <style jsx>{`
        .sf-WordInput {
          font-size: 1.5rem;
          display: inline-block;
          color: green;
        }
        .sf-WordInput--correctWord {
          color: lightgreen;
          border-bottom-width: 2px;
          border-bottom-style: solid;
        }
        .sf-WordInput--article {
          display: inline-block;
          margin-right: 5px;
        }
      `}</style>
    </div>
  );
}

WordInput.propTypes = {
  spanishWord: PropTypes.string,
  spanishPhrase: PropTypes.string,
  handleSuccess: PropTypes.func,
  isCorrect: PropTypes.bool
};
