import * as React from 'react';
import { mount } from 'enzyme';
import HintLetter from '../src/comp/HintLetter';

describe('HintLetter', () => {
  it('renders content', function() {
    const wrap = mount(<HintLetter letter="t" />);
    expect(wrap.text()).toEqual('t');
  });
});
