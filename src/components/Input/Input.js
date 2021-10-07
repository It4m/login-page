import React, { useState } from "react";
import { Icon } from "@iconify/react";
import emailIcon from "@iconify/icons-fluent/mail-16-filled";
import keyIcon from "@iconify/icons-fluent/key-16-filled";
import showIcon from "@iconify/icons-fluent/eye-show-20-filled";
import hideIcon from "@iconify/icons-fluent/eye-hide-20-filled";
import "./Input.scss";

function Input(props) {
  const [isVisible, setIsVisible] = useState(false);
  function onClick() {
    if (isVisible == false) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }
  return (
    <label className="input-wrapper">
      <Icon icon={props.type == "text" ? emailIcon : keyIcon} />
      <div>
        <input
          type={
            props.type == "text" ? props.type : isVisible ? "text" : props.type
          }
          placeholder=" "
        />
        <span>{props.placeholder}</span>
      </div>
      {props.type == "password" && (
        <button onClick={onClick}>
          <Icon icon={isVisible ? hideIcon : showIcon} />
        </button>
      )}
    </label>
  );
}

export default Input;
