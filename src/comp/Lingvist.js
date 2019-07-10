import React from 'react';
import T from 'prop-types';
import { rellow } from '../colors';
import SFModal from './SFModal';
import SFNavArrows from './SFNavArrows';
import LevelsInfo from './LevelsInfo';
import SFLanguageCard from './SFLanguageCard';
import ProgressBar from './ProgressBar';

export default class Lingvist extends React.Component {
  state = {
    showModal: false,
    isPrev: false
  };

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };
  handleLeftClick = () => {
    if (this.state.currentIndex < 1) return;
    if (this.state.isPrev) return;
    this.setState({ isPrev: true, currentIndex: this.state.currentIndex - 1 });
  };
  handleRightClick = () => {
    if (this.state.currentIndex >= this.state.words.length - 1) return;
    if (this.state.isPrev) {
      this.setState({
        isPrev: false,
        currentIndex: this.state.currentIndex + 1
      });
    } else {
      // TODO should trigger form submission
    }
  };
  handleSuccess = () => {
    this.setState({ currentIndex: this.state.currentIndex + 1 });
  };
  render() {
    const { showModal, isPrev } = this.state;
    const {
      spanishWord,
      spanishPhrase,
      englishPhrase,
      englishWord,
      wordStrength,
      wordDetails,
      partOfSpeech,
      currentIndex
    } = this.props;
    return showModal ? (
      <SFModal>
        <LevelsInfo toggleModal={this.toggleModal} />
      </SFModal>
    ) : (
      <div className="Lingvist">
        <div />
        <div className="Lingvist--container">
          <SFNavArrows
            isPrev={isPrev}
            onLeftClick={this.handleLeftClick}
            onRightClick={this.handleRightClick}
          >
            <SFLanguageCard
              spanishWord={spanishWord}
              spanishPhrase={spanishPhrase}
              englishPhrase={englishPhrase}
              englishWord={englishWord}
              wordStrength={wordStrength}
              wordDetails={wordDetails}
              partOfSpeech={partOfSpeech}
              toggleModal={this.toggleModal}
              handleSuccess={this.handleSuccess}
              isCorrect={isPrev}
            />
          </SFNavArrows>
          <div className="english-word">
            {englishWord && englishWord.join(', ')}
          </div>
        </div>
        <ProgressBar num={currentIndex + 1} />

        <style jsx>{`
          .Lingvist {
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

Lingvist.T = {
  spanishWord: T.string,
  spanishPhrase: T.string,
  englishPhrase: T.string,
  englishWord: T.arrayOf(T.string),
  wordStrength: T.number,
  wordDetails: T.string,
  partOfSpeech: T.string,
  currentIndex: T.number
};
