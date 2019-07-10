import * as React from 'react';
import { mount } from 'enzyme';
import WordInputField from '../src/comp/WordInputField';

describe('WordInputField', () => {
  it('renders ', function() {
    mount(<WordInputField foreignWord={'burrito'} />);
  });
});
