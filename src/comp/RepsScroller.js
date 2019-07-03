import React from 'react';
import T from 'prop-types';
import SFScroller from './SFScroller';

// TODO
// should take values and modifiers as props
// should return data out
export default class RepsScroller extends React.PureComponent {
  state = {
    oneToTen: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    mod: {
      '8': (
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: 4,
            border: '1px dotted black'
          }}
        />
      ),
      '10': (
        <div
          style={{ width: 6, height: 6, borderRadius: 3, background: 'black' }}
        />
      )
    }
  };
  onSlideTester = () => {
    console.log('on slide');
  };

  updateModifier = num => {
    this.setState(state => {
      const newMod = Object.keys(state.mod).reduce((acc, key) => {
        if (state.mod[key].props.style.background === 'black') return acc;
        acc[key] = state.mod[key];
        return acc;
      }, {});
      newMod[num] = (
        <div
          style={{ width: 6, height: 6, borderRadius: 3, background: 'black' }}
        />
      );
      return { mod: newMod };
    });
  };

  render() {
    const { oneToTen, mod } = this.state;
    return (
      <SFScroller
        values={oneToTen}
        modifiers={mod}
        onChange={this.updateModifier}
        onSlide={this.onSlideTester}
      />
    );
  }
}

RepsScroller.T = {};
