import React from 'react';
import { rellow } from '../src/colors';
import data from '../src/mockLingvistData';
import SFModal from '../src/comp/SFModal';
import SFNavArrows from '../src/comp/SFNavArrows';
import LevelsInfo from '../src/comp/LevelsInfo';
import SFLanguageCard from '../src/comp/SFLanguageCard';
import ProgressBar from '../src/comp/ProgressBar';

export default class App extends React.Component {
  state = {
    showModal: false,
    words: [
      {
        spanishWord: '',
        spanishPhrase: '',
        englishPhrase: '',
        englishWord: ['', ''],
        wordStrength: 0,
        wordDetails: '',
        partOfSpeech: ''
      }
    ],
    currentIndex: 0,
    isPrev: false
  };

  componentDidMount() {
    this.setState({ words: data.data });
  }

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
    const { showModal, words, currentIndex, isPrev } = this.state;
    return showModal ? (
      <SFModal>
        <LevelsInfo toggleModal={this.toggleModal} />
      </SFModal>
    ) : (
      <div className="App">
        <div />
        <div className="Lingvist--container">
          <SFNavArrows
            isPrev={isPrev}
            onLeftClick={this.handleLeftClick}
            onRightClick={this.handleRightClick}
          >
            <SFLanguageCard
              card={words[currentIndex]}
              toggleModal={this.toggleModal}
              handleSuccess={this.handleSuccess}
              isCorrect={isPrev}
            />
          </SFNavArrows>
          <div className="english-word">
            {words[currentIndex] && words[currentIndex].englishWord.join(', ')}
          </div>
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
