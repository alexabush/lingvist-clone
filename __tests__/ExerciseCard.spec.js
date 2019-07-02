import * as React from 'react';
import { mount } from 'enzyme';
import ExerciseCard from '../src/comp/ExerciseCard';

describe('ExerciseCard', () => {
  let wrap;
  beforeEach(() => {
    wrap = mount(<ExerciseCard />);
  });
  it('renders components', function() {
    expect(wrap.children().props().children.length).toEqual(3);
  });
  it('hides middle of 3 components on click', function() {
    expect(wrap.children().props().children[1]).toBeTruthy();
    wrap.find('.ExerciseCardHeader').simulate('click');
    expect(wrap.children().props().children[1]).toEqual(false);
  });
});
