import React from "react";
import styled from "styled-components";

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
export const ImageList = ({ images }) => {
  return (
    <ImageContainer>
      {images.map((image, index) => (
        <ImageWrapper key={index}>
          <img src={image.imageUrl} alt={image.caption} />
          <div className="overlay">{image.caption}</div>
        </ImageWrapper>
      ))}
    </ImageContainer>
  );
};
