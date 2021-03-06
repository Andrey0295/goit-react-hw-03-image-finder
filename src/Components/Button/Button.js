import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.css';

const Button = ({ getMoreImages }) => {
  return (
    <button className={styles.Button} type="button" onClick={getMoreImages}>
      load more
    </button>
  );
};

Button.propTypes = {
  getMoreImages: PropTypes.func.isRequired,
};

export default Button;
