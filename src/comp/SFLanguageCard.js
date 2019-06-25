import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import SFProgressCircles from './SFProgressCircles';
import SFLetterPicker from './SFLetterPicker';
import SFTooltip from './SFTooltip';
import { polar1, polar2 } from '../colors';

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

function SFLanguageCardHeader({ englishPhrase, wordStrength }) {
  const [isShow, setIsShow] = useState(false);
  const toggleShow = () => {
    setIsShow(!isShow);
  };
  return (
    <div className="SFLanguageCardHeader">
      <p className={`header ${isShow || 'hideHeader'}`}>
        {englishPhrase && englishPhrase}
      </p>
      <Link href="/levels">
        <div>
          <SFProgressInfo wordStrength={wordStrength} />
        </div>
      </Link>
      <ToggleEnglishPhrase isShow={isShow} toggleShow={toggleShow} />
      <style jsx>{`
        .SFLanguageCardHeader {
          display: flex;
          justify-content: space-between;
          padding: 5px 5px 0px 25px;
        }
        .header {
          position: absolute;
          top: -80px;
          transition: all 500ms;
          font-size: 1rem;
        }
        .hideHeader {
          transform: translateY(20px);
          opacity: 0;
        }
      `}</style>
    </div>
  );
}

SFLanguageCardHeader.propTypes = {
  englishPhrase: PropTypes.string,
  wordStrength: PropTypes.number
};

function SFProgressInfo({ wordStrength }) {
  return (
    <div className="SFLanguageCard--ProgressInfo-container">
      <div className="SFLanguageCard--ProgressCircles-container">
        <SFProgressCircles wordStrength={wordStrength} />
      </div>
      <div className="SFLanguageCard--ProgressInfo">
        {wordStrength === 1 && 'New Word '}
        <span className="SFLanguageCard--ProgressInfo--text">
          {wordStrength !== 1 && 'This word needs more practice. '}
          Find out more
        </span>
      </div>
      <style jsx>{`
        .SFLanguageCard--ProgressInfo-container {
          display: flex;
          align-items: center;
          border-radius: 5px;
        }
        .SFLanguageCard--ProgressInfo-container:hover {
          cursor: pointer;
          background: ${polar2};
          transition: background 300ms, opacity 300ms;
        }
        .SFLanguageCard--ProgressInfo-container:hover
          .SFLanguageCard--ProgressInfo--text {
          opacity: 1;
        }
        .SFLanguageCard--ProgressInfo {
          font-size: 0.8rem;
          padding-left: 10px;
          padding-right: 3px;
        }
        .SFLanguageCard--ProgressInfo--text {
          opacity: 0;
        }
        .SFLanguageCard--ProgressInfo span {
          font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        }
      `}</style>
    </div>
  );
}

SFProgressInfo.propTypes = {
  wordStrength: PropTypes.number
};

function ToggleEnglishPhrase({ isShow, toggleShow }) {
  const handleClick = () => {
    toggleShow();
  };
  return (
    <div
      className={`ToggleEnglishPhrase ${isShow && 'ToggleEnglishPhrase--flip'}`}
      onClick={handleClick}
    >
      ^
      <style jsx>{`
        .ToggleEnglishPhrase {
          transition: transform 300ms;
        }
        .ToggleEnglishPhrase--flip {
          transform: rotate(180deg);
        }
      `}</style>
    </div>
  );
}

ToggleEnglishPhrase.propTypes = {
  isShow: PropTypes.bool,
  toggleShow: PropTypes.func
};

function WordInput({ spanishWord = '', spanishPhrase = '', handleSuccess }) {
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

class WordInputField extends React.Component {
  state = { value: '', giveHelp: false };
  handleChange = e => {
    this.setState({ value: e.target.value });
  };
  handleSubmit = e => {
    const { spanishWord, handleSuccess } = this.props;
    const { value } = this.state;
    e.preventDefault();
    if (value !== spanishWord) {
      this.setState({ value: '', giveHelp: true });
    } else {
      handleSuccess();
    }
  };
  generateLetters = spanishWord => {
    return spanishWord.split('').map((letter, i) => {
      return (
        <span key={i} className="spans">
          {letter}
        </span>
      );
    });
  };

  render() {
    const { value, giveHelp } = this.state;
    const { spanishWord } = this.props;
    const letterEls = this.generateLetters(spanishWord);
    return (
      <div className="WordInputField">
        <form onSubmit={this.handleSubmit}>
          {giveHelp && (
            <span className="WordInputField--letter-container">
              {letterEls}
            </span>
          )}
          <input type="text" value={value} onChange={this.handleChange} />
        </form>
        <style jsx>{`
          .WordInputField {
            display: inline-block;
            font-family: monospace;
          }
          .WordInputField--letter-container {
            position: absolute;
          }
          input {
            border: none;
            background: ${polar2};
            width: calc(${spanishWord.length} * 0.5rem);
          }
          input:focus {
            outline: none;
          }
          .WordInputField span {
            opacity: 0.5;
            pointer-events: none;
          }
        `}</style>
      </div>
    );
  }
}

WordInputField.propTypes = {
  spanishWord: PropTypes.string,
  handleSuccess: PropTypes.func,
  value: PropTypes.string,
  giveHelp: PropTypes.bool
};

function SFLanguageCardFooter({ wordDetails, description }) {
  const [showAdditionalLetters, setShowAdditionalLetters] = useState(false);
  const toggleShowAdditionalLetters = () => {
    setShowAdditionalLetters(!showAdditionalLetters);
  };
  return (
    <div className="SFLanguageCardFooter">
      <div className="SFLanguageCardFooter--wordData-container">
        <SFTooltip display={wordDetails} direction="top" width={130}>
          P
        </SFTooltip>
        <SFTooltip display="Noun" direction="top" width={40}>
          {description}
        </SFTooltip>
      </div>

      <div>
        <div onClick={toggleShowAdditionalLetters}>En</div>
        <ToggleWrapper isShow={showAdditionalLetters}>
          <SFLetterPicker />
        </ToggleWrapper>
      </div>

      <style jsx>{`
        .SFLanguageCardFooter {
          display: flex;
          justify-content: space-between;
          padding: 10px 15px;
        }
        .SFLanguageCardFooter--wordData-container {
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

function ToggleWrapper({ isShow, children }) {
  return (
    <div className="ToggleWrapper">
      {children}
      <style jsx>{`
        display: ${isShow ? 'flex' : 'none'};
      `}</style>
    </div>
  );
}

ToggleWrapper.propTypes = {
  isShow: PropTypes.bool,
  children: PropTypes.node
};
