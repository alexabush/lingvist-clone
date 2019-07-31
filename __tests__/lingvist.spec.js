import * as React from 'react';
import { shallow } from 'enzyme';
import Lingvist from '../src/comp/lingvist';

describe('lingvist page', () => {
  let wrap, instance;
  // get it to resume onclick behavior from before
  beforeEach(() => {
    wrap = shallow(<Lingvist />);
    instance = wrap.instance();
  });

  // TODO reimplement tests with new setup

  it('toggleModal method should toggleModal in state', function() {
    expect(wrap.state('showModal')).toBe(false);
    instance.toggleModal();
    expect(wrap.state('showModal')).toBe(true);
  });
});
