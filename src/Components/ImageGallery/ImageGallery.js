import React from 'react';

import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ imagesData }) => {
  return (
    <ul>
      {imagesData.map(image => (
        <ImageGalleryItem key={image.id} imageUrl={image.webformatURL} />
      ))}
    </ul>
  );
};

export default ImageGallery;
