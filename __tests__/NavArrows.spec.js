import * as React from 'react';
import { mount } from 'enzyme';
import NavArrows from '../src/comp/NavArrows';

describe('NavArrows', () => {
  it('should register left arrow click', function() {
    const mockFn = jest.fn();
    const wrap = mount(<NavArrows onLeftClick={mockFn} />);
    wrap.find('.sf-nav-arrows--left-arrow-container').simulate('click');
    expect(mockFn.mock.calls.length).toBe(1);
  });
  it('should register right arrow click', function() {
    const mockFn = jest.fn();
    const wrap = mount(<NavArrows onRightClick={mockFn} />);
    wrap.find('.sf-nav-arrows--right-arrow-container').simulate('click');
    expect(mockFn.mock.calls.length).toBe(1);
  });
  it('should hide left arrow when isPrev is true', function() {
    const wrap = mount(<NavArrows isPrev={true} />);
    expect(
      wrap.exists('.sf-nav-arrows--left-arrow-container .sf-nav-arrows--arrow')
    ).toEqual(false);
  });
  it('should show left arrow when isPrev is false', function() {
    const wrap = mount(<NavArrows isPrev={false} />);
    expect(
      wrap.exists('.sf-nav-arrows--left-arrow-container .sf-nav-arrows--arrow')
    ).toEqual(true);
  });
  it('should render children', function() {
    const wrap = mount(
      <NavArrows>
        <div className="test">test text</div>
      </NavArrows>
    );
    expect(wrap.find('.test').text()).toBe('test text');
  });
});
