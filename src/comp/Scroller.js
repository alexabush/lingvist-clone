import React from 'react';
import PropTypes from 'prop-types';
import { polar1 } from '../colors';

export default class Scroller extends React.PureComponent {
  static propTypes = {
    values: PropTypes.array,
    modifiers: PropTypes.object,
    onChange: PropTypes.func,
    onSlide: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.sfscroller = React.createRef();
  }

  state = {
    isFadeLeft: false,
    isFadeRight: false
  };

  componentDidMount() {
    this.handleScroll();
  }

  handleScroll = () => {
    const { onSlide } = this.props;
    onSlide();
    const scroller = this.sfscroller.current;
    const showGradientCoordinate = 1;
    let newState = { ...this.state };
    if (scroller.scrollLeft > showGradientCoordinate) {
      newState.isFadeLeft = true;
    } else {
      newState.isFadeLeft = false;
    }
    if (
      scroller.scrollLeft + scroller.clientWidth <
      scroller.scrollWidth - showGradientCoordinate
    ) {
      newState.isFadeRight = true;
    } else {
      newState.isFadeRight = false;
    }
    return this.setState(newState);
  };

  handleNumberClick = num => {
    this.props.onChange(num);
  };

  renderNumbers = () => {
    const { values, modifiers } = this.props;
    return values.map(num => {
      const modifierComponent = modifiers[num] ? modifiers[num] : null;
      return (
        <ScrollerNumber
          key={num}
          number={num}
          modifier={modifierComponent}
          handleClick={this.handleNumberClick}
        />
      );
    });
  };

  render() {
    const { isFadeLeft, isFadeRight } = this.state;
    const fadeLeft = isFadeLeft ? 'sf-scroller-fade-left' : '';
    const fadeRight = isFadeRight ? 'sf-scroller-fade-right' : '';
    return (
      <div onScroll={this.handleScroll} className="sf-scroller--container">
        <div className={`${fadeRight}`} />
        <div ref={this.sfscroller} className="sf-scroller">
          {this.renderNumbers()}
          <div className={`${fadeLeft}`} />
        </div>
        <style jsx>{`
          .sf-scroller--container {
            position: relative;
            box-shadow: 0.5px 0.5px 0.5px 0.5px;
          }
          .sf-scroller {
            display: flex;
            min-width: 100%;
            overflow-x: auto;
          }
          ::-webkit-scrollbar {
            display: none;
          }
          .sf-scroller-fade-left,
          .sf-scroller-fade-right {
            position: absolute;
            width: 100px;
            height: 70px;
            pointer-events: none;
          }
          .sf-scroller-fade-right {
            right: 0px;
            z-index: 1;
            background: linear-gradient(to right, transparent, ${polar1});
          }
          .sf-scroller-fade-left {
            background: linear-gradient(to left, transparent, ${polar1});
          }
        `}</style>
      </div>
    );
  }
}

function ScrollerNumber({ number, modifier, handleClick }) {
  return (
    <div className="sf-scroller-number" onClick={() => handleClick(number)}>
      {number}
      <div>{modifier}</div>
      <style jsx>{`
        .sf-scroller-number {
          padding: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 50px;
          height: 50px;
          font-size: 32px;
          position: relative;
        }
      `}</style>
    </div>
  );
}

ScrollerNumber.propTypes = {
  number: PropTypes.number,
  modifier: PropTypes.string,
  handleClick: PropTypes.func
};
