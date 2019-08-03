import React from 'react';
import fetch from 'isomorphic-unfetch';
import Lingvist from './Lingvist';

class LingvistData {
  constructor(words = {}, index = 0) {
    this.words = words;
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
    return this.words[this.index].foreignWord;
  }
  get foreignPhrase() {
    return this.words[this.index].foreignPhrase;
  }
  get nativePhrase() {
    return this.words[this.index].nativePhrase;
  }
  get nativeWord() {
    return this.words[this.index].nativeWord;
  }
  get wordStrength() {
    return this.words[this.index].wordStrength;
  }
  set wordStrength(newWordStrength) {
    this.words[this.index].wordStrength = newWordStrength;
  }
  get wordDetails() {
    return this.words[this.index].wordDetails;
  }
  get partOfSpeech() {
    return this.words[this.index].partOfSpeech;
  }
}
export default class LingvistContainer extends React.Component {
  state = {
    model: new LingvistData(this.props.foreignWords, 0)
  };

  updateWordStrength = newWordStrength => {
    let m = this.state.model;
    m.words[m.index].wordStrength = newWordStrength;
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
