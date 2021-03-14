import React from 'react';

import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ imageUrl }) => {
  return (
    <li className={styles.ImageGalleryItem}>
      <img src={imageUrl} alt="" className={styles.ImageGalleryItemImage} />
    </li>
  );
};

export default ImageGalleryItem;
