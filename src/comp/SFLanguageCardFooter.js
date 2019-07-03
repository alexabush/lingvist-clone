import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SFTooltip from './SFTooltip';
import SFLetterPicker from './SFLetterPicker';

export default function SFLanguageCardFooter({ wordDetails, description }) {
  const [showAdditionalLetters, setShowAdditionalLetters] = useState(false);
  const toggleShowAdditionalLetters = () => {
    setShowAdditionalLetters(!showAdditionalLetters);
  };
  return (
    <div className="SFLanguageCardFooter">
      <div className="SFLanguageCardFooter--wordDataContainer">
        <SFTooltip display={wordDetails} direction="top">
          P
        </SFTooltip>
        <SFTooltip display="Noun" direction="top">
          {description}
        </SFTooltip>
      </div>

      <div className="SFLanguageCardFooter--LetterPickerContainer">
        <div
          className="SFLanguageCardFooter--toggleContainer"
          onClick={toggleShowAdditionalLetters}
        >
          En
        </div>
        {showAdditionalLetters && (
          <SFLetterPicker
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
        .SFLanguageCardFooter {
          display: flex;
          justify-content: space-between;
          padding: 10px 15px;
        }
        .SFLanguageCardFooter--wordDataContainer {
          display: flex;
        }
      `}</style>
    </div>
  );
}

SFLanguageCardFooter.propTypes = {
  wordDetails: PropTypes.string,
  description: PropTypes.string
};
