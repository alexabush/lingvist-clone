import React from 'react';
import Lingvist from './Lingvist';

const data = [
  {
    spanishWord: 'trabajo',
    spanishPhrase: 'El * duro',
    englishPhrase: 'The hard work',
    englishWord: ['the work', 'the job'],
    wordStrength: 1,
    wordDetails: 'masculine, singular',
    partOfSpeech: 'Noun'
  },
  {
    spanishWord: 'vez',
    spanishPhrase: 'Una otra *',
    englishPhrase: 'One more time',
    englishWord: ['once'],
    wordStrength: 4,
    wordDetails: 'feminine, singular',
    partOfSpeech: 'Noun'
  }
];

class LingvistData {
  constructor(cardData = {}, index = 0) {
    this.cardData = cardData;
    this.index = index;
  }

  get getIndex() {
    return this.index;
  }
  set setIndex(newIndex) {
    this.index = newIndex;
    return this.index;
  }

  get foreignLanguageWord() {
    return this.cardData[this.getIndex].spanishWord;
  }
  get foreignLanguagePhrase() {
    return this.cardData[this.getIndex].spanishPhrase;
  }
  get homeLanguagePhrase() {
    return this.cardData[this.getIndex].englishPhrase;
  }
  get homeLanguageWord() {
    return this.cardData[this.getIndex].englishWord;
  }
  get wordStrength() {
    return this.cardData[this.getIndex].wordStrength;
  }
  set wordStrength(newWordStrength) {
    this.cardData[this.getIndex].wordStrength = newWordStrength;
  }
  get wordDetails() {
    return this.cardData[this.getIndex].wordDetails;
  }
  get partOfSpeech() {
    return this.cardData[this.getIndex].partOfSpeech;
  }
}

export default function LingvistContainer() {
  const model = new LingvistData(data, 0);
  return (
    <Lingvist
      spanishWord={model.foreignLanguageWord}
      spanishPhrase={model.foreignLanguagePhrase}
      englishPhrase={model.homeLanguagePhrase}
      englishWord={model.homeLanguageWord}
      wordStrength={model.wordStrength}
      wordDetails={model.wordDetails}
      partOfSpeech={model.partOfSpeech}
    />
  );
}
