import React from "react";
import styled from "styled-components";

const ImageWrapper = styled.div`
  border: 2px solid red;
  width: 400px;
  height: 400px;
`;

export const ImageList = ({ images }) => {
  return (
    <ImageWrapper>
      {images.map((image, index) => (
        <div key={index}>
          <img
            src={image.imageUrl}
            alt={image.caption}
            style={{ objectFit: "contain", overflow: "hidden", width: 400, height: 400 }}
          />
          <p>{image.caption}</p>
        </div>
      ))}
    </ImageWrapper>
  );
};
