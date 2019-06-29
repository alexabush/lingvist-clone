import React from 'react';
import PropTypes from 'prop-types';
import WordInput from './WordInput';
import SFLanguageCardHeader from './SFLanguageCardHeader';
import SFLanguageCardFooter from './SFLanguageCardFooter';
import { polar1 } from '../colors';

export default function SFLanguageCard({
  card: {
    spanishWord,
    spanishPhrase,
    englishPhrase,
    englishWord,
    wordStrength,
    wordDetails,
    partOfSpeech
  },
  handleSuccess
}) {
  return (
    <div className="SFLanguageCard">
      <SFLanguageCardHeader
        englishPhrase={englishPhrase}
        wordStrength={wordStrength}
      />
      <WordInput
        spanishWord={spanishWord}
        spanishPhrase={spanishPhrase}
        englishWord={englishWord}
        handleSuccess={handleSuccess}
      />
      <SFLanguageCardFooter
        wordDetails={wordDetails}
        description="^"
        partOfSpeech={partOfSpeech}
      />
      <style jsx>{`
        .SFLanguageCard {
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

SFLanguageCard.propTypes = {
  card: PropTypes.shape({
    spanishWord: PropTypes.string,
    spanishPhrase: PropTypes.string,
    englishPhrase: PropTypes.string,
    englishWord: PropTypes.arrayOf(PropTypes.string),
    wordStrength: PropTypes.number,
    wordDetails: PropTypes.string,
    partOfSpeech: PropTypes.string
  }),
  handleSuccess: PropTypes.func
};
