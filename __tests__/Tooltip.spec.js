import * as React from 'react';
import { mount } from 'enzyme';
import Tooltip from '../src/comp/Tooltip';

describe('Tooltip', () => {
  it('should render children', function() {
    const wrap = mount(
      <Tooltip>
        <div className="tester">sample text</div>
      </Tooltip>
    );
    expect(wrap.find('.tester').text()).toEqual('sample text');
  });
});
