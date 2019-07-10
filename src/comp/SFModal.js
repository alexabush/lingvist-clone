import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

export default class SFModal extends React.Component {
  constructor(props) {
    super(props);
    this.modalRoot = document.getElementById('modal');
  }

  render() {
    return createPortal(this.props.children, this.modalRoot);
  }
}

SFModal.propTypes = {
  children: PropTypes.node
};
