import Card from '../src/comp/Card';
import Scroller from '../src/comp/Scroller';
import Chiclet from '../src/comp/Chiclet';
import R from 'react';
class ExampleChiclets extends R.Component {
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

function onSlideTester() {
  console.log('on slide');
}
const oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let mod = {
  '8': <div style={{ width: 8, height: 8, borderRadius: 4, border: '1px dotted black' }} />,
  '10': <div style={{ width: 6, height: 6, borderRadius: 3, background: 'black' }} />,
};

const updateModifier = num => {
  mod[num] = <div style={{ width: 6, height: 6, borderRadius: 3, background: 'black' }} />;
  console.log(mod);
};

class ExampleScroller extends R.Component {
  render() {
    return (
      <div style={{ width: '700px' }}>
        <Scroller values={oneToTen} modifiers={mod} onChange={updateModifier} onSlide={onSlideTester} />
      </div>
    );
  }
}

export default function DisplayAll() {
  return (
    <div>
      <ExampleScroller />
      <ExampleChiclets />
    </div>
  );
}
