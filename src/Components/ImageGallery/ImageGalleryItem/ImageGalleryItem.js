import React from 'react';

const ImageGalleryItem = ({ imageUrl }) => {
  return (
    <li>
      <img src={imageUrl} alt="" className="ImageGalleryItem-image" />
    </li>
  );
};

export default ImageGalleryItem;
