import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  let location = useLocation();
  let navigate = useNavigate();
  const [title, setTitle] = useState("");

  useEffect(() => {
    location.pathname === "/" && setTitle("My projects");
    location.pathname === "/editproject" && setTitle("Edit project");
    location.pathname === "/addproject" && setTitle("Add project");
  }, [location]);

  return (
    <div className="navbar">
      {title === "My projects" ? (
        <>
          <h1>{title}</h1>
          <div className="button-container">
            <Button
              action={() => navigate("/addproject")}
              text={"Add project"}
            />
          </div>
        </>
      ) : (
        <span className="back-button" onClick={() => navigate("/")}>
          <ArrowBackIcon />
          <p>Back</p>
          <h1>{title}</h1>
        </span>
      )}
    </div>
  );
}
