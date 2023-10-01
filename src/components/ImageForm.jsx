import React, { useState } from "react";
import styled from "styled-components";

const FormWrapper = styled.div`
  

  input[type="text"] {
    background-color: #f8e0c2;
  }
  ::placeholder {
    color: #060000;
    font-family: sans-serif;
    
  }
`;

export const ImageForm = ({ onAddImage }) => {
  const [imgUrl, setImgUrl] = useState("");
  const [imgCaption, setImgCaption] = useState("");

  const handleClick = (e) => {
    onAddImage({ imageUrl: imgUrl, caption: imgCaption });
    setImgUrl("");
    setImgCaption("");
  };

  return (
    <>
      <FormWrapper>
        <input
          type="text"
          placeholder="Image URL"
          value={imgUrl}
          onChange={(e) => setImgUrl(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Caption"
          value={imgCaption}
          onChange={(e) => setImgCaption(e.target.value)}
        />
        <br />
        <button type="button" onClick={handleClick}>
          Add to the Board
        </button>
      </FormWrapper>
    </>
  );
};
