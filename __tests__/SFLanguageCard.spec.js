import * as React from 'react';
import { mount } from 'enzyme';
import SFLanguageCard from '../src/comp/SFLanguageCard';

describe('SFLanguageCard', () => {
  it('mounts without failing', function() {
    const wrap = mount(<SFLanguageCard />);
  });
});
