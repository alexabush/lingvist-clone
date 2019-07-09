import React from 'react';
import PropTypes from 'prop-types';

export default function ToggleEnglishPhrase({ isShow, toggleShow }) {
  const handleClick = () => {
    toggleShow();
  };
  return (
    <div
      className={`sf-ToggleEnglishPhrase ${isShow &&
        'sf-ToggleEnglishPhrase--flip'}`}
      onClick={handleClick}
    >
      ^
      <style jsx>{`
        .sf-ToggleEnglishPhrase {
          transition: transform 300ms;
        }
        .sf-ToggleEnglishPhrase--flip {
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
