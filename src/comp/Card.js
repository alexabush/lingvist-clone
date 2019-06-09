import React from 'react';
import T from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6

export default class Card extends React.Component {
  static propTypes = {
    children: T.any,
  };

  render() {
    let { children } = this.props;
    let childComponents = React.Children.map(children, (child, idx) => {
      return child ? (
        <div key={child.props.children}>
          {child}
          {idx < children.length - 1 && <hr />}
        </div>
      ) : null;
    });
    return (
      <div>
        <ReactCSSTransitionGroup transitionName={'toggle'} transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>
          {childComponents}
        </ReactCSSTransitionGroup>
        <style jsx global>{`
          .toggle-enter {
            max-height: 0px;
          }

          .toggle-enter.toggle-enter-active {
            overflow: hidden;
            max-height: 300px;
            transition: max-height 1000ms ease-in;
          }

          .toggle-leave {
            max-height: 300px;
          }

          .toggle-leave.toggle-leave-active {
            overflow: hidden;
            max-height: 0px;
            transition: max-height 1000ms ease-in;
          }
        `}</style>
      </div>
    );
  }
}