import {
  PROJECTS_REQUEST,
  PROJECTS_SUCCESS,
  PROJECTS_FAILURE,
  PROJECT_DELETE,
} from "../types";

const initialState = {
  projects: [
    {
      id: 1,
      title: "Landing Page",
      date: "09/09/2020 10:30 am",
      username: "Ignacio Truffa",
      userImage: "https://cdn-icons-png.flaticon.com/512/147/147142.png",
    },
    {
      id: 2,
      title: "Landing Page",
      date: "09/09/2020 10:30 am",
      username: "Ignacio Truffa",
      userImage: "https://cdn-icons-png.flaticon.com/512/147/147142.png",
    },
    {
      id: 3,
      title: "Landing Page",
      date: "09/09/2020 10:30 am",
      username: "Ignacio Truffa",
      userImage: "https://cdn-icons-png.flaticon.com/512/147/147142.png",
    },
    {
      id: 4,
      title: "Landing Page",
      date: "09/09/2020 10:30 am",
      username: "Ignacio Truffa",
      userImage: "https://cdn-icons-png.flaticon.com/512/147/147142.png",
    },
  ],
};

export const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    // case PROJECTS_REQUEST:
    //   return {
    //     ...state,
    //     loading: true,
    //   };
    // case PROJECTS_SUCCESS:
    //   return {
    //     loading: false,
    //     error: "",
    //     projects: action.payload,
    //   };
    // case PROJECTS_FAILURE:
    //   return {
    //     loading: false,
    //     error: action.payload,
    //     projects: [],
    //   };
    case PROJECT_DELETE:
      const projects = state.projects;
      return {
        loading: false,
        error: "",
        projects: projects.filter((project) => project.id !== action.payload),
      };

    default:
      return state;
  }
};
