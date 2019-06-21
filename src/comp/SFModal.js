import React from 'react';
import { createPortal } from 'react-dom';

export default class SFModal extends React.Component {
  constructor(props) {
    super(props);
    this.modalRoot = document.getElementById('modal');
  }

  render() {
    return createPortal(this.props.children, this.modalRoot);
  }
}
