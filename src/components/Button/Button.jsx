import React from "react";
import "./Button.css";
import AddIcon from "@mui/icons-material/Add";

export default function Button({ action, text, type }) {
  return (
    <button className="btn" onClick={action} type={type}>
      <span>{text === "Add project" ? <AddIcon /> : null}</span>
      <p>{text}</p>
    </button>
  );
}
