import React from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class SFCard extends React.Component {
  static propTypes = {
    children: PropTypes.any
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
      <div className="sf-card">
        <ReactCSSTransitionGroup
          transitionName={'sf-card--toggle'}
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}
        >
          {this.renderChildren()}
        </ReactCSSTransitionGroup>
        <style jsx global>{`
          .sf-card {
            background: white;
            border-radius: 10px;
            padding: 0 40px;
          }
          .sf-card--toggle-enter {
            max-height: 0px;
          }

          .sf-card--toggle-enter.sf-card--toggle-enter-active {
            overflow: hidden;
            max-height: 300px;
            transition: max-height 1000ms ease-in;
          }

          .sf-card--toggle-leave {
            max-height: 300px;
          }

          .sf-card--toggle-leave.sf-card--toggle-leave-active {
            overflow: hidden;
            max-height: 0px;
            transition: max-height 1000ms ease-in;
          }
        `}</style>
      </div>
    );
  }
}
