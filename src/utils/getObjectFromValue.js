export const getObjectFromValue = (value, options) => {
  if (!options || !value) return null;

  const object = options.find(option => {
    return String(option.value) === value;
  });
  if (object) {
    object.label = object.name;
    return object;
  } else {
    return null;
  }
};
