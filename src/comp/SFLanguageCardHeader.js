import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import SFProgressInfo from './SFProgressInfo';
import ToggleEnglishPhrase from './ToggleEnglishPhrase';

export default function SFLanguageCardHeader({ englishPhrase, wordStrength }) {
  const [isShow, setIsShow] = useState(false);
  const toggleShow = () => {
    setIsShow(!isShow);
  };
  return (
    <div className="SFLanguageCardHeader">
      <p className={`header ${isShow || 'hideHeader'}`}>
        {englishPhrase && englishPhrase}
      </p>
      <Link href="/levels">
        <div>
          <SFProgressInfo wordStrength={wordStrength} />
        </div>
      </Link>
      <ToggleEnglishPhrase isShow={isShow} toggleShow={toggleShow} />
      <style jsx>{`
        .SFLanguageCardHeader {
          display: flex;
          justify-content: space-between;
          padding: 5px 5px 0px 25px;
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

SFLanguageCardHeader.propTypes = {
  englishPhrase: PropTypes.string,
  wordStrength: PropTypes.number
};
