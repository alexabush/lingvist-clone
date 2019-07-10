import React from 'react';
import PropTypes from 'prop-types';
import WordInput from './WordInput';
import LanguageCardHeader from './LanguageCardHeader';
import LanguageCardFooter from './LanguageCardFooter';
import { polar1 } from '../colors';

export default function LanguageCard({
  foreignWord,
  foreignPhrase,
  nativePhrase,
  nativeWord,
  wordStrength,
  wordDetails,
  partOfSpeech,
  handleSuccess,
  isCorrect
}) {
  return (
    <div className="language-card">
      <LanguageCardHeader
        nativePhrase={nativePhrase}
        wordStrength={wordStrength}
      />
      <WordInput
        foreignWord={foreignWord}
        foreignPhrase={foreignPhrase}
        nativeWord={nativeWord}
        handleSuccess={handleSuccess}
        isCorrect={isCorrect}
      />
      <LanguageCardFooter
        wordDetails={wordDetails}
        description="^"
        partOfSpeech={partOfSpeech}
      />
      <style jsx>{`
        .language-card {
          position: relative;
          background: ${polar1};
          width: 560px;
          height: 150px;
          box-shadow: 0 8px 6px -6px black;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-sizing: border-box;
          padding: 0px 10px;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}

LanguageCard.propTypes = {
  foreignWord: PropTypes.string,
  foreignPhrase: PropTypes.string,
  nativePhrase: PropTypes.string,
  nativeWord: PropTypes.arrayOf(PropTypes.string),
  wordStrength: PropTypes.number,
  wordDetails: PropTypes.string,
  partOfSpeech: PropTypes.string,
  handleSuccess: PropTypes.func,
  isCorrect: PropTypes.bool
};
