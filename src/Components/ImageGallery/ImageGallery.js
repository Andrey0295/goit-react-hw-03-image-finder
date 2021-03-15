import React from 'react';
import PropTypes from 'prop-types';

import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

import styles from './ImageGallery.module.css';

const ImageGallery = ({ imagesData, handleClick }) => {
  return (
    <ul className={styles.ImageGallery} onClick={handleClick}>
      {imagesData.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          itemId={id}
          largeUrl={largeImageURL}
          imageUrl={webformatURL}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  imagesData: PropTypes.array,
  handleClick: PropTypes.func.isRequired,
};

ImageGallery.defaultProps = {
  imagesData: [],
};

export default ImageGallery;
