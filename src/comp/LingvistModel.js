import React from 'react';
import Lingvist from './Lingvist';

const data = [
  {
    foreignWord: 'trabajo',
    foreignPhrase: 'El * duro',
    nativePhrase: 'The hard work',
    nativeWord: ['the work', 'the job'],
    wordStrength: 1,
    wordDetails: 'masculine, singular',
    partOfSpeech: 'Noun'
  },
  {
    foreignWord: 'vez',
    foreignPhrase: 'Una otra *',
    nativePhrase: 'One more time',
    nativeWord: ['once'],
    wordStrength: 4,
    wordDetails: 'feminine, singular',
    partOfSpeech: 'Noun'
  }
];

class LingvistData {
  constructor(cardData = {}, index = 0) {
    this.cardData = cardData;
    this._index = index;
  }

  get index() {
    return this._index;
  }
  set index(newIndex) {
    // need to check if newIndex valid or other methods will break
    this._index = newIndex;
  }

  get foreignWord() {
    return this.cardData[this.index].foreignWord;
  }
  get foreignPhrase() {
    return this.cardData[this.index].foreignPhrase;
  }
  get nativePhrase() {
    return this.cardData[this.index].nativePhrase;
  }
  get nativeWord() {
    return this.cardData[this.index].nativeWord;
  }
  get wordStrength() {
    return this.cardData[this.index].wordStrength;
  }
  set wordStrength(newWordStrength) {
    this.cardData[this.index].wordStrength = newWordStrength;
  }
  get wordDetails() {
    return this.cardData[this.index].wordDetails;
  }
  get partOfSpeech() {
    return this.cardData[this.index].partOfSpeech;
  }
}
export default class LingvistContainer extends React.Component {
  state = {
    model: new LingvistData(data, 0)
  };

  updateWordStrength = newWordStrength => {
    let m = this.state.model;
    m.cardData[m.index].wordStrength = newWordStrength;
    this.setState({ model: m });
  };
  updateIndex = newIndex => {
    let m = this.state.model;
    m.index = newIndex;
    this.setState({ model: m });
  };

  render() {
    const { model } = this.state;
    return (
      <Lingvist
        foreignWord={model.foreignWord}
        foreignPhrase={model.foreignPhrase}
        nativePhrase={model.nativePhrase}
        nativeWord={model.nativeWord}
        wordStrength={model.wordStrength}
        wordDetails={model.wordDetails}
        partOfSpeech={model.partOfSpeech}
        currentIndex={model.index}
        updateWordStrength={this.updateWordStrength}
        updateIndex={this.updateIndex}
      />
    );
  }
}
