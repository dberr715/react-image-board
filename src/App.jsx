import React, { useState } from "react";
import { ImageForm } from "./components/ImageForm";
import { ImageList } from "./components/ImageList";
import styled from "styled-components";
import "./App.css";

function App() {
  const [images, setImages] = useState([]);

  const addImage = (newImage) => {
    setImages([...images, newImage]);
  };

  return (
    <>
      <h1>Picture fun</h1>
      <ImageForm onAddImage={addImage} />
      <ImageList images={images} />
    </>
  );
}

export default App;
