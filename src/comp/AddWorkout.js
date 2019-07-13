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
    console.log(this.state.data);
    Router.push({
      pathname: `${this.props.nextScreen}`
    });
  };
  handleChange = newData => {
    this.setState({ data: newData });
    console.log(newData);
  };

  render() {
    const { exerciseName, text, options, max } = this.props;
    const { data } = this.state;
    return (
      <div className="add-workout--container">
        <div className="exercise-specs--container add-workout--item-container">
          <ExerciseCardHeader exerciseName={exerciseName} />
        </div>
        <div className="add-workout--item-container">
          <SelectCard
            text={text}
            handleChange={this.handleChange}
            options={options}
            max={max}
          />
        </div>
        <button onClick={this.handleNext}>Next</button>
        <style jsx>{`
          .add-workout--container {
          }
          .add-workout--item-container {
            margin: 20px;
          }
          .exercise-specs--container {
            padding: 0 25px 10px 25px;
            background: white;
            box-shadow: 1px 1px 5px 1px #888888;
            border-radius: 5px;
          }
        `}</style>
      </div>
    );
  }
}

AddWorkout.propTypes = {
  exerciseWeight: PropTypes.number
};

function SelectCard({ text, handleChange, options, max }) {
  return (
    <div>
      <h3>{text}</h3>
      <hr />
      {options ? (
        <SelectField max={max} onChange={handleChange} options={options} />
      ) : (
        <Madlib onChange={handleChange}>
          <Madlib.Input />
          <Madlib.Text>sets of</Madlib.Text>
          <Madlib.Input />
          <Madlib.Text>reps at</Madlib.Text>
          <Madlib.Input />
          <Madlib.Text>kg</Madlib.Text>
        </Madlib>
      )}
    </div>
  );
}
