import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  handleChange = e => {
    this.props.update(e.target.value, this.props.idx);
  };

  render() {
    return (
      <span className="madlib-input--container">
        <input
          type="text"
          value={this.props.value}
          onChange={this.handleChange}
        />
        <style jsx>{`
          .madlib-input--container input {
            font-size: 1.5rem;
            padding: 5px;
            width: 40px;
            background: lightgrey;
            border: none;
            outline: none;
            margin: 0 5px;
          }
        `}</style>
      </span>
    );
  }
}

const Text = ({ children }) => (
  <span>
    {children}
    <style jsx>{``}</style>
  </span>
);

class Madlib extends Component {
  state = { values: [] };
  changeUpdate = () => {
    let processedVals = this.processValues(this.state.values);
    this.props.onChange(processedVals);
    console.log(processedVals);
  };
  processValues = values => {
    return values.filter(val => {
      return typeof val !== 'undefined';
    });
  };
  renderChildren = () => {
    return React.Children.map(this.props.children, (child, idx) => {
      if (child.type.name === 'Input') {
        return React.cloneElement(child, {
          update: (val, valIdx) => {
            const valuesCopy = this.state.values;
            valuesCopy[valIdx] = val;
            this.setState({ values: valuesCopy });
            this.changeUpdate();
          },
          value: this.state.values[this.state.count],
          idx
        });
      } else {
        return child;
      }
    });
  };
  render() {
    return (
      <div>
        {this.renderChildren()}
        <style jsx>{``}</style>
      </div>
    );
  }
}

export default Madlib;
Madlib.Input = Input;
Madlib.Text = Text;
