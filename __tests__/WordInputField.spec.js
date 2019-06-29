import * as React from 'react';
import { mount } from 'enzyme';
import WordInputField from '../src/comp/WordInputField';

describe('WordInputField', () => {
  it('renders ', function() {
    const wrap = mount(<WordInputField spanishWord={'burrito'} />);
  });
});
