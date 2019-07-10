import * as React from 'react';
import { mount } from 'enzyme';
import LanguageCard from '../src/comp/LanguageCard';

describe('LanguageCard', () => {
  const emptyWordObj = {
    foreignWord: '',
    foreignPhrase: '',
    nativePhrase: '',
    nativeWord: ['', ''],
    wordStrength: 0,
    wordDetails: '',
    partOfSpeech: ''
  };
  it('mounts without failing', function() {
    const wrap = mount(<LanguageCard card={emptyWordObj} />);
  });
});
