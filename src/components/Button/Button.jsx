import React from "react";
import "./Button.css";
import AddIcon from "@mui/icons-material/Add";

export default function Button({ action, text }) {
  return (
    <button className="btn" onClick={action}>
      <span>{text === "Add project" ? <AddIcon /> : null}</span>
      <p>{text}</p>
    </button>
  );
}
