import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import SFLanguageCard from '../src/comp/SFLanguageCard';
import { frost1, frost2, frost3, frost4, polar1, polar2, polar3, polar4, green, rellow } from '../src/colors';
import data from '../src/mockLingvistData';

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
  render() {
    const { showModal, words, currentIndex } = this.state;
    console.log(words);
    return showModal ? (
      <LevelsModal>
        <LevelsModalContent toggleModal={this.toggleModal} />
      </LevelsModal>
    ) : (
      <div className="App">
        <div />
        <div className="Lingvist--container">
          <ArrowWrapper
            onLeftClick={() => {
              console.log('left');
              if (this.state.currentIndex < 1) return;
              this.setState({ currentIndex: this.state.currentIndex - 1 });
            }}
            onRightClick={() => {
              if (this.state.currentIndex >= this.state.words.length - 1) return;
              this.setState({ currentIndex: this.state.currentIndex + 1 });

              console.log('right');
            }}
          >
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

class LevelsModal extends React.Component {
  constructor(props) {
    super(props);
    this.modalRoot = document.getElementById('modal');
  }

  render() {
    return createPortal(this.props.children, this.modalRoot);
  }
}

function LevelsModalContent({ toggleModal }) {
  function stopProp(e) {
    e.stopPropagation();
  }
  return (
    <div onClick={toggleModal} className="LevelsModalContent">
      <div onClick={stopProp} className="LevelsModalContentCard">
        <h3>The Lingvist levels of learning</h3>
        <p>
          The Lingvist algorithm uses spaced repetition, showing you the words you need to practice more often, so the
          above scale can go up as well as down over time.
        </p>
        <p>Make sure to practice as often as you can, and always try your best to get the answer correct.</p>
        <hr />

        <RepetitionInfo />
        <hr />

        <div
          onClick={() => {
            console.log('modal close');
            toggleModal();
          }}
          className="LevelsModalFooter"
        >
          OK, got it!
        </div>
      </div>
      <style jsx>{`
        .LevelsModalContent {
          min-height: 100vh;
          background: darkblue;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .LevelsModalContentCard {
          padding: 5px 30px;
          max-width: 400px;
          max-height: 450px;
          text-align: center;
          border-radius: 10px;
          background: white;
        }
      `}</style>
    </div>
  );
}

function RepetitionInfo() {
  return (
    <div className="RepetitionInfo">
      <RepetitionInfoLevel num={5} text="Maximum memory strength!" color="lightgreen" />
      <RepetitionInfoLevel num={4} text="On the top of your tongue!" color="blue" />
      <RepetitionInfoLevel num={3} text="On the way to learning this word." color="purple" />
      <RepetitionInfoLevel num={2} text="This word needs more practice." color="teal" />
      <RepetitionInfoLevel num={1} text="New Word! You've never seen it before." color="darkorange" />
      <style jsx>{`
        .RepetitionInfo {
          padding: 3px 0;
        }
      `}</style>
    </div>
  );
}

function RepetitionInfoLevel({ text, num, color }) {
  return (
    <div className="RepetitionInfoLevel">
      <ProgressDots strength={num} color={color} />
      <div className="infoText">{text}</div>
      <style jsx>{`
        .RepetitionInfoLevel {
          padding: 3px;
          display: flex;
        }
      `}</style>
    </div>
  );
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
          width: 510px;
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
