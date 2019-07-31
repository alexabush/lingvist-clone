import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import ProgressInfo from './ProgressInfo';
import ToggleNativePhrase from './ToggleNativePhrase';

export default function LanguageCardHeader({ nativePhrase, wordStrength }) {
  const [isShow, setIsShow] = useState(false);
  const toggleShow = () => {
    setIsShow(!isShow);
  };
  return (
    <div className="language-card-header">
      <p className={`header ${isShow || 'hide-header'}`}>
        {nativePhrase && nativePhrase}
      </p>
      <Link href="/levels">
        <div>
          <ProgressInfo wordStrength={wordStrength} />
        </div>
      </Link>
      <ToggleNativePhrase isShow={isShow} toggleShow={toggleShow} />
      <style jsx>{`
        .language-card-header {
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
        .hide-header {
          transform: translateY(20px);
          opacity: 0;
        }
      `}</style>
    </div>
  );
}

LanguageCardHeader.propTypes = {
  nativePhrase: PropTypes.string,
  wordStrength: PropTypes.number
};
