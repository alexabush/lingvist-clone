import * as React from 'react';
import { mount } from 'enzyme';
import LevelsInfo, { RepetitionInfoLevel } from '../src/comp/LevelsInfo';

describe('LevelsInfo', () => {
  it('should render', function() {
    const wrap = mount(<LevelsInfo />);
    expect(wrap.find('h3').text()).toBe('The Lingvist levels of learning');
  });
  it('should respond to modal close', function() {
    // TODO once modal implemented
  });
});

describe('RepetitionInfoLevel', () => {
  it('should render text prop', function() {
    const wrap = mount(<RepetitionInfoLevel text={'Tester Text'} />);
    expect(wrap.find('div.infoText').text()).toBe('Tester Text');
  });
});
