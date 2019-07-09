import React from 'react';
import T from 'prop-types';

export default class SFCard extends React.PureComponent {
  static propTypes = {
    children: T.any
  };

  render() {
    return <div>This is a card</div>;
  }
}
