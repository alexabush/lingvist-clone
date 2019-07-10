import * as React from 'react';
import { mount } from 'enzyme';
import ToggleNativePhrase from '../src/comp/ToggleNativePhrase';

describe('ToggleNativePhrase', () => {
  it('calls toggleShow when clicked ', function() {
    const mockToggle = jest.fn();
    const wrap = mount(<ToggleNativePhrase toggleShow={mockToggle} />);
    const clickComp = wrap.find('.toggle-native-phrase');
    expect(mockToggle.mock.calls.length).toBe(0);
    clickComp.simulate('click');
    expect(mockToggle.mock.calls.length).toBe(1);
  });
});
