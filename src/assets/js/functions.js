function shuffle(arr) {
  arr.sort(() => Math.random() - 0.5);
}

function getMultiple(a, b) {
  return a * b;
}

function getDivide(a, b) {
  return a / b;
}

function getRndNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export {
  shuffle, getMultiple, getDivide, getRndNum,
};
