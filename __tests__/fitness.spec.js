import * as React from 'react';
import { mount } from 'enzyme';
import FitnessPage from '../pages/fitness';

describe('fitness page', () => {
  it('renders', function() {
    const wrap = mount(<FitnessPage />);
  });
});
