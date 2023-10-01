import React, { useState } from "react";
import { ImageForm } from "./components/ImageForm";
import { ImageList } from "./components/ImageList";
import styled from "styled-components";
import "./App.css";

const ImageWrapper = styled.div`
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  width: 200px;
  height: 200px;
  display: inline-block;
  margin: 10px;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: 0.5s ease;
    background-color: rgba(0, 0, 0, 0.54);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 20px;
  }

  &:hover .overlay {
    opacity: 1;
  }
`;

const Container = styled.div`
  text-align: center;
  padding: 2rem;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

function App() {
  const [images, setImages] = useState([]);

  const addImage = (newImage) => {
    setImages([...images, newImage]);
  };

  return (
    <Container>
      <h1>Knock-off Pinterest</h1>
      <ImageForm onAddImage={addImage} />
      <ImageContainer>
        {images.length > 0 &&
          images.map((image, index) => (
            <ImageWrapper key={index}>
              <img src={image.imageUrl} alt={image.caption} />
              <div className="overlay">{image.caption}</div>
            </ImageWrapper>
          ))}
      </ImageContainer>
    </Container>
  );
}

export default App;
