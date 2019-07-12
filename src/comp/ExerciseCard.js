import React from 'react';
import PropTypes from 'prop-types';
import SFCard from './SFCard';
import ExerciseCardHeader from './ExerciseCardHeader';
import ExerciseCardFooter from './ExerciseCardFooter';
import ExtraWorkoutInfo from './ExtraWorkoutInfo';

export default class ExerciseCard extends React.PureComponent {
  state = { isExpanded: true };

  toggleExpand = () => {
    this.setState(state => {
      return {
        isExpanded: !state.isExpanded
      };
    });
  };

  render() {
    // const {exerciseWeight} = this.props
    const exerciseWeight = 180;
    return (
      <SFCard>
        <ExerciseCardHeader
          exerciseName={'Bench Press'}
          equipment={'Bench Press'}
          variations={['15 deg Incline', '45 deg Incline']}
          onClick={this.toggleExpand}
          withChiclets
        />
        {this.state.isExpanded && <ExtraWorkoutInfo />}
        <ExerciseCardFooter exerciseWeight={exerciseWeight} />
      </SFCard>
    );
  }
}

ExerciseCardFooter.propTypes = {
  exerciseWeight: PropTypes.number
};
