import * as React from 'react';
import { mount } from 'enzyme';
import WordInput from '../src/comp/WordInput';

describe('WordInput', () => {
  it('renders ', function() {
    const wrap = mount(<WordInput spanishPhrase={'el * grande'} />);
    const article = wrap.find('.article');
    expect(article.childAt(0).text()).toEqual('el ');
    expect(article.childAt(2).text()).toEqual(' grande');
  });
});
