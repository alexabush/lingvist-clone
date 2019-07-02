import * as React from 'react';
import { mount } from 'enzyme';
import SFScrollerNumber from '../src/comp/SFScrollerNumber';

describe('SFScrollerNumber', () => {
  beforeEach(() => {});
  it('renders number', function() {
    const wrap = mount(<SFScrollerNumber number={1} />);
    expect(wrap.text()).toEqual('1');
  });
  it('renders modifier', function() {
    const wrap = mount(
      <SFScrollerNumber modifier={<div>Sample Modifier</div>} />
    );
    expect(wrap.text()).toEqual('Sample Modifier');
  });
  it('renders number and modifier', function() {
    const wrap = mount(
      <SFScrollerNumber number={2} modifier={<div>Other Modifier</div>} />
    );
    expect(wrap.text()).toEqual('2Other Modifier');
  });
  it('calls handleClick on click', function() {
    const mockHandleClick = jest.fn();
    const wrap = mount(
      <SFScrollerNumber
        number={1}
        modifier={<div>Other Modifier</div>}
        handleClick={mockHandleClick}
      />
    );
    expect(mockHandleClick.mock.calls.length).toEqual(0);
    wrap.simulate('click');
    expect(mockHandleClick.mock.calls.length).toEqual(1);
  });
});
