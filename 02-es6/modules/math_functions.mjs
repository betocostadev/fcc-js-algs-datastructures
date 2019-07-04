const add = (a, b) => {
  return a + b;
}
const subtract = (a, b) => {
  return a - b;
}

const sumArr = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i += 1) {
    total += arr[i];
  }
  return total;
};

export { add, subtract, sumArr };