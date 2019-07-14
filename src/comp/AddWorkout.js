import React from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import ExerciseCardHeader from './ExerciseCardHeader';
import SelectField from './SelectField';
import Madlib from './Madlib';

export default class AddWorkout extends React.PureComponent {
  state = {
    data: []
  };
  handleNext = () => {
    // TODO add data in state to mobX
    Router.push({
      pathname: `${this.props.nextScreen}`
    });
  };
  handleChange = newData => {
    this.setState({ data: newData });
  };

  render() {
    const {
      exerciseName,
      text,
      max,
      equipment,
      variations,
      options
    } = this.props;
    return (
      <div className="add-workout--container">
        <div className="add-workout--card-container">
          <ExerciseCardHeader
            exerciseName={exerciseName}
            equipment={equipment}
            variations={variations}
          />
        </div>
        <div className="add-workout--card-container">
          <SelectCard
            text={text}
            handleChange={this.handleChange}
            options={options}
            max={max}
          />
        </div>
        <button className="add-workout--next-button" onClick={this.handleNext}>
          Next
        </button>
        <style jsx>{`
          .add-workout--container {
            margin: 20px;
          }
          .add-workout--card-container {
            margin: 20px 0;
            padding: 0 25px 10px 25px;
            background: white;
            box-shadow: 1px 1px 5px 1px #888888;
            border-radius: 5px;
          }
          .add-workout--next-button {
            border: none;
            color: blue;
            float: right;
            font-size: 1.2rem;
            padding: 10px;
            outline: none;
          }
        `}</style>
      </div>
    );
  }
}

AddWorkout.propTypes = {
  nextScreen: PropTypes.string,
  exerciseName: PropTypes.string,
  text: PropTypes.string,
  equipment: PropTypes.string,
  variations: PropTypes.arrayOf(PropTypes.string),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.number
    })
  ),
  max: PropTypes.number
};

function SelectCard({ text, handleChange, options, max }) {
  return (
    <div className="select-card--container">
      <h3>{text}</h3>
      <hr />
      {options ? (
        <SelectField max={max} onChange={handleChange} options={options} />
      ) : (
        <div className="select-card--madlibs-container">
          <Madlib onChange={handleChange}>
            <Madlib.Input />
            <Madlib.Text>sets of</Madlib.Text>
            <Madlib.Input />
            <Madlib.Text>reps at</Madlib.Text>
            <Madlib.Input />
            <Madlib.Text>kg</Madlib.Text>
          </Madlib>
        </div>
      )}
      <style jsx>{`
        .select-card--container {
          padding: 10px 0;
        }
        .select-card--container h3 {
          margin: 0;
        }
        .select-card--madlibs-container {
          padding: 5px 0;
        }
      `}</style>
    </div>
  );
}

SelectCard.propTypes = {
  handleChange: PropTypes.func,
  text: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.number
    })
  ),
  max: PropTypes.number
};
