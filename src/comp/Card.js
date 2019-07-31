import React from 'react';
import PropTypes from 'prop-types';

export default class Card extends React.PureComponent {
  static propTypes = {
    children: PropTypes.any
  };

  render() {
    return <div>This is a card</div>;
  }
}
