import * as React from 'react';
import { mount } from 'enzyme';
import SFTooltip from '../src/comp/SFTooltip';

describe('SFTooltip', () => {
  it('should render children', function() {
    const wrap = mount(
      <SFTooltip>
        <div className="tester">sample text</div>
      </SFTooltip>
    );
    expect(wrap.find('.tester').text()).toEqual('sample text');
  });
});
