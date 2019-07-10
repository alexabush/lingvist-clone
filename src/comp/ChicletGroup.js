import React from 'react';
import SFChiclet from './SFChiclet';

export default class ChicletGroup extends React.PureComponent {
  state = {
    isSelected1: true,
    isSelected2: false,
    isSelected3: false
  };

  handleClick1 = () => {
    this.setState(state => {
      return { isSelected1: !state.isSelected1 };
    });
  };
  handleClick2 = () => {
    this.setState(state => {
      return { isSelected2: !state.isSelected2 };
    });
  };

  render() {
    return (
      <div>
        <SFChiclet
          onClick={this.handleClick1}
          selected={this.state.isSelected1}
        >
          10
        </SFChiclet>
        <SFChiclet
          onClick={this.handleClick2}
          selected={this.state.isSelected2}
        >
          9
        </SFChiclet>
        <SFChiclet onClick={this.handleClick} outline>
          8
        </SFChiclet>
      </div>
    );
  }
}
