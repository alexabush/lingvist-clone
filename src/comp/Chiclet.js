import R from 'react';
import T from 'prop-types';

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
            background: grey;
            color: white;
          }
          .outline {
            border: 2px dotted grey;
            background: white;
            color: grey;
          }
          .selected {
            border: 2px solid grey;
            border-radius: 5px;
            background: white;
            padding: 2px;
          }
        `}</style>
      </div>
    );
  }
}
