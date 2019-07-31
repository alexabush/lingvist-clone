import * as React from 'react';
import { mount } from 'enzyme';
import WordInput from '../src/comp/WordInput';

describe('WordInput', () => {
  it('renders rest of sentence', function() {
    const wrap = mount(<WordInput foreignPhrase={'el * grande'} />);
    const article = wrap.find('.word-input--article');
    expect(article.childAt(0).text()).toEqual('el ');
    expect(article.childAt(2).text()).toEqual(' grande');
  });
});
