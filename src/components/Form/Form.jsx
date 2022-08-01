import React from "react";
import { useFormik } from "formik";
import "./Form.css";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Button/Button";
import { date } from "../../utils/date";
import { getUserImage } from "../../utils/getUserData";
import { swalSuccess } from "../../utils/swal";

export default function Form({ id, action, buttonText, alertMessage }) {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.projectReducer.users);
  const projects = useSelector((state) => state.projectReducer.projects);
  const navigate = useNavigate();

  const getMaxId = (projects) => projects.length + 1;

  const length = "* This field needs to have at least 4 characters";
  const required = "* Required field";

  const validationSchema = Yup.object().shape({
    title: Yup.string().min(4, length).required(required),
    description: Yup.string().required(required),
    manager: Yup.string().required(required),
    assigned: Yup.string().required(required),
    status: Yup.string().required(required),
  });

  const project = projects.find((p) => p.id === Number(id));

  const initialValues = {
    title: "",
    description: "",
    manager: "",
    assigned: "",
    status: "",
  };

  const onSubmit = () => {
    const { title, description, manager, assigned, status } = values;

    const userImage = getUserImage(users, assigned);

    const projectData = {
      id: project ? project.id : getMaxId(projects),
      title,
      date: project ? project.date : date(),
      assigned,
      userImage,
      description,
      manager,
      status,
    };

    dispatch(action(projectData));
    swalSuccess(alertMessage);
    navigate("/", { replace: true });
  };
  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  const { handleSubmit, handleChange, handleBlur, touched, values, errors } =
    formik;

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="label" htmlFor="title">
            Project name
          </label>
          <input
            type="text"
            name="title"
            onBlur={handleBlur}
            values={values.title}
            onChange={handleChange}
            className={errors.title && touched.title ? "error" : "form-input"}
            defaultValue={project?.title}
          />
          {errors.title && touched.title && (
            <>
              <br />
              <span className="errors">{errors.title}</span>
            </>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            onBlur={handleBlur}
            values={values.description}
            onChange={handleChange}
            className={
              errors.description && touched.description ? "error" : "form-input"
            }
            defaultValue={project?.description}
          />
          {errors.description && touched.description && (
            <>
              <br />
              <span className="errors">{errors.description}</span>
            </>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="manager">Project manager</label>
          <select
            type="text"
            name="manager"
            onBlur={handleBlur}
            values={values.manager}
            onChange={handleChange}
            className={
              errors.manager && touched.manager ? "error" : "form-select"
            }
            defaultValue={project?.manager}
          >
            <option value="">Select a person</option>
            {users?.map((option, index) => (
              <option key={index} value={option.name}>
                {option.name}
              </option>
            ))}
          </select>
          {errors.manager && touched.manager && (
            <>
              <br />
              <span className="errors">{errors.manager}</span>
            </>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="assigned">Assigned to</label>
          <select
            type="text"
            name="assigned"
            onBlur={handleBlur}
            values={values.assigned}
            onChange={handleChange}
            className={
              errors.assigned && touched.assigned ? "error" : "form-select"
            }
            defaultValue={project?.assigned}
          >
            <option value="">Select a person</option>
            {users?.map((option, index) => (
              <option key={index} value={option.name}>
                {option.name}
              </option>
            ))}
          </select>
          {errors.assigned && touched.assigned && (
            <>
              <br />
              <span className="errors">{errors.assigned}</span>
            </>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="status">Status</label>
          <select
            type="text"
            name="status"
            onBlur={handleBlur}
            values={values.status}
            onChange={handleChange}
            className={
              errors.status && touched.status ? "error" : "form-select"
            }
            defaultValue={project?.status}
          >
            <option value="enabled">Enabled</option>
            <option value="disabled">Disabled</option>
          </select>
          {errors.status && touched.status && (
            <>
              <br />
              <span className="errors">{errors.status}</span>
            </>
          )}
        </div>
        <div>
          <Button text={buttonText} type={"submit"} />
        </div>
      </form>
    </div>
  );
}
