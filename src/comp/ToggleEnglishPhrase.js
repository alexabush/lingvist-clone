import React from 'react';
import PropTypes from 'prop-types';

export default function ToggleEnglishPhrase({ isShow, toggleShow }) {
  const handleClick = () => {
    toggleShow();
  };
  return (
    <div
      className={`ToggleEnglishPhrase ${isShow && 'ToggleEnglishPhrase--flip'}`}
      onClick={handleClick}
    >
      ^
      <style jsx>{`
        .ToggleEnglishPhrase {
          transition: transform 300ms;
        }
        .ToggleEnglishPhrase--flip {
          transform: rotate(180deg);
        }
      `}</style>
    </div>
  );
}

ToggleEnglishPhrase.propTypes = {
  isShow: PropTypes.bool,
  toggleShow: PropTypes.func
};
