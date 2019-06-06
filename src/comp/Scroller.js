import R from 'react';
import T from 'prop-types';

export default class Scroller extends R.PureComponent {
  static propTypes = {
    values: T.array,
    modifiers: T.object,
    onChange: T.func,
    onSlide: T.func,
  };

  state = {
    isFadeLeft: false,
    isFadeRight: false,
  };

  componentDidMount() {
    this.handleScroll();
    let scroller = document.querySelector('.Scroller');
    scroller.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    let scroller = document.querySelector('.Scroller');
    scroller.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    this.props.onSlide();
    let scroller = document.querySelector('.Scroller');
    const showGradientCoordinate = 45;
    if (scroller.scrollLeft > showGradientCoordinate) {
      this.setState({ isFadeLeft: true });
    } else {
      this.setState({ isFadeLeft: false });
    }
    if (scroller.scrollLeft + scroller.clientWidth < scroller.scrollWidth - showGradientCoordinate) {
      this.setState({ isFadeRight: true });
    } else {
      this.setState({ isFadeRight: false });
    }
  };

  render() {
    let { values, modifiers, onChange, onSlide } = this.props;
    let { isFadeLeft, isFadeRight } = this.state;
    let numberComponents = values.map(num => {
      let modifierComponent = modifiers[num] ? modifiers[num] : null;
      return <Number key={num} number={num} modifier={modifierComponent} handleClick={onChange} />;
    });
    let fadeLeft = isFadeLeft ? 'fade-left' : '';
    let fadeRight = isFadeRight ? 'fade-right' : '';
    return (
      <div className="scroll-container">
        <div className={`${fadeRight}`} />
        <div className="Scroller">
          {numberComponents}
          <div className={`${fadeLeft}`} />
        </div>
        <style jsx>{`
          .scroll-container {
            position: relative;
            box-shadow: 0.5px 0.5px 0.5px 0.5px;
            margin: 100px;
          }
          .Scroller {
            display: flex;
            min-width: 100%;
            overflow-x: auto;
          }
          ::-webkit-scrollbar {
            display: none;
          }
          .fade-right {
            position: absolute;
            right: 0px;
            width: 100px;
            height: 70px;
            z-index: 1;
            background: linear-gradient(to right, transparent, white);
          }
          .fade-left {
            position: absolute;
            width: 100px;
            height: 70px;
            background: linear-gradient(to left, transparent, white);
          }
        `}</style>
      </div>
    );
  }
}

function Number({ number, modifier, handleClick }) {
  return (
    <div className="Number" onClick={() => handleClick(number)}>
      {number}
      <div className="mod">{modifier}</div>
      <style jsx>{`
        .Number {
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
