export const updateCheckedBoxes = (technologies, item) => {
  const index = technologies.indexOf(item);
  if (index === -1) {
    technologies.push(item);
  } else {
    technologies.splice(index, 1);
  }
  return technologies;
};
