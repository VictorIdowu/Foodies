"use client";
import React, { useRef, useState } from "react";
import classes from "./ImagePicker.module.css";
import Image from "next/image";

const ImagePicker = ({ label, name }) => {
  const [image, setImage] = useState();
  const imageInput = useRef();

  const pickImageHandler = () => {
    imageInput.current?.click();
  };

  const imageChangedHandler = (e) => {
    const file = e.target.files[0];
    if (!file) {
      return setImage(null);
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={`${classes.preview}  ${!image && classes.noImage}`}>
          {image ? (
            <Image src={image} alt="The Image selected by the user." fill />
          ) : (
            <div>
              <p>{"No Image Picked yet."}</p>
              <button
                onClick={pickImageHandler}
                className={classes.button}
                type="button"
              >
                Pick an Image
              </button>
            </div>
          )}
        </div>

        <input
          ref={imageInput}
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          onChange={imageChangedHandler}
          required
        />
        {image && (
          <button
            onClick={pickImageHandler}
            className={classes.button}
            type="button"
          >
            Change Image
          </button>
        )}
      </div>
    </div>
  );
};

export default ImagePicker;
