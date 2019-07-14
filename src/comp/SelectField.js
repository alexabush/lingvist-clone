import React from 'react';
import PropTypes from 'prop-types';

export default class SelectField extends React.Component {
  state = {
    selected: []
  };
  isSelected = value => {
    if (this.state.selected.includes(value)) return 'option-selected';
  };

  handleSelect = val => {
    const { max, onChange } = this.props;
    const { selected } = this.state;
    let newSelected;
    if (selected.includes(val)) {
      newSelected = selected.filter(item => item !== val);
    } else if (
      ((max && selected.length < max) || max === null) &&
      !selected.includes(val)
    ) {
      newSelected = [...selected, val];
    } else {
      newSelected = [val];
    }
    this.setState({ selected: newSelected });
    onChange(newSelected);
  };
  render() {
    const { options } = this.props;
    return (
      <div>
        {options.map(({ label, value }) => {
          return (
            <div
              className={`select-field-options ${this.isSelected(value)}`}
              key={value}
              onClick={() => {
                this.handleSelect(value);
              }}
            >
              {label}
            </div>
          );
        })}
        <style jsx>{`
          .select-field-options {
            display: inline-block;
            padding: 5px 7px;
            margin: 3px;
            border-radius: 3px;
            color: white;
            background: #333;
          }
          .option-selected {
            background: lightblue;
          }
        `}</style>
      </div>
    );
  }
}

SelectField.propTypes = {
  max: PropTypes.number,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.number
    })
  )
};
