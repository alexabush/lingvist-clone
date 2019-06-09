import R from 'react';
import T from 'prop-types';
import { polar1, night1 } from '../colors';

export default class SFCard extends R.PureComponent {
  static propTypes = {
    outline: T.bool,
    selected: T.bool,
    onClick: T.func,
    children: T.any,
  };

  render() {
    let { outline, selected, onClick, children } = this.props;
    let isOutline = outline ? 'outline' : '';
    let isSelected = selected ? 'selected' : '';
    return (
      <div className={`chiclet-container ${isSelected}`} onClick={onClick}>
        <div className={`chiclet ${isOutline}`}>{children}</div>
        <style jsx>{`
          .chiclet-container {
            display: inline-block;
            margin: 10px;
          }
          .chiclet {
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
          .outline {
            border: 2px dotted ${night1};
            background: ${polar1};
            color: ${night1};
          }
          .selected {
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
