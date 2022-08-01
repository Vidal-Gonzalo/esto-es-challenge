import React from "react";
import "./Card.css";
import ButtonMenu from "../ButtonMenu/ButtonMenu";

export default function Card({ project }) {
  return (
    <div className="card">
      <div className="card-info">
        <h3>{project.title}</h3>
        <span>Creation date: {project.date}</span>
        <div className="card-info-user">
          <img
            className="user-pic"
            src={project.userImage}
            alt="Profile picture"
          />
          <p>{project.assigned}</p>
        </div>
      </div>
      <div className="card-actions">
        <ButtonMenu id={project.id} />
      </div>
    </div>
  );
}
