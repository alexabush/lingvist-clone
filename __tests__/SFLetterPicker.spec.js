import * as React from 'react';
import { mount } from 'enzyme';
import SFLetterPicker, { AdditionalLetter } from '../src/comp/SFLetterPicker';

describe('SFLetterPicker', () => {
  it('Number of children is letters array + 1 (from styles component)', function() {
    const wrap1 = mount(<SFLetterPicker letters={[{ letter: 'a', num: 1 }]} />);
    expect(wrap1.find('.SFLetterPicker').children().length).toBe(2);
    const wrap2 = mount(
      <SFLetterPicker
        letters={[{ letter: 'a', num: 1 }, { letter: 'e', num: 2 }]}
      />
    );
    expect(wrap2.find('.SFLetterPicker').children().length).toBe(3);
  });
});

describe('AdditionalLetter', () => {
  it('Renders passed in letter and number', function() {
    const wrap = mount(<AdditionalLetter letter={'a'} num={1} />);
    expect(wrap.find('.AdditionalLetter--letter').text()).toBe('a');
    expect(wrap.find('.AdditionalLetter--number').text()).toBe('1');
  });
});
