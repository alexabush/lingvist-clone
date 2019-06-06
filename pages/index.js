import Card from '../src/comp/Card';
import Chiclet from '../src/comp/Chiclet';
import R from 'react';
export default class ExampleChiclets extends R.Component {
  state = {
    isSelected1: true,
    isSelected2: false,
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
        <Chiclet onClick={this.handleClick1} selected={this.state.isSelected1}>
          10
        </Chiclet>
        <Chiclet onClick={this.handleClick2} selected={this.state.isSelected2}>
          9
        </Chiclet>
        <Chiclet onClick={this.handleClick} outline>
          8
        </Chiclet>
      </div>
    );
  }
}
