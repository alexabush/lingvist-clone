import * as React from 'react';
import { mount } from 'enzyme';
import LanguageCardHeader from '../src/comp/LanguageCardHeader';

// No enzyme support for useState or CSS testing
describe('LanguageCardHeader', () => {
  it('renders without breaking', function() {
    const wrap = mount(<LanguageCardHeader />);
  });
});
