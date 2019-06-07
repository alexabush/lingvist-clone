import R from 'react';
import T from 'prop-types';
import { Animate } from 'react-simple-animate';
export default class SFCard extends R.PureComponent {
  static propTypes = {
    children: T.any,
    toggleIndex: T.number,
    clickIndex: T.number,
  };
  state = { isExpanded: true };

  toggleExpand = () => {
    this.setState(state => {
      return {
        isExpanded: !state.isExpanded,
      };
    });
  };

  render() {
    let { toggleIndex, clickIndex, children } = this.props;
    let { isExpanded } = this.state;
    let childComponents = React.Children.map(children, (child, idx) => {
      if (idx === toggleIndex) {
        return (
          <Animate play={!isExpanded} start={{ height: 'auto' }} end={{ height: '0px' }} complete={{ display: 'none' }}>
            {child}
            <hr />
          </Animate>
        );
      } else if (idx === clickIndex) {
        return <div onClick={this.toggleExpand}>{child}</div>;
      } else {
        return child;
      }
    });

    return <div>{childComponents}</div>;
  }
}
