import * as React from 'react';
import { mount } from 'enzyme';
import ExerciseCardHeader from '../src/comp/ExerciseCardHeader';

describe('ExerciseCardHeader', () => {
  let wrap, mockOnClick;
  beforeEach(() => {
    mockOnClick = jest.fn();
    wrap = mount(
      <ExerciseCardHeader
        exerciseName="lift"
        equipment="bar"
        variations={['lift1', 'lift2']}
        onClick={mockOnClick}
      />
    );
  });
  it('renders text', function() {
    expect(
      wrap.find('.exercise-card-header--split-container h2').text()
    ).toEqual('lift');
    expect(
      wrap
        .find('.exercise-card-header--equipment-container span')
        .first()
        .text()
    ).toEqual('bar');
    expect(
      wrap.find('.exercise-card-header--variations-container').text()
    ).toEqual('lift1, lift2');
  });
  it('handleClick called on click', function() {});
});
