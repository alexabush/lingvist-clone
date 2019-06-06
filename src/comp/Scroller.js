import R from 'react';
import T from 'prop-types';

export default class Scroller extends R.PureComponent {
  static propTypes = {
    values: T.array,
    modifiers: T.object,
    onChange: T.func,
    onSlide: T.func,
  };

  state = { fadeLeft: false, fadeRight: false };

  componentDidMount() {
    let scroller = document.querySelector('.Scroller');
    scroller.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    let scroller = document.querySelector('.Scroller');
    scroller.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    let scroller = document.querySelector('.Scroller');
    const showGradientCoordinate = 80;
    if (scroller.scrollLeft > showGradientCoordinate) {
      this.setState({ fadeLeft: true });
    } else {
      this.setState({ fadeLeft: false });
    }
    if (scroller.scrollLeft + scroller.clientWidth < scroller.scrollWidth - showGradientCoordinate) {
      this.setState({ fadeRight: true });
    } else {
      this.setState({ fadeRight: false });
    }
  };

  render() {
    let numberComponents = this.props.values.map(num => {
      let isPrev = this.props.modifiers[num] === 'last';
      let isCurrent = this.props.modifiers[num] === 'current';
      return <Number key={num} number={num} isPrev={isPrev} isCurrent={isCurrent} />;
    });
    let fadeLeft = this.state.fadeLeft ? 'fade-left' : '';
    let fadeRight = this.state.fadeRight ? 'fade-right' : '';
    return (
      <div className="Scroller">
        {numberComponents}
        <div className={`${fadeLeft}`} />
        <div className={`${fadeRight}`} />
        <style jsx>{`
          .Scroller {
            display: flex;
            min-width: 100%;
            overflow-x: auto;
            position: relative;
          }
          ::-webkit-scrollbar {
            display: none;
          }
          .fade-right {
            width: 100px;
            height: 70px;
            position: fixed;
            right: 0;
            background: linear-gradient(to right, transparent, white);
          }
          .fade-left {
            width: 100px;
            height: 70px;
            position: fixed;
            left: 0;
            background: linear-gradient(to left, transparent, white);
          }
        `}</style>
      </div>
    );
  }
}

function Number({ number, isPrev, isCurrent }) {
  return (
    <div className="Number">
      {number}
      <div className="modifier">
        {isPrev ? 0 : null}
        {isCurrent ? 1 : null}
      </div>
      <style jsx>{`
        .Number {
          padding: 10px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          min-width: 50px;
          height: 50px;
          font-size: 32px;
          position: relative;
        }
        .modifier {
          position: absolute;
          bottom: 5px;
          font-size: 16px;
        }
      `}</style>
    </div>
  );
}
