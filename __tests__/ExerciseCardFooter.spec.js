import * as React from 'react';
import { mount } from 'enzyme';
import ExerciseCardFooter from '../src/comp/ExerciseCardFooter';

describe('ExerciseCardFooter', () => {
  it('renders', function() {
    const wrap = mount(<ExerciseCardFooter />);
  });
});
