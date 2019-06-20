import react from 'react';
import SFProgressCircles from './SFProgressCircles';
import Link from 'next/link';

export default function LevelsInfo() {
  function stopProp(e) {
    e.stopPropagation();
  }
  return (
    <div className="LevelsInfo">
      <div onClick={stopProp} className="LevelsInfoCard">
        <h3>The Lingvist levels of learning</h3>
        <p>
          The Lingvist algorithm uses spaced repetition, showing you the words you need to practice more often, so the
          above scale can go up as well as down over time.
        </p>
        <p>Make sure to practice as often as you can, and always try your best to get the answer correct.</p>
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
        .LevelsInfo {
          min-height: 100vh;
          background: darkblue;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .LevelsInfoCard {
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

function RepetitionInfoLevel({ text, num }) {
  return (
    <div className="RepetitionInfoLevel">
      <div className="SFProgressCircles--container">
        <SFProgressCircles wordStrength={num} />
      </div>
      <div className="infoText">{text}</div>
      <style jsx>{`
        .RepetitionInfoLevel {
          padding: 3px;
          display: flex;
        }
        .SFProgressCircles--container {
          margin: 0 10px;
          padding: 5px 0;
        }
      `}</style>
    </div>
  );
}
