import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let upperCaseText = text.toUpperCase();
    setText(upperCaseText);
    props.showAlert("Text converted to uppercase", "success");
  };

  const handleLowClick = () => {
    let lowerCaseText = text.toLowerCase();
    setText(lowerCaseText);
    props.showAlert("Text converted to lowercase", "success"); 
  };

  const handleClearText = () => {
    let emptyText = "";
    setText(emptyText);
    props.showAlert("Text cleared", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to clipboard! ", "success");
  };

  const removeExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed extra spaces from text", "success");
  };

  const [text, setText] = useState("");
  return (
    <>
      <div style={{ color: props.mode === "light" ? "black" : "white" }}>
        <div className="container">
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea
              className="form-control"
              value={text}
              id="myBox"
              rows="8"
              placeholder="Enter text here"
              onChange={handleOnChange}
              style={{
                backgroundColor: props.mode === "dark" ? "#13466e" : "white",
                color: props.mode === "light" ? "black" : "white",
              }}
            ></textarea>
          </div>
          <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
            Conver to UPPERCASE
          </button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>
            Conver to lowercase
          </button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearText}>
            Clear Text
          </button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
            Copy Text
          </button>
          <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={removeExtraSpaces}>
            Remove Extra Spaces
          </button>
        </div>
        <div className="container my-3">
          <h1>Your text summary</h1>
          <p>
            {text.split(" ").filter(((element) => {return element.length!==0})).length} words and {text.length} characters
          </p>
          <p>{0.008 * text.split(" ").filter(((element) => {return element.length!==0})).length} Minutes read</p>
          <h2>Preview</h2>
          <p>
            {text.length > 0
              ? text
              : "Nothing to preview!"}
          </p>
        </div>
      </div>
    </>
  );
}
