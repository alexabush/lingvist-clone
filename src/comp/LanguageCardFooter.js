import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tooltip from './Tooltip';
import LetterPicker from './LetterPicker';

export default function LanguageCardFooter({ wordDetails, description }) {
  const [showAdditionalLetters, setShowAdditionalLetters] = useState(false);
  const toggleShowAdditionalLetters = () => {
    setShowAdditionalLetters(!showAdditionalLetters);
  };
  return (
    <div className="language-card-footer">
      <div className="language-card-footer--word-data-container">
        <Tooltip display={wordDetails} direction="top">
          Details
        </Tooltip>
        <Tooltip display="Noun" direction="top">
          {description}
        </Tooltip>
      </div>

      <div className="language-card-footer--letter-picker-container">
        <div
          className="language-card-footer--toggle-container"
          onClick={toggleShowAdditionalLetters}
        >
          En
        </div>
        {showAdditionalLetters && (
          <LetterPicker
            letters={[
              { letter: 'a', num: 1 },
              { letter: 'e', num: 2 },
              { letter: 'i', num: 3 },
              { letter: 'o', num: 4 },
              { letter: 'u', num: 5 },
              { letter: 'u', num: 6 },
              { letter: 'n', num: 7 }
            ]}
          />
        )}
      </div>

      <style jsx>{`
        .language-card-footer {
          display: flex;
          justify-content: space-between;
          padding: 10px 15px;
        }
        .language-card-footer--word-data-container {
          display: flex;
        }
      `}</style>
    </div>
  );
}

LanguageCardFooter.propTypes = {
  wordDetails: PropTypes.string,
  description: PropTypes.string
};
