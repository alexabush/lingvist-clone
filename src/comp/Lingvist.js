import React from 'react';
import PropTypes from 'prop-types';
import { rellow } from '../colors';
import Modal from './Modal';
import NavArrows from './NavArrows';
import LevelsInfo from './LevelsInfo';
import LanguageCard from './LanguageCard';
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
    const { currentIndex, updateIndex } = this.props;
    if (this.props.currentIndex < 1) return;
    if (this.state.isPrev) return;
    this.setState({ isPrev: true });
    updateIndex(currentIndex - 1);
  };
  handleRightClick = () => {
    const { currentIndex, updateIndex } = this.props;
    if (this.state.isPrev) {
      this.setState({
        isPrev: false
      });
      updateIndex(currentIndex + 1);
    } else {
      // TODO should trigger form submission
    }
  };
  handleSuccess = () => {
    const { currentIndex, updateIndex } = this.props;
    updateIndex(currentIndex + 1);
  };
  render() {
    const { showModal, isPrev } = this.state;
    const {
      foreignWord,
      foreignPhrase,
      nativePhrase,
      nativeWord,
      wordStrength,
      wordDetails,
      partOfSpeech,
      currentIndex
    } = this.props;
    return showModal ? (
      <Modal>
        <LevelsInfo toggleModal={this.toggleModal} />
      </Modal>
    ) : (
      <div className="lingvist">
        <div />
        <div className="lingvist--container">
          <NavArrows
            isPrev={isPrev}
            onLeftClick={this.handleLeftClick}
            onRightClick={this.handleRightClick}
          >
            <LanguageCard
              foreignWord={foreignWord}
              foreignPhrase={foreignPhrase}
              nativePhrase={nativePhrase}
              nativeWord={nativeWord}
              wordStrength={wordStrength}
              wordDetails={wordDetails}
              partOfSpeech={partOfSpeech}
              toggleModal={this.toggleModal}
              handleSuccess={this.handleSuccess}
              isCorrect={isPrev}
            />
          </NavArrows>
          <div className="native-word">
            {nativeWord && nativeWord.join(', ')}
          </div>
        </div>
        <ProgressBar num={currentIndex + 1} />

        <style jsx>{`
          .lingvist {
            min-height: 100vh;
            background: ${rellow};
            padding: 15px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
          }
          .native-word {
            position: relative;
            top: 30px;
            left: 40px;
          }
        `}</style>
      </div>
    );
  }
}

Lingvist.propTypes = {
  foreignWord: PropTypes.string,
  foreignPhrase: PropTypes.string,
  nativePhrase: PropTypes.string,
  nativeWord: PropTypes.arrayOf(PropTypes.string),
  wordStrength: PropTypes.number,
  wordDetails: PropTypes.string,
  partOfSpeech: PropTypes.string,
  currentIndex: PropTypes.number,
  updateIndex: PropTypes.func,
  updateWordStrength: PropTypes.func
};
