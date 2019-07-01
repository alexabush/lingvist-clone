import * as React from 'react';
import { mount } from 'enzyme';
import SFLanguageCard from '../src/comp/SFLanguageCard';

describe('SFLanguageCard', () => {
  const emptyWordObj = {
    spanishWord: '',
    spanishPhrase: '',
    englishPhrase: '',
    englishWord: ['', ''],
    wordStrength: 0,
    wordDetails: '',
    partOfSpeech: ''
  };
  it('mounts without failing', function() {
    const wrap = mount(<SFLanguageCard card={emptyWordObj} />);
  });
});
