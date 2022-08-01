import React from "react";
import { addProject } from "../../../store/actions/projectActions";
import Form from "../../Form/Form";

export default function AddProject() {
  return (
    <Form
      buttonText={"Create project"}
      action={addProject}
      alertMessage={"Project added successfully!"}
    />
  );
}
