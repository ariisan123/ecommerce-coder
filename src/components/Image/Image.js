import React from 'react';

const Image = ({ src }) => {
  return (
    <div className="img-container">
      <img src={src} className="img" />
    </div>
  );
};

export default Image;
