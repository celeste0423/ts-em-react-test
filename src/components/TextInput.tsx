import { css } from "@emotion/react";
import React, { useState } from "react";

interface TextInputCompTypes {
  string: string;
  inputType: string;
  placeholder: string;
  onUpdate: (newValue: string) => void;
  errorMessage: string;
}

function TextInput({
  string,
  inputType,
  placeholder,
  errorMessage,
  onUpdate,
}: TextInputCompTypes) {
  const [onFocus, setOnFocus] = useState<boolean>(false);

  const textInputStyle = css`
    position: relative;

    .placeholder {
      position: absolute;
      top: ${onFocus || string ? 0 : "10px"};
      font-size: ${onFocus || string ? "13px" : "19px"};
      transition: top 0.3s, font-size 0.3s;
      margin: 10px;
      color: ${errorMessage ? "red" : "#888888"};
    }

    .inputBox {
      display: block;
      width: 100%;
      height: 60px;
      color: #363636;
      background-color: transparent;
      border: none;
      border-bottom: 1px solid ${errorMessage ? "red" : "#d8d8d8"};
      outline: none;
      font-size: 20px;
      border-radius: 5px;
      padding: 20px 15px 0 15px;
      transition: 0.3s;

      &:hover {
        background-color: #b0b0b02c;
      }
      &:focus {
        border-bottom: 1px solid ${errorMessage ? "red" : "#6fa4c5"};
      }
    }
    .errorMessage {
      margin: 5px 15px;
      color: red;
      font-size: 14px;
    }
  `;

  return (
    <div className="textInputDiv" css={textInputStyle}>
      <p className="placeholder">{placeholder}</p>
      <input
        type={inputType}
        onFocus={() => setOnFocus(true)}
        onBlur={() => setOnFocus(false)}
        className="inputBox"
        value={string || ""}
        onChange={(event) => onUpdate(event.target.value)}
        autoComplete="off"
      />

      <div className="errorMessage">{errorMessage ? errorMessage : null}</div>
    </div>
  );
}

export default TextInput;
