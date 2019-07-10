import * as React from 'react';
import { mount } from 'enzyme';
import ExtraWorkoutInfo from '../src/comp/ExtraWorkoutInfo';

describe('ExtraWorkoutInfo', () => {
  it('renders', function() {
    const wrap = mount(<ExtraWorkoutInfo />);
  });
});
