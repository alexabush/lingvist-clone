import * as React from 'react';
import { mount } from 'enzyme';
import LetterPicker, { AdditionalLetter } from '../src/comp/LetterPicker';

describe('LetterPicker', () => {
  it('Number of children is letters array + 1 (from styles component)', function() {
    const wrap1 = mount(<LetterPicker letters={[{ letter: 'a', num: 1 }]} />);
    expect(wrap1.find('.letter-picker').children().length).toBe(2);
    const wrap2 = mount(
      <LetterPicker
        letters={[{ letter: 'a', num: 1 }, { letter: 'e', num: 2 }]}
      />
    );
    expect(wrap2.find('.letter-picker').children().length).toBe(3);
  });
});

describe('AdditionalLetter', () => {
  it('Renders passed in letter and number', function() {
    const wrap = mount(<AdditionalLetter letter={'a'} num={1} />);
    expect(wrap.find('.additional-letter--letter').text()).toBe('a');
    expect(wrap.find('.additional-letter--number').text()).toBe('1');
  });
});
