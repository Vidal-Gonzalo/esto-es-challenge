import React from "react";
import Card from "../Card/Card";

export default function ProjectList({ projects, searchTerm }) {
  return searchTerm
    ? projects
        ?.filter((val) => {
          if (val.title.toLowerCase().includes(searchTerm.toLowerCase()))
            return val;
          return "";
        })
        .map((val) => {
          return (
            <li key={val.id}>
              <Card project={val} />
            </li>
          );
        })
    : projects?.map((project) => (
        <li key={project.id}>
          <Card project={project} />
        </li>
      ));
}
