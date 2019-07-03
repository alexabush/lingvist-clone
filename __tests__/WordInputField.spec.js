import * as React from 'react';
import { mount } from 'enzyme';
import WordInputField from '../src/comp/WordInputField';

describe('WordInputField', () => {
  it('renders ', function() {
    mount(<WordInputField spanishWord={'burrito'} />);
  });
  describe('compareAttemptWithCorrectWord', () => {
    let wrapper, instance;
    beforeEach(() => {
      wrapper = mount(<WordInputField />);
      instance = wrapper.instance();
    });
    it('returns empty object if no correct letters', () => {
      expect(instance.compareAttemptWithCorrectWord('eres', 'duck')).toEqual(
        {}
      );
    });
    it('returns in place letter correctly', () => {
      expect(instance.compareAttemptWithCorrectWord('eres', 'arm')).toEqual({
        '1': 'r'
      });
    });
    it('returns out of place letter correctly', () => {
      expect(instance.compareAttemptWithCorrectWord('eres', 'swan')).toEqual({
        '3': 's'
      });
    });
    it('returns duplicate letters correctly', () => {
      expect(instance.compareAttemptWithCorrectWord('eres', 'emet')).toEqual({
        '0': 'e',
        '2': 'e'
      });
    });
    it('returns out of order letters in correct order', () => {
      expect(instance.compareAttemptWithCorrectWord('eres', 'asar')).toEqual({
        '1': 'r',
        '3': 's'
      });
    });
    it.todo('handles out of order lettering');
  });
});
