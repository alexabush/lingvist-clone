import React, { Component } from 'react';
import Router from 'next/router';
import PropTypes from 'prop-types';

class Input extends Component {
  handleChange = e => {
    this.props.update(e.target.value, this.props.idx);
  };

  render() {
    return (
      <input
        type="text"
        value={this.props.value}
        onChange={this.handleChange}
      />
    );
  }
}

const Text = ({ children }) => <div>{children}</div>;

class Madlib extends Component {
  state = { values: [] };
  handleNext = () => {
    let processedVals = this.processValues(this.state.values);
    console.log(processedVals);
    Router.push({
      pathname: '/fitness'
    });
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
          },
          value: this.state.values[this.state.count],
          idx
        });
      } else {
        return <div>{child}</div>;
      }
    });
  };
  render() {
    return (
      <div>
        {this.renderChildren()}
        <button onClick={this.handleNext}>Next</button>
      </div>
    );
  }
}

export default Madlib;
Madlib.Input = Input;
Madlib.Text = Text;
