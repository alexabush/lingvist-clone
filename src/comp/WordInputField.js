import React from 'react';
import PropTypes from 'prop-types';
import { polar2 } from '../colors';
import HintLetter from './HintLetter';

export default class WordInputField extends React.Component {
  state = { value: '', prevAttempt: {}, giveHelp: false };
  handleChange = e => {
    this.setState({ value: e.target.value });
  };
  handleSubmit = e => {
    const { spanishWord = '', handleSuccess } = this.props;
    const { value } = this.state;
    e.preventDefault();
    if (value !== spanishWord) {
      const correctLetters = this.compareAttemptWithCorrectWord(
        spanishWord,
        value
      );
      this.setState({ value: '', prevAttempt: correctLetters, giveHelp: true });
    } else {
      this.setState({ value: '', prevAttempt: {} });
      handleSuccess();
    }
  };
  compareAttemptWithCorrectWord = (correctWord, attempt) => {
    correctWord = correctWord.split('');
    const correctLetters = {};
    const freq = {};
    for (let i = 0; i < correctWord.length; i++) {
      if (freq[correctWord[i]]) {
        freq[correctWord[i]].push(i);
      } else {
        freq[correctWord[i]] = [i];
      }
    }
    for (let i = 0; i < attempt.length; i++) {
      const letter = attempt[i];
      if (freq[letter]) {
        const correctIdx = freq[letter].shift();
        correctLetters[correctIdx] = letter;
      }
    }
    return correctLetters;
  };

  generateLetters = (spanishWord, prevAttempt) => {
    return spanishWord.split('').map((letter, i) => {
      return (
        <HintLetter key={i} letter={letter} isCorrect={!!prevAttempt[i]} />
      );
    });
  };

  render() {
    const { value, prevAttempt, giveHelp } = this.state;
    const { spanishWord = '' } = this.props;
    return (
      <div className="sf-WordInputField">
        <form onSubmit={this.handleSubmit}>
          {giveHelp && (
            <span className="sf-WordInputField--letterContainer">
              {this.generateLetters(spanishWord, prevAttempt)}
            </span>
          )}
          <input
            className="sf-WordInputField--input"
            type="text"
            value={value}
            onChange={this.handleChange}
          />
        </form>
        <style jsx>{`
          .sf-WordInputField {
            display: inline-block;
            font-family: monospace;
          }
          .sf-WordInputField--letterContainer,
          .sf-WordInputField--input {
            font-family: monospace;
            font-size: 1.5rem;
            padding: 5px;
          }
          .sf-WordInputField--letterContainer {
            position: absolute;
          }
          .sf-WordInputField--input {
            color: green;
            outline: none;
            border: none;
            background: ${polar2};
            box-sizing: border-box;
            width: calc(${spanishWord.length} * 1rem + 5px);
          }
          sf-WordInputField--input:focus {
            outline: none;
          }
          .sf-WordInputField span {
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
