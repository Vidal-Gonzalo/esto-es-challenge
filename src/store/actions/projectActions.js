import axios from "axios";
import {
  PROJECTS_REQUEST,
  PROJECTS_SUCCESS,
  PROJECTS_FAILURE,
  PROJECT_DELETE,
} from "../types";

// export const projectsRequest = () => ({
//   type: PROJECTS_REQUEST,
// });

// export const projectsSuccess = (data) => ({
//   type: PROJECTS_SUCCESS,
//   payload: data,
// });

// export const projectsFailure = (error) => ({
//   type: PROJECTS_FAILURE,
//   payload: error,
// });

// export const getProjects = () => (dispatch) => {
//   dispatch(projectsRequest());
//   axios
//     .get("projects.json")
//     .then((response) => {
//       dispatch(projectsSuccess(response.data));
//     })
//     .catch((err) => {
//       dispatch(projectsFailure(err));
//     });
// };

export const deleteProject = (id) => ({
  type: PROJECT_DELETE,
  payload: id,
});
