import React from 'react';
import PropTypes from 'prop-types';
import { polar2 } from '../colors';

export default class WordInputField extends React.Component {
  state = { value: '', giveHelp: false };
  handleChange = e => {
    this.setState({ value: e.target.value });
  };
  handleSubmit = e => {
    const { spanishWord = '', handleSuccess } = this.props;
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
    const { spanishWord = '' } = this.props;
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
