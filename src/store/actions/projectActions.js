import { PROJECT_DELETE, PROJECT_ADD } from "../types";

export const deleteProject = (id) => ({
  type: PROJECT_DELETE,
  payload: id,
});

export const addProject = (item) => ({
  type: PROJECT_ADD,
  payload: item,
});
