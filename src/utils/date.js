import moment from "moment";

export const date = () => {
  let date = new Date();

  return moment(date).format("DD/MM/YYYY hh:mm a");
};
