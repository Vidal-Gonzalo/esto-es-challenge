import React from "react";
import Form from "../../Form/Form";
import { editProject } from "../../../store/actions/projectActions";
import { useParams } from "react-router-dom";

export default function EditProject() {
  const { id } = useParams();
  return (
    <div>
      <Form
        id={id}
        buttonText={"Save changes"}
        action={editProject}
        alertMessage={"Project modified successfully!"}
      />
    </div>
  );
}
