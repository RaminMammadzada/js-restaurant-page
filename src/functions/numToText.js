const numToText = (number) => {
  if (number === 0) {
    return 'First';
  }
  if (number === 1) {
    return 'Second';
  }
  if (number === 2) {
    return 'Third';
  }

  return null;
};

export default numToText;