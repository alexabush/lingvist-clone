import React from 'react';
import PropTypes from 'prop-types';

export default function ToggleNativePhrase({ isShow, toggleShow }) {
  const handleClick = () => {
    toggleShow();
  };
  return (
    <div
      className={`toggle-native-phrase ${isShow &&
        'toggle-native-phrase--flip'}`}
      onClick={handleClick}
    >
      ^
      <style jsx>{`
        .toggle-native-phrase {
          transition: transform 300ms;
        }
        .toggle-native-phrase--flip {
          transform: rotate(180deg);
        }
      `}</style>
    </div>
  );
}

ToggleNativePhrase.propTypes = {
  isShow: PropTypes.bool,
  toggleShow: PropTypes.func
};
