import React from 'react';
import PropTypes from 'prop-types';
import WordInputField from './WordInputField';

export default function WordInput({
  spanishWord = '',
  spanishPhrase = '',
  handleSuccess
}) {
  const [front, end] = spanishPhrase.split('*');
  return (
    <div className="WordInput">
      <div className="article">
        <span>{front}</span>
        <WordInputField
          spanishWord={spanishWord}
          handleSuccess={handleSuccess}
        />
        <span>{end}</span>
      </div>
      <style jsx>{`
        .WordInput {
          display: inline-block;
          color: green;
        }
        .article {
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
  handleSuccess: PropTypes.func
};
