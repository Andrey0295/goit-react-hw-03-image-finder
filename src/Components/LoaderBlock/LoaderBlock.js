import React from 'react';
import Loader from 'react-loader-spinner';

import styles from './LoaderBlock.module.css';

const LoaderBlock = () => {
  return (
    <div className={styles.LoaderBlock}>
      <Loader type="Grid" color="#b50d0d" height={80} width={80} />
    </div>
  );
};

export default LoaderBlock;
