import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  state = { value: '' };
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <input
        type="text"
        value={this.state.value}
        onChange={this.handleChange}
      />
    );
  }
}

const Text = ({ children }) => <div>{children}</div>;

// would need to pass state from chldren back up
// I might need to use React.children for this to work
class Madlib extends Component {
  handleSubmit = event => {
    console.log('submit');
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.props.children}
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Madlib;
Madlib.Input = Input;
Madlib.Text = Text;
