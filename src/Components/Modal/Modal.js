import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Modal.module.css';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    const { onClose } = this.props;
    if (e.code === 'Escape') {
      onClose();
    }
  };

  handleBackdropClick = e => {
    const { onClose } = this.props;
    if (e.currentTarget === e.target) {
      onClose();
    }
  };
  render() {
    const { children } = this.props;
    return (
      <div className={styles.Overlay} onClick={this.handleBackdropClick}>
        <div className={styles.Modal}>{children}</div>
      </div>
    );
  }
}

Modal.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  children: [],
};

export default Modal;
