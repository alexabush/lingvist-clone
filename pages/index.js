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

class ExampleScroller extends R.Component {
  state = {
    oneToTen: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    mod: {
      '8': <div style={{ width: 8, height: 8, borderRadius: 4, border: '1px dotted black' }} />,
      '10': <div style={{ width: 6, height: 6, borderRadius: 3, background: 'black' }} />,
    },
  };
  onSlideTester = () => {
    console.log('on slide');
  };

  updateModifier = num => {
    this.setState(state => {
      let newMod = Object.keys(state.mod).reduce((acc, key) => {
        if (state.mod[key].props.style.background === 'black') return acc;
        acc[key] = state.mod[key];
        return acc;
      }, {});
      newMod[num] = <div style={{ width: 6, height: 6, borderRadius: 3, background: 'black' }} />;
      return { mod: newMod };
    });
  };

  render() {
    let { oneToTen, mod, options } = this.state;
    return (
      <div style={{ width: '500px' }}>
        <Scroller values={oneToTen} modifiers={mod} onChange={this.updateModifier} onSlide={this.onSlideTester} />
      </div>
    );
  }
}

export default function DisplayAll() {
  return (
    <div>
      <div style={{ margin: '30px' }}>
        <h2>Example Scroller</h2>
        <ExampleScroller />
      </div>
      <div style={{ margin: '30px' }}>
        <h2>Example Chiclets</h2>
        <ExampleChiclets />
      </div>
      <div style={{ margin: '30px' }}>
        <h2>Card</h2>
        <ExerciseCard />
      </div>
    </div>
  );
}

class ExerciseCard extends R.Component {
  state = { isExpanded: true };

  toggleExpand = () => {
    this.setState(state => {
      return {
        isExpanded: !state.isExpanded,
      };
    });
  };

  render() {
    return (
      <Card isExpanded={this.state.isExpanded}>
        <div>
          <div onClick={this.toggleExpand}>Toggle</div>
          <ExampleChiclets />
        </div>
        {this.state.isExpanded && <WorkoutData />}
        <ExampleScroller />
      </Card>
    );
  }
}

function WorkoutData() {
  return (
    <div style={{ display: 'flex', 'flex-direction': 'column', 'justify-content': 'center', 'align-items': 'center' }}>
      <p>Extra Information Goes Here</p>
      <p>Equipment Selection w/Weight Calculator</p>
      <p>Variation Selection</p>
      <p>History</p>
      <p>Rest Timer Config</p>
      <p>Difficulty</p>
    </div>
  );
}
