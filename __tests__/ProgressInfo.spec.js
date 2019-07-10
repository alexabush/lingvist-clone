import * as React from 'react';
import { mount } from 'enzyme';
import ProgressInfo from '../src/comp/ProgressInfo';

describe('ProgressInfo', () => {
  it('should render new word text if wordStrength equals 1', function() {
    const wrap = mount(<ProgressInfo wordStrength={1} />);
    expect(wrap.find('.progress-info--text-container').text()).toBe(
      'New Word Find out more'
    );
  });
  it('should render more practice text if wordStrength does not equal 1', function() {
    const wrap = mount(<ProgressInfo wordStrength={2} />);
    expect(wrap.find('.progress-info--text-container').text()).toBe(
      'This word needs more practice. Find out more'
    );
  });
});
