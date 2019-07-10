import * as React from 'react';
import { mount } from 'enzyme';
import SFProgressInfo from '../src/comp/SFProgressInfo';

describe('SFProgressInfo', () => {
  it('should render new word text if wordStrength equals 1', function() {
    const wrap = mount(<SFProgressInfo wordStrength={1} />);
    expect(wrap.find('.SFProgressInfo--textContainer').text()).toBe(
      'New Word Find out more'
    );
  });
  it('should render more practice text if wordStrength does not equal 1', function() {
    const wrap = mount(<SFProgressInfo wordStrength={2} />);
    expect(wrap.find('.SFProgressInfo--textContainer').text()).toBe(
      'This word needs more practice. Find out more'
    );
  });
});
