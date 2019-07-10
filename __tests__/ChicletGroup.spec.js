import * as React from 'react';
import { mount } from 'enzyme';
import ChicletGroup from '../src/comp/ChicletGroup';

// TODO test internal handle click methods
describe('ChicletGroup', () => {
  let wrap, container;
  beforeEach(() => {
    wrap = mount(<ChicletGroup />);
    container = wrap.find('div').first();
  });
  it('renders three Chiclets', function() {
    expect(container.children().length).toEqual(3);
  });
  it('first chiclet responds to click', function() {});
  it('second chiclet responds to click', function() {});
  it('third chiclet responds to click', function() {});
});
