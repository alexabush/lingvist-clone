import * as React from 'react';
import { mount } from 'enzyme';
import SFChiclet from '../src/comp/SFChiclet';

describe('SFChiclet', () => {
  it('renders children', function() {
    const wrap = mount(
      <SFChiclet>
        <div>Sample Child</div>
      </SFChiclet>
    );
    expect(wrap.text()).toEqual('Sample Child');
  });
  it('calls onClick when clicked', function() {
    const mockFn = jest.fn();
    const wrap = mount(
      <SFChiclet onClick={mockFn}>
        <div>Sample Child</div>
      </SFChiclet>
    );
    expect(mockFn.mock.calls.length).toEqual(0);
    wrap.simulate('click');
    expect(mockFn.mock.calls.length).toEqual(1);
  });
});
