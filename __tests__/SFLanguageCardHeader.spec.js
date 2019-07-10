import * as React from 'react';
import { mount } from 'enzyme';
import SFLanguageCardHeader from '../src/comp/SFLanguageCardHeader';

// No enzyme support for useState or CSS testing
describe('SFLanguageCardHeader', () => {
  it('renders without breaking', function() {
    const wrap = mount(<SFLanguageCardHeader />);
  });
});
