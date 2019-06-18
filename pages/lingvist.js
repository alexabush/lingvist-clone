import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import SFLanguageCard from '../src/comp/SFLanguageCard';

export default function App() {
  const english = 'english word';
  const [showModal, showModalFn] = useState(false);
  function toggleModal() {
    console.log('toggleModal');
    showModalFn(!showModal);
  }
  return showModal ? (
    <LevelsModal>
      <LevelsModalContent toggleModal={toggleModal} />
    </LevelsModal>
  ) : (
    <div className="App">
      <ArrowWrapper
        onLeftClick={() => {
          console.log('left');
        }}
        onRightClick={() => {
          console.log('right');
        }}
      >
        <SFLanguageCard english={english} toggleModal={toggleModal} />
      </ArrowWrapper>
      <div className="english-word">{english}</div>
      <ProgressBar num={3} />
      <style jsx>{`
        .App {
          min-height: 100vh;
          background: sandybrown;
          padding: 40px;
        }
        .english-word {
          position: relative;
          top: 30px;
          left: 10px;
        }
      `}</style>
    </div>
  );
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

function Tooltip({ text }) {
  return (
    <div>
      <div className="Tooltip">{text}</div>;<div className="Tooltip--arrow" />
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
          // width: calc(100%);
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
        <div
          className="progress-bar--bar---fill"
          style={{
            width: `calc(1% * ${num})`,
          }}
        />
      </div>
      <div className="progress-bar--num">100</div>
      <style jsx>{`
        .progress-bar {
          position: absolute;
          top: 300px;
          display: flex;
          /* border: 1px solid red; */
        }
        .progress-bar--num {
          padding: 0 5px;
          color: green;
          /* border: 1px solid orangered; */
        }
        .progress-bar--bar {
          position: relative;
          align-self: center;
          width: 500px;
          height: 10px;
          border-radius: 5px;
          background: lightgray;
          /* border: 1px solid palevioletred; */
        }
        .progress-bar--bar---fill {
          position: absolute;
          height: 10px;
          background: green;
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
}
