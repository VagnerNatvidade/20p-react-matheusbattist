import React from "react";
import "./styles.css";

const Button = ({ text, id, action }) => {
  function handleAction(e) {
    action(e);
  }

  return (
    <button id={id} onClick={handleAction}>
      {text}
    </button>
  );
};

export default Button;
