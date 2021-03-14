import React from 'react';

import styles from './Button.module.css';

const Button = ({ getMoreImages }) => {
  return (
    <button className={styles.Button} type="button" onClick={getMoreImages}>
      load more
    </button>
  );
};

export default Button;
