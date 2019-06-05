import R from 'react';
import T from 'prop-types';
import { Animate } from 'react-simple-animate';
export default class SFCard extends R.PureComponent {
  static propTypes = {
    children: T.any,
  };
  state = { isHide: false };

  toggleShow = () => {
    this.setState(state => {
      return {
        isHide: !state.isHide,
      };
    });
  };

  render() {
    let { children } = this.props;
    let { isHide } = this.state;

    let childComponents = React.Children.map(children, (child, idx) => {
      if (children.length === 3 && idx === 0) {
        return <div onClick={this.toggleShow}>{child}</div>;
      } else if (children.length === 3 && idx === 1) {
        return (
          <Animate play={isHide} start={{ height: '20px' }} end={{ height: '0px' }} complete={{ display: 'none' }}>
            {child}
          </Animate>
        );
      } else {
        return child;
      }
    });

    return <div>{childComponents}</div>;
  }
}
