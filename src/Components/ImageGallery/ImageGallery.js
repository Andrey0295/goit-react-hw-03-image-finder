import React from 'react';

import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

import styles from './ImageGallery.module.css';

const ImageGallery = ({ imagesData }) => {
  return (
    <ul className={styles.ImageGallery}>
      {imagesData.map(({ id, webformatURL }) => (
        <ImageGalleryItem key={id} imageUrl={webformatURL} />
      ))}
    </ul>
  );
};

export default ImageGallery;
