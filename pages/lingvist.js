import React, { useState, useEffect } from 'react';
import { frost1, frost2, frost3, frost4, polar1, polar2, polar3, polar4, green, rellow } from '../src/colors';
import data from '../src/mockLingvistData';
import SFModal from '../src/comp/SFModal';
import LevelsInfo from '../src/comp/LevelsInfo';
import SFLanguageCard from '../src/comp/SFLanguageCard';

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
          <ArrowWrapper onLeftClick={this.handleLeftClick} onRightClick={this.handleRightClick}>
            <SFLanguageCard cardData={words[currentIndex]} toggleModal={this.toggleModal} />
          </ArrowWrapper>
          <div className="english-word">{words[currentIndex] && words[currentIndex].englishWord.join(', ')}</div>
        </div>
        <ProgressBar num={3} />

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

function ArrowWrapper({ onLeftClick, onRightClick, children }) {
  return (
    <div className="ArrowWrapper">
      <div className="arrow arrow-left" onClick={onLeftClick}>
        L
      </div>
      {children}
      <div className="arrow arrow-right" onClick={onRightClick}>
        R
      </div>
      <style jsx>{`
        .ArrowWrapper {
          display: flex;
          width: 600px;
          justify-content: space-between;
        }
        .arrow {
          align-self: center;
        }
      `}</style>
    </div>
  );
}

function ProgressBar({ num }) {
  return (
    <div className="progress-bar">
      <div className="progress-bar--num">{num < 10 ? '0' + num : num}</div>
      <div className="progress-bar--bar">
        <div className="progress-bar--bar---fill" />
      </div>
      <div className="progress-bar--num">100</div>
      <style jsx>{`
        .progress-bar {
          display: flex;
        }
        .progress-bar--num {
          padding: 0 5px;
          color: ${frost2};
        }
        .progress-bar--bar {
          position: relative;
          align-self: center;
          width: 500px;
          height: 10px;
          border-radius: 5px;
          background: ${polar4};
        }
        .progress-bar--bar---fill {
          position: absolute;
          height: 10px;
          background: ${green};
          border-radius: 5px;
          width: calc(1% * ${num});
        }
      `}</style>
    </div>
  );
}
