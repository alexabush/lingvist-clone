import * as React from 'react';
import { mount } from 'enzyme';
import ProgressCircles from '../src/comp/ProgressCircles';

describe('ProgressCircles', () => {
  it('should render without throwing an error', function() {
    const wrap = mount(<ProgressCircles />);
    expect(wrap.find('.sf-progress-circles').children().length).toBe(6); // additional child for style jsx
  });
});
