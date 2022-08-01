import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "../../Card/Card";
import ProjectList from "../../ProjectList/ProjectList";
import "./Projects.css";

export default function Projects() {
  const [projectsList, setProjectsList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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
      <div className="search">
        <h3>Search your project</h3>

        <input
          type="text"
          placeholder="Search..."
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>

      <ul>
        <ProjectList projects={projectsList} searchTerm={searchTerm} />
      </ul>
    </div>
  );
}
