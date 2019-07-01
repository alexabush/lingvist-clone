import * as React from 'react';
import { mount } from 'enzyme';
import SFNavArrows from '../src/comp/SFNavArrows';

describe('SFNavArrows', () => {
  it('should register left arrow click', function() {
    const mockFn = jest.fn();
    const wrap = mount(<SFNavArrows onLeftClick={mockFn} />);
    wrap.find('.SFNavArrows--leftArrowContainer').simulate('click');
    expect(mockFn.mock.calls.length).toBe(1);
  });
  it('should register right arrow click', function() {
    const mockFn = jest.fn();
    const wrap = mount(<SFNavArrows onRightClick={mockFn} />);
    wrap.find('.SFNavArrows--rightArrowContainer').simulate('click');
    expect(mockFn.mock.calls.length).toBe(1);
  });
  it('should hide left arrow when isPrev is true', function() {
    const wrap = mount(<SFNavArrows isPrev={true} />);
    expect(
      wrap.exists('.SFNavArrows--leftArrowContainer .SFNavArrows--arrow')
    ).toEqual(false);
  });
  it('should show left arrow when isPrev is false', function() {
    const wrap = mount(<SFNavArrows isPrev={false} />);
    expect(
      wrap.exists('.SFNavArrows--leftArrowContainer .SFNavArrows--arrow')
    ).toEqual(true);
  });
  it('should render children', function() {
    const wrap = mount(
      <SFNavArrows>
        <div className="test">test text</div>
      </SFNavArrows>
    );
    expect(wrap.find('.test').text()).toBe('test text');
  });
});
