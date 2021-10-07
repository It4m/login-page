import React from "react";
import "./Button.scss";
import { Icon } from "@iconify/react";
import googleIcon from "@iconify/icons-flat-color-icons/google";
import fbIcon from "@iconify/icons-ri/facebook-fill";
function Button(props) {
  return (
    <button className={`button ${props.type ? props.type : ""}`}>
      {props.type == "social" && (
        <Icon icon={props.socialType == "google" ? googleIcon : fbIcon} />
      )}
      {props.children}
    </button>
  );
}

export default Button;
