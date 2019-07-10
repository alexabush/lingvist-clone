import React from 'react';
import T from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class SFCard extends React.Component {
  static propTypes = {
    children: T.any
  };

  renderChildren = () => {
    const { children } = this.props;
    return React.Children.map(children, (child, idx) => {
      return child ? (
        <div key={child.props.children}>
          {child}
          {idx < children.length - 1 && <hr />}
        </div>
      ) : null;
    });
  };

  render() {
    return (
      <div className="SFCard">
        <ReactCSSTransitionGroup
          transitionName={'sf-Card--toggle'}
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}
        >
          {this.renderChildren()}
        </ReactCSSTransitionGroup>
        <style jsx global>{`
          .SFCard {
            background: white;
            border-radius: 10px;
            padding: 0 40px;
          }
          .sf-Card--toggle-enter {
            max-height: 0px;
          }

          .sf-Card--toggle-enter.sf-Card--toggle-enter-active {
            overflow: hidden;
            max-height: 300px;
            transition: max-height 1000ms ease-in;
          }

          .sf-Card--toggle-leave {
            max-height: 300px;
          }

          .sf-Card--toggle-leave.sf-Card--toggle-leave-active {
            overflow: hidden;
            max-height: 0px;
            transition: max-height 1000ms ease-in;
          }
        `}</style>
      </div>
    );
  }
}
