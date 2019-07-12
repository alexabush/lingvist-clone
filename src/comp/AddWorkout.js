import React from 'react';
import PropTypes from 'prop-types';
import ExerciseCardHeader from './ExerciseCardHeader';
import SelectField from './SelectField';
import Link from 'next/link';

export default class AddWorkout extends React.PureComponent {
  state = {
    selected: []
  };
  handleSubmission = data => {
    console.log(data);
    this.setState({ selected: data });
  };

  render() {
    const { exerciseName, text, options, max } = this.props;
    const { selected } = this.state;
    return (
      <div className="add-workout--container">
        <div className="exercise-specs--container add-workout--item-container">
          <ExerciseCardHeader exerciseName={exerciseName} />
        </div>
        <div className="add-workout--item-container">
          <SelectCard
            text={text}
            handleSubmit={this.handleSubmission}
            options={options}
            max={max}
          />
        </div>
        <Link href="/addWorkout2">
          <a>Select</a>
        </Link>
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

function SelectCard({ text, handleSubmit, options, max }) {
  return (
    <div>
      <h3>{text}</h3>
      <hr />
      <SelectField max={max} onChange={handleSubmit} options={options} />
    </div>
  );
}
