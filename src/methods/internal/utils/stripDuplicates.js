// https://medium.com/dailyjs/how-to-remove-array-duplicates-in-es6-5daa8789641c
export default function (array) {
  return [...new Set(array)];
};
