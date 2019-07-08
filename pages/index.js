import SFCard from '../src/comp/SFCard';
import SFScroller from '../src/comp/SFScroller';
import SFChiclet from '../src/comp/SFChiclet';
import R from 'react';
class ExampleChiclets extends R.PureComponent {
  state = {
    isSelected1: true,
    isSelected2: false
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

class ExampleScroller extends R.PureComponent {
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
  onScrollTester = () => {
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
      <div style={{ width: '500px' }}>
        <SFScroller
          values={oneToTen}
          modifiers={mod}
          onChange={this.updateModifier}
          onScroll={this.onScrollTester}
        />
      </div>
    );
  }
}

export default function DisplayAll() {
  return (
    <div>
      <div style={{ margin: '30px' }}>
        <h2>Example SFScroller</h2>
        <ExampleScroller />
      </div>
      <div style={{ margin: '30px' }}>
        <h2>Example Chiclets</h2>
        <ExampleChiclets />
      </div>
      <div style={{ margin: '30px' }}>
        <h2>SFCard</h2>
        <ExerciseCard />
      </div>
    </div>
  );
}

class ExerciseCard extends R.PureComponent {
  state = { isExpanded: true };

  toggleExpand = () => {
    this.setState(state => {
      return {
        isExpanded: !state.isExpanded
      };
    });
  };

  render() {
    return (
      <SFCard isExpanded={this.state.isExpanded}>
        <div>
          <div onClick={this.toggleExpand}>Toggle</div>
          <ExampleChiclets />
        </div>
        {this.state.isExpanded && <WorkoutData />}
        <ExampleScroller />
      </SFCard>
    );
  }
}

function WorkoutData() {
  return (
    <div
      style={{
        display: 'flex',
        'flex-direction': 'column',
        'justify-content': 'center',
        'align-items': 'center'
      }}
    >
      <p>Extra Information Goes Here</p>
      <p>Equipment Selection w/Weight Calculator</p>
      <p>Variation Selection</p>
      <p>History</p>
      <p>Rest Timer Config</p>
      <p>Difficulty</p>
    </div>
  );
}
