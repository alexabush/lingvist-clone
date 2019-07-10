import * as React from 'react';
import { mount } from 'enzyme';
import LanguageCardFooter from '../src/comp/LanguageCardFooter';

describe('LanguageCardFooter', () => {
  it('toggles show on click', function() {
    const wrap = mount(<LanguageCardFooter />);
    let container = wrap.find('.language-card-footer--letter-picker-container');
    let toggleElement = wrap.find('.language-card-footer--toggle-container');
    expect(container.children().length).toBe(1);
    toggleElement.simulate('click');
    let firstClickContainer = wrap.find(
      '.language-card-footer--letter-picker-container'
    );
    expect(firstClickContainer.children().length).toBe(2);
    toggleElement.simulate('click');
    let secondClickContainer = wrap.find(
      '.language-card-footer--letter-picker-container'
    );

    expect(secondClickContainer.children().length).toBe(1);
  });
});
