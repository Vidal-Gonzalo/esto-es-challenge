import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProject } from "../../store/actions/projectActions";
import { date } from "../../utils/date";
import { getUserImage } from "../../utils/getUserData";
import { swalSuccess } from "../../utils/swal";

export default function Form({ id, action }) {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.projectReducer.users);
  const projects = useSelector((state) => state.projectReducer.projects);
  const navigate = useNavigate();

  const getMaxId = (projects) => projects.length + 1;

  const initialValues = {
    title: "",
    description: "",
    manager: "",
    assigned: "",
    status: "",
  };

  const length = "* This field needs to have at least 4 characters";
  const required = "* Required field";

  const validationSchema = Yup.object().shape({
    title: Yup.string().min(4, length).required(required),
    description: Yup.string().required(required),
    manager: Yup.string().required(required),
    assigned: Yup.string().required(required),
    status: Yup.string().required(required),
  });

  const onSubmit = () => {
    const { title, description, manager, assigned, status } = values;

    const userImage = getUserImage(users, assigned);

    const projectData = {
      id: getMaxId(projects),
      date: date(),
      userImage,
      title,
      description,
      manager,
      assigned,
      status,
    };

    dispatch(addProject(projectData));
    swalSuccess("Project added successfully!");
    navigate("/", { replace: true });
  };
  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  const { handleSubmit, handleChange, handleBlur, touched, values, errors } =
    formik;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Project title</label>
        <input
          type="text"
          name="title"
          onBlur={handleBlur}
          values={values.title}
          onChange={handleChange}
          className={errors.title && touched.title ? "error" : ""}
        />
        {errors.title && touched.title && (
          <span className="errors">{errors.title}</span>
        )}
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          onBlur={handleBlur}
          values={values.description}
          onChange={handleChange}
          className={errors.description && touched.description ? "error" : ""}
        />
        {errors.description && touched.description && (
          <span className="errors">{errors.description}</span>
        )}
      </div>
      <div>
        <label htmlFor="manager">Project manager</label>
        <select
          type="text"
          name="manager"
          onBlur={handleBlur}
          values={values.manager}
          onChange={handleChange}
          className={errors.manager && touched.manager ? "error" : ""}
        >
          <option value="">Select a person</option>
          {users?.map((option, index) => (
            <option key={index} value={option.name}>
              {option.name}
            </option>
          ))}
        </select>
        {errors.manager && touched.manager && (
          <span className="errors">{errors.manager}</span>
        )}
      </div>
      <div>
        <label htmlFor="assigned">Assigned to</label>
        <select
          type="text"
          name="assigned"
          onBlur={handleBlur}
          values={values.assigned}
          onChange={handleChange}
          className={errors.assigned && touched.assigned ? "error" : ""}
        >
          <option value="">Select a person</option>
          {users?.map((option, index) => (
            <option key={index} value={option.name}>
              {option.name}
            </option>
          ))}
        </select>
        {errors.assigned && touched.assigned && (
          <span className="errors">{errors.assigned}</span>
        )}
      </div>
      <div>
        <label htmlFor="status">Status</label>
        <select
          type="text"
          name="status"
          onBlur={handleBlur}
          values={values.status}
          onChange={handleChange}
          className={errors.status && touched.status ? "error" : ""}
        >
          <option value="true">Enabled</option>
          <option value="asd">asd</option>
        </select>
        {errors.status && touched.status && (
          <span className="errors">{errors.status}</span>
        )}
      </div>
      <div>
        <button type="submit">Enviar</button>
      </div>
    </form>
  );
}
