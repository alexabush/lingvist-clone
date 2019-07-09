import * as React from 'react';
import { mount } from 'enzyme';
import SFProgressCircles from '../src/comp/SFProgressCircles';

describe('SFProgressCircles', () => {
  it('should render without throwing an error', function() {
    const wrap = mount(<SFProgressCircles />);
    expect(wrap.find('.SFProgressCircles').children().length).toBe(6); // additional child for style jsx
  });
});
