import * as React from 'react';
import { mount } from 'enzyme';
import SFLanguageCardFooter from '../src/comp/SFLanguageCardFooter';

describe('SFLanguageCardFooter', () => {
  it('toggles show on click', function() {
    const wrap = mount(<SFLanguageCardFooter />);
    let container = wrap.find('.SFLanguageCardFooter--LetterPicker-container');
    let toggleElement = wrap.find('.SFLanguageCardFooter--toggle-container');
    expect(container.children().length).toBe(1);
    toggleElement.simulate('click');
    let firstClickContainer = wrap.find(
      '.SFLanguageCardFooter--LetterPicker-container'
    );
    expect(firstClickContainer.children().length).toBe(2);
    toggleElement.simulate('click');
    let secondClickContainer = wrap.find(
      '.SFLanguageCardFooter--LetterPicker-container'
    );

    expect(secondClickContainer.children().length).toBe(1);
  });
});
