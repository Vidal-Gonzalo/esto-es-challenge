export const getUserImage = (users, userName) => {
  let image;
  users.forEach((user) => {
    if (user.name === userName) image = user.image;
  });
  return image;
};
