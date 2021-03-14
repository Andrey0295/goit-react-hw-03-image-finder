import React from 'react';

const Button = ({ getMoreImages }) => {
  return (
    <button type="button" onClick={getMoreImages}>
      load more
    </button>
  );
};

export default Button;
