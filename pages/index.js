import React from 'react';
import LingvistModel from '../src/comp/LingvistModel';
import { rellow } from '../src/colors';

import Head from 'next/head';

const HeadStyle = () => (
  <div>
    <style jsx global>{`
      body {
        background: #000;
        font: 11px menlo;
        color: #fff;
      }
    `}</style>
  </div>
);

const LingvistPage = props => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <div className="root">
        <h1>Language App</h1>
        <p className="subtitle">Inspired by Lingvist</p>
        <h2>How to Use:</h2>
        <p>
          Complete the foreign language phrase by entering in the foreign
          language word that completes the sentence.
        </p>
        <p>
          If you get the word wrong, the correct word will appear to help you
          remember next time.
        </p>
        <p>
          Linguistic details regarding the target word are at the bottom of the
          card.
        </p>
        <p>
          Note that the full sentence translation does NOT appear by default.
        </p>
        <p>
          This is to help you fill in the foreign word without translating the
          whole phrase into your native language.
        </p>
        <p>
          However, if you are stuck and think you would benefit from seeing the
          translation, click the arrow in the upper right corner of the card to
          display the translation.
        </p>
        <LingvistModel foreignWords={props.data.words} />
        <style jsx global>{`
          body,
          h1 {
            margin: 0;
            padding: 0;
          }
          h1,
          p.subtitle {
            text-align: center;
          }
          .root {
            min-height: 100vh;
            background: ${rellow};
            padding: 20px;
          }
        `}</style>
      </div>
    </div>
  );
};

LingvistPage.getInitialProps = async () => {
  const res = await fetch(
    'https://alexabush.github.io/portfolio-data/json/lingvist-data.json'
  );
  const data = await res.json();
  return { data };
};

export default LingvistPage;
