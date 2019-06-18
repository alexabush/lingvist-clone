import React, { useState } from 'react';
import SFProgressCircles from './SFProgressCircles';
import SFTooltip from './SFTooltip';

export default function Card({ english = 'english word', toggleModal }) {
  return (
    <div className="Card">
      <CardHeader english={english} toggleModal={toggleModal} />
      <WordInput />
      <SFLanguageCardFooter description="^" partOfSpeech={'n'} />
      <style jsx>{`
        .Card {
          position: relative;
          background: white;
          width: 450px;
          height: 125px;
          box-shadow: 0 8px 6px -6px black;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-sizing: border-box;
          padding: 5px 10px;
        }
      `}</style>
    </div>
  );
}

function CardHeader({ english, toggleModal }) {
  const [isShow, setIsShow] = useState(false);
  const toggleShow = () => {
    setIsShow(!isShow);
  };
  return (
    <div className="CardHeader">
      <p className={`header ${isShow || 'hideHeader'}`}>{english}</p>
      <SFProgressCircles strength={3} toggleModal={toggleModal} />
      <ToggleEnglishWord isShow={isShow} toggleShow={toggleShow} />
      <style jsx>{`
        .CardHeader {
          display: flex;
          justify-content: space-between;
        }
        .header {
          position: absolute;
          top: -80px;
          transition: all 500ms;
          font-size: 1rem;
        }

        .hideHeader {
          transform: translateY(20px);
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
function ToggleEnglishWord({ toggleShow }) {
  return (
    <div className="ToggleEnglishWord" onClick={toggleShow}>
      ^<style jsx>{``}</style>
    </div>
  );
}

function WordInput() {
  // let { article, word } = this.props;
  let article = 'el';
  let word = 'goberieno';
  return (
    <div className="WordInput">
      <div className="article">{article}</div>
      <WordInputField word={word} />
      <style jsx>{`
        .WordInput {
          display: inline-block;
        }
        .article {
          display: inline-block;
          margin-right: 5px;
        }
      `}</style>
    </div>
  );
}

class WordInputField extends React.Component {
  state = { value: '', giveHelp: false };
  handleChange = e => {
    this.setState({ value: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.setState({ value: '', giveHelp: true });
  };

  render() {
    let { word } = this.props;
    let { value, giveHelp } = this.state;
    return (
      <div className="WordInputField">
        <form onSubmit={this.handleSubmit}>
          {/* <div className="CompletedWord">
            {customValue(value, word)}
          </div> */}
          <input type="text" value={value} onChange={this.handleChange} />
        </form>
        {this.state.giveHelp && <div>first</div>}
        <style jsx>{`
          .WordInputField {
            /* display: relative; */
            display: inline-block;
            font-family: monospace;
            /* border: 1px solid red; */
          }
        `}</style>
      </div>
    );
  }
}

function SFLanguageCardFooter({ description, partOfSpeech }) {
  const [showAdditionalLetters, setShowAdditionalLetters] = useState(false);
  const toggleShowAdditionalLetters = () => {
    setShowAdditionalLetters(!showAdditionalLetters);
  };
  return (
    <div className="SFLanguageCardFooter">
      <div className="SFLanguageCardFooter--wordData-container">
        <SFTooltip display="masculine, singular" direction="top" width={130}>
          {partOfSpeech}
        </SFTooltip>
        <SFTooltip display="Noun" direction="top" width={40}>
          {description}
        </SFTooltip>
      </div>
      <div>
        <div onClick={toggleShowAdditionalLetters}>En</div>
        <AdditionalLetterPicker isShow={showAdditionalLetters} />
      </div>
      <style jsx>{`
        .SFLanguageCardFooter {
          display: flex;
          justify-content: space-between;
          border: 1px solid red;
        }
        .SFLanguageCardFooter--wordData-container {
          display: flex;
        }
      `}</style>
    </div>
  );
}

function AdditionalLetterPicker({ isShow = false }) {
  return (
    <div className="AdditionalLetterPicker">
      <AdditionalLetter letter={'a'} num={1} />
      <AdditionalLetter letter={'e'} num={2} />
      <AdditionalLetter letter={'i'} num={3} />
      <AdditionalLetter letter={'o'} num={4} />
      <AdditionalLetter letter={'u'} num={5} />
      <AdditionalLetter letter={'u'} num={6} />
      <AdditionalLetter letter={'n'} num={7} />
      <style jsx>{`
        .AdditionalLetterPicker {
          display: ${isShow ? 'flex' : 'none'};
          justify-content: space-between;
          width: 450px;
          height: 75px;
          padding: 20px 120px;
          box-sizing: border-box;
          background: darkblue;
          border-radius: 5px;
          position: absolute;
          left: 0px;
          top: calc(100% + 20px);
        }
        .AdditionalLetterPicker::after {
          content: '';
          border-style: solid;
          border-width: 0px 14px 16px 14px;
          border-color: transparent transparent darkblue transparent;
          position: absolute;
          top: -15px;
          right: calc(10px);
        }
      `}</style>
    </div>
  );
}

function AdditionalLetter({ letter, num }) {
  return (
    <div>
      <div className="AdditionalLetter--letter">{letter}</div>
      <div className="AdditionalLetter--number">{num}</div>
      <style jsx>{`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;
        .AdditionalLetter--letter {
          font-size: 1.25rem;
        }
        .AdditionalLetter--number {
          font-size: 0.5rem;
        }
      `}</style>
    </div>
  );
}
