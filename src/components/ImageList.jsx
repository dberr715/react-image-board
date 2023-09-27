import React from "react";

export const ImageList = ({ images }) => {
  return (
    <>
      <ul>
        {images.map((image, index) => (
          <li key={index}>
            <img src={image.imageUrl} alt={image.caption} />
            <p>{image.caption}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
