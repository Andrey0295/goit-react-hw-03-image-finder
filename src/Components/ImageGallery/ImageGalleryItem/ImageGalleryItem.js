import React from 'react';
import PropTypes from 'prop-types';

import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ imageUrl, itemId, largeUrl }) => {
  return (
    <li className={styles.ImageGalleryItem} id={itemId}>
      <img
        src={imageUrl}
        alt=""
        name={largeUrl}
        className={styles.ImageGalleryItemImage}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  itemId: PropTypes.number.isRequired,
  largeUrl: PropTypes.string,
};

ImageGalleryItem.defaultProps = {
  largeUrl: '',
};

export default ImageGalleryItem;
