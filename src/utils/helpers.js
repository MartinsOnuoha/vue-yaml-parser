const truncate = (text, maxLength) => (text.length > maxLength ? `${text.substr(0, maxLength)}...` : text);

export {
  // eslint-disable-next-line import/prefer-default-export
  truncate,
};
