import React from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
    </div>
  );
}
