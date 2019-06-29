import * as React from 'react';
import { mount } from 'enzyme';
import ProgressBar from '../src/comp/ProgressBar';

describe('ProgressBar', () => {
  it('should render num prop', function() {
    const wrap = mount(<ProgressBar num={15} />);
    expect(
      wrap
        .find('div.progress-bar--num')
        .first()
        .text()
    ).toBe('15');
  });
  it('should add 0 to num prop', function() {
    const wrap = mount(<ProgressBar num={5} />);
    expect(
      wrap
        .find('div.progress-bar--num')
        .first()
        .text()
    ).toBe('05');
  });
});
