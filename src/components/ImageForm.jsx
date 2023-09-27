import React, { useState } from "react";

export const ImageForm = ({ onAddImage }) => {
  const [imgUrl, setImgUrl] = useState("");
  const [imgCaption, setImgCaption] = useState("");

  const handleClick = (e) => {
    onAddImage({ imageUrl: imgUrl, caption: imgCaption }); // Use object property names imageUrl and caption
    setImgUrl("");
    setImgCaption("");
  };

  return (
    <>
      <form>
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
      </form>
    </>
  );
};
