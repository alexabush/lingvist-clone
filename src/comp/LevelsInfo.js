import React from 'react';
import PropTypes from 'prop-types';
import ProgressCircles from './ProgressCircles';
import Link from 'next/link';

export default function LevelsInfo() {
  function stopProp(e) {
    e.stopPropagation();
  }
  return (
    <div className="levels-info">
      <div onClick={stopProp} className="levels-info-card">
        <h3>The Lingvist levels of learning</h3>
        <p>
          The Lingvist algorithm uses spaced repetition, showing you the words
          you need to practice more often, so the above scale can go up as well
          as down over time.
        </p>
        <p>
          Make sure to practice as often as you can, and always try your best to
          get the answer correct.
        </p>
        <hr />

        <RepetitionInfo />
        <hr />
        <Link href="/lingvist">
          <div
            onClick={() => {
              console.log('modal close');
            }}
            className="LevelsModalFooter"
          >
            OK, got it!
          </div>
        </Link>
      </div>
      <style jsx>{`
        .levels-info {
          min-height: 100vh;
          background: darkblue;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .levels-info-card {
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
    <div className="repetition-info">
      <RepetitionInfoLevel
        num={5}
        text="Maximum memory strength!"
        color="lightgreen"
      />
      <RepetitionInfoLevel
        num={4}
        text="On the top of your tongue!"
        color="blue"
      />
      <RepetitionInfoLevel
        num={3}
        text="On the way to learning this word."
        color="purple"
      />
      <RepetitionInfoLevel
        num={2}
        text="This word needs more practice."
        color="teal"
      />
      <RepetitionInfoLevel
        num={1}
        text="New Word! You've never seen it before."
        color="darkorange"
      />
      <style jsx>{`
        .repetition-info {
          padding: 3px 0;
        }
      `}</style>
    </div>
  );
}

export function RepetitionInfoLevel({ text, num }) {
  return (
    <div className="repetition-info-level">
      <div className="progress-circles--container">
        <ProgressCircles wordStrength={num} />
      </div>
      <div className="info-text">{text}</div>
      <style jsx>{`
        .repetition-info-level {
          padding: 3px;
          display: flex;
        }
        .progress-circles--container {
          margin: 0 10px;
          padding: 5px 0;
        }
      `}</style>
    </div>
  );
}

RepetitionInfoLevel.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  num: PropTypes.number
};
