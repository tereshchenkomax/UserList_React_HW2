import React from "react";
import "./styles.css";

export const User = props => {
  let { name, changeUser, checked, id } = props;
  return (
    <li className={checked ? "checked" : ""}>
      {name} -
      <input
        name={name}
        type="checkbox"
        onChange={changeUser.bind(this, id)}
        checked={checked}
      />
    </li>
  );
};
