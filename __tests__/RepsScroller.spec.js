import * as React from 'react';
import { mount } from 'enzyme';
import RepsScroller from '../src/comp/RepsScroller';

describe('RepsScroller', () => {
  let wrap, container;
  beforeEach(() => {
    wrap = mount(<RepsScroller />);
    container = wrap.find('div').first();
  });
  it('test updateModifier', function() {});
});
