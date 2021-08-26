const truncate = (text, maxLength) => (text.length > maxLength ? `${text.substr(0, maxLength)}...` : text);

// let text = ''
const parseToText = async (fileBlob) => new Promise((resolve) => {
  const reader = new FileReader();
  reader.onloadend = () => resolve(reader.result);
  reader.readAsText(fileBlob);
});

export {
  parseToText,
  truncate,
};
