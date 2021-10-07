import React from "react";
import { Icon } from "@iconify/react";
import CheckIcon from "@iconify/icons-fluent/checkmark-12-regular";
import "./Checkbox.scss";
function Checkbox(props) {
  return (
    <div className="Checkbox">
      <input type="checkbox" />
      <div>
        <Icon icon={CheckIcon} />
      </div>
    </div>
  );
}

export default Checkbox;
