import React, { useState, useEffect } from 'react';
import { frost2, polar4, green, rellow } from '../src/colors';
import data from '../src/mockLingvistData';
import SFModal from '../src/comp/SFModal';
import NavArrows from '../src/comp/NavArrows';
import LevelsInfo from '../src/comp/LevelsInfo';
import SFLanguageCard from '../src/comp/SFLanguageCard';
import ProgressBar from '../src/comp/ProgressBar';

export default class App extends React.Component {
  state = {
    showModal: false,
    words: [],
    currentIndex: 0,
  };

  componentDidMount() {
    this.setState({ words: data.data });
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };
  handleLeftClick = () => {
    if (this.state.currentIndex < 1) return;
    this.setState({ currentIndex: this.state.currentIndex - 1 });
  };
  handleRightClick = () => {
    if (this.state.currentIndex >= this.state.words.length - 1) return;
    this.setState({ currentIndex: this.state.currentIndex + 1 });
  };
  render() {
    const { showModal, words, currentIndex } = this.state;
    return showModal ? (
      <SFModal>
        <LevelsInfo toggleModal={this.toggleModal} />
      </SFModal>
    ) : (
      <div className="App">
        <div />
        <div className="Lingvist--container">
          <NavArrows onLeftClick={this.handleLeftClick} onRightClick={this.handleRightClick}>
            <SFLanguageCard card={words[currentIndex]} toggleModal={this.toggleModal} />
          </NavArrows>
          <div className="english-word">{words[currentIndex] && words[currentIndex].englishWord.join(', ')}</div>
        </div>
        <ProgressBar num={currentIndex + 1} />

        <style jsx>{`
          .App {
            min-height: 100vh;
            background: ${rellow};
            padding: 15px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
          }
          .english-word {
            position: relative;
            top: 30px;
            left: 40px;
          }
        `}</style>
      </div>
    );
  }
}
