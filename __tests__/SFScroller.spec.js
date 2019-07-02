import * as React from 'react';
import { mount } from 'enzyme';
import SFScroller from '../src/comp/SFScroller';

describe('SFScroller', () => {
  let repOptions, mod, mockSlideHandler, mockOnChange;
  beforeEach(() => {
    mockSlideHandler = jest.fn();
    repOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    mod = {};
  });
  it('renders values', function() {
    const wrap = mount(
      <SFScroller
        values={repOptions}
        modifiers={mod}
        onChange={mockOnChange}
        onSlide={mockSlideHandler}
      />
    );
    expect(wrap.text()).toEqual('12345678910');
  });
  it('renders modifiers as text', function() {
    const wrap = mount(
      <SFScroller
        values={repOptions}
        modifiers={{
          '8': <div>Sample Text</div>,
          '10': <div>Sample Text 2</div>
        }}
        onChange={mockOnChange}
        onSlide={mockSlideHandler}
      />
    );
    expect(wrap.text()).toEqual('12345678Sample Text910Sample Text 2');
  });
  it('calls onSlide on mount and in response to scroll event', function() {
    const wrap = mount(
      <SFScroller
        values={repOptions}
        modifiers={mod}
        onChange={mockOnChange}
        onSlide={mockSlideHandler}
      />
    );
    expect(mockSlideHandler.mock.calls.length).toEqual(1);
    wrap.simulate('scroll');
    expect(mockSlideHandler.mock.calls.length).toEqual(2);
  });
});
