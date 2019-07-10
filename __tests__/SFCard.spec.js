import * as React from 'react';
import { mount } from 'enzyme';
import SFCard from '../src/comp/SFCard';

describe('SFCard', () => {
  it('renders without children', function() {
    const wrap = mount(<SFCard></SFCard>);
    expect(wrap.text()).toEqual('');
  });
  it('renders children', function() {
    const wrap = mount(
      <SFCard>
        <div>Sample Text</div>
      </SFCard>
    );
    expect(wrap.text()).toEqual('Sample Text');
  });
});
