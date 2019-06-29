import * as React from 'react';
import { mount } from 'enzyme';
import ToggleEnglishPhrase from '../src/comp/ToggleEnglishPhrase';

describe('ToggleEnglishPhrase', () => {
  it('calls toggleShow when clicked ', function() {
    const mockToggle = jest.fn();
    const wrap = mount(<ToggleEnglishPhrase toggleShow={mockToggle} />);
    const clickComp = wrap.find('.ToggleEnglishPhrase');
    expect(mockToggle.mock.calls.length).toBe(0);
    clickComp.simulate('click');
    expect(mockToggle.mock.calls.length).toBe(1);
  });
});
