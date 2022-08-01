import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "../../Card/Card";
import "./Projects.css";

export default function Projects() {
  const [projectsList, setProjectsList] = useState([]);

  const { loading, error, projects } = useSelector((state) => {
    return state.projectReducer;
  });

  useEffect(() => {
    if (projects?.length) {
      setProjectsList(projects);
    }
  }, [projects]);

  return (
    <div className="projects">
      <ul className="ul">
        {projectsList?.map((project) => (
          <li key={project.id}>
            <Card project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
}
