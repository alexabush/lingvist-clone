import React from 'react';
import PropTypes from 'prop-types';
import { polar1, night1 } from '../colors';

export default class Chiclet extends React.Component {
  static propTypes = {
    outline: PropTypes.bool,
    selected: PropTypes.bool,
    onClick: PropTypes.func,
    children: PropTypes.any
  };

  handleClick = () => {
    const { onClick } = this.props;
    onClick && onClick();
  };

  render() {
    const { outline, selected, children } = this.props;
    const isOutline = outline ? 'sf-chiclet--outline' : '';
    const isSelected = selected ? 'sf-chiclet--selected' : '';
    return (
      <div
        className={`sf-chiclet--container ${isSelected}`}
        onClick={this.handleClick}
      >
        <div className={`sf-chiclet ${isOutline}`}>{children}</div>
        <style jsx>{`
          .sf-chiclet--container {
            display: inline-block;
            margin: 10px;
          }
          .sf-chiclet {
            height: 15px;
            width: 15px;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 5px;
            border-radius: 5px;
            background: ${night1};
            color: ${polar1};
          }
          .sf-chiclet--outline {
            border: 2px dotted ${night1};
            background: ${polar1};
            color: ${night1};
          }
          .sf-chiclet--selected {
            border: 2px solid ${night1};
            border-radius: 5px;
            background: ${polar1};
            padding: 2px;
          }
        `}</style>
      </div>
    );
  }
}
