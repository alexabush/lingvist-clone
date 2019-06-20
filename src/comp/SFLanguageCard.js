import React, { useState } from 'react';
import Link from 'next/link';
import SFProgressCircles from './SFProgressCircles';
import SFTooltip from './SFTooltip';
import { frost3, frost4, polar1, polar2 } from '../colors';

export default function SFLanguageCard({ card = {} }) {
  const { spanishWord, spanishPhrase, englishPhrase, englishWord, wordStrength, wordDetails, partOfSpeech } = card;
  return (
    <div className="SFLanguageCard">
      <SFLanguageCardHeader englishPhrase={englishPhrase} wordStrength={wordStrength} />
      <WordInput spanishWord={spanishWord} spanishPhrase={spanishPhrase} englishWord={englishWord} />
      <SFLanguageCardFooter wordDetails={wordDetails} description="^" partOfSpeech={partOfSpeech} />
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

function SFLanguageCardHeader({ englishPhrase, wordStrength }) {
  const [isShow, setIsShow] = useState(false);
  const toggleShow = () => {
    setIsShow(!isShow);
  };
  return (
    <div className="SFLanguageCardHeader">
      <p className={`header ${isShow || 'hideHeader'}`}>{englishPhrase && englishPhrase}</p>
      <Link href="/levels">
        <SFProgressInfo wordStrength={wordStrength} />
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
        .SFLanguageCard--ProgressInfo-container:hover .SFLanguageCard--ProgressInfo--text {
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

function ToggleEnglishPhrase({ toggleShow }) {
  return (
    <div className="ToggleEnglishPhrase" onClick={toggleShow}>
      ^<style jsx>{``}</style>
    </div>
  );
}

function WordInput({ spanishWord = '', spanishPhrase = '' }) {
  let [front, end] = spanishPhrase.split('*');
  return (
    <div className="WordInput">
      <div className="article">
        <span>{front}</span>
        <WordInputField spanishWord={spanishWord} />
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

class WordInputField extends React.Component {
  state = { value: '', giveHelp: false };
  handleChange = e => {
    this.setState({ value: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.setState({ value: '', giveHelp: true });
  };
  generateLetters = spanishWord => {
    let letterEls = [];
    for (let letter of spanishWord) {
      letterEls.push(<span className="spans">{letter}</span>);
    }
    return letterEls;
  };

  render() {
    let { value, giveHelp } = this.state;
    let { spanishWord } = this.props;
    let letterEls = this.generateLetters(spanishWord);
    return (
      <div className="WordInputField">
        <form onSubmit={this.handleSubmit}>
          {giveHelp && <span className="WordInputField--letter-container">{letterEls}</span>}
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
        <AdditionalLetterPicker isShow={showAdditionalLetters} />
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

function AdditionalLetterPicker({ isShow = false }) {
  return (
    <div className="AdditionalLetterPicker">
      <AdditionalLetter letter={'a'} num={1} />
      <AdditionalLetter letter={'e'} num={2} />
      <AdditionalLetter letter={'i'} num={3} />
      <AdditionalLetter letter={'o'} num={4} />
      <AdditionalLetter letter={'u'} num={5} />
      <AdditionalLetter letter={'u'} num={6} />
      <AdditionalLetter letter={'n'} num={7} />
      <style jsx>{`
        .AdditionalLetterPicker {
          display: ${isShow ? 'flex' : 'none'};
          justify-content: space-between;
          width: 560px;
          height: 75px;
          padding: 0 80px;
          box-sizing: border-box;
          background: ${frost4};
          border-radius: 5px;
          position: absolute;
          left: 0px;
          top: calc(100% + 25px);
          z-index: 1;
        }
        .AdditionalLetterPicker::after {
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
