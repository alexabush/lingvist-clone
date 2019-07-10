import React from 'react';
import PropTypes from 'prop-types';
import { polar2 } from '../colors';
import HintLetter from './HintLetter';
import { compareAttemptWithCorrectWord } from '../../lib';

export default class WordInputField extends React.Component {
  state = { value: '', prevAttempt: {}, giveHelp: false };
  handleChange = e => {
    this.setState({ value: e.target.value });
  };
  handleSubmit = e => {
    const { foreignWord = '', handleSuccess } = this.props;
    const { value } = this.state;
    e.preventDefault();
    if (value !== foreignWord) {
      const correctLetters = compareAttemptWithCorrectWord(foreignWord, value);
      this.setState({ value: '', prevAttempt: correctLetters, giveHelp: true });
    } else {
      this.setState({ value: '', prevAttempt: {} });
      handleSuccess();
    }
  };

  generateLetters = (foreignWord, prevAttempt) => {
    return foreignWord.split('').map((letter, i) => {
      return (
        <HintLetter key={i} letter={letter} isCorrect={!!prevAttempt[i]} />
      );
    });
  };

  render() {
    const { value, prevAttempt, giveHelp } = this.state;
    const { foreignWord = '' } = this.props;
    return (
      <div className="word-input-field">
        <form onSubmit={this.handleSubmit}>
          {giveHelp && (
            <span className="word-input-field--letter-container">
              {this.generateLetters(foreignWord, prevAttempt)}
            </span>
          )}
          <input
            className="word-input-field--input"
            type="text"
            value={value}
            onChange={this.handleChange}
          />
        </form>
        <style jsx>{`
          .word-input-field {
            display: inline-block;
            font-family: monospace;
          }
          .word-input-field--letter-container,
          .word-input-field--input {
            font-family: monospace;
            font-size: 1.5rem;
            padding: 5px;
          }
          .word-input-field--letter-container {
            position: absolute;
          }
          .word-input-field--input {
            color: green;
            outline: none;
            border: none;
            background: ${polar2};
            box-sizing: border-box;
            width: calc(${foreignWord.length} * 1rem + 5px);
          }
          word-input-field--input:focus {
            outline: none;
          }
          .word-input-field span {
            opacity: 0.5;
            pointer-events: none;
          }
        `}</style>
      </div>
    );
  }
}

WordInputField.propTypes = {
  foreignWord: PropTypes.string,
  handleSuccess: PropTypes.func,
  value: PropTypes.string,
  giveHelp: PropTypes.bool
};
